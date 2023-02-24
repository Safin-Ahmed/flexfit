const nodemailer = require("nodemailer");
const reset = async (workout, strapi) => {
  workout.routines.forEach(async (routine, index) => {
    if (index === 0) {
      await strapi.db.query("api::routine.routine").update({
        where: { id: routine.id },
        data: {
          isActive: true,
          isCompleted: false,
        },
      });
    } else {
      await strapi.db.query("api::routine.routine").update({
        where: { id: routine.id },
        data: {
          isActive: false,
          isCompleted: false,
        },
      });
    }
  });
};

const sendMail = async (workout) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.TRANSPORTER_USER,
      pass: process.env.TRANSPORTER_PASS,
    },
  });

  const info = await transporter.sendMail({
    from: "flexfitwebapp@gmail.com",
    to: workout.user.email,
    subject: `Your Workout: ${workout.title} is not completed yet. Your current progress is ${workout.progress}.`,
    text: "This is a reminder for your unfinished workout. Please get back to your workout",
  });
};
module.exports = {
  "5 8 * * 0": async ({ strapi }) => {
    // Add logic
    const workouts = await strapi.db.query("api::workout.workout").findMany({
      where: {
        progress: {
          $lt: 100,
        },
      },
      populate: ["user"],
    });

    for (const workout of workouts) {
      await sendMail(workout);

      console.log("message sent");
    }
  },

  "0 0 * * *": async ({ strapi }) => {
    const workouts = await strapi.db.query("api::workout.workout").findMany({
      where: {
        progress: {
          $lt: 100,
        },
      },
      populate: true,
    });

    for (const workout of workouts) {
      let completedRoutine = 0;
      for (const routine of workout.routines) {
        if (routine.isActive && !routine.isCompleted) {
          await sendMail(workout);
          break;
        }

        if (!routine.isActive && !routine.isCompleted) {
          await strapi.db.query("api::routine.routine").update({
            where: { id: routine.id },
            data: {
              isActive: true,
            },
          });
          break;
        }

        if (routine.isCompleted && !routine.isActive) {
          completedRoutine++;
        }
      }

      if (completedRoutine === workout.routines.length) {
        await reset(workout, strapi);
      }
    }
  },
};
