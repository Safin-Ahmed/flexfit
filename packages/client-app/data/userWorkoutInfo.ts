export const userWorkoutInfo = {
  name: "workoutInfo",
  user: "userId",
  workouts: [
    {
      id: "1",
      order: "1",
      title: "First Month Workout",
      exercises: [
        {
          id: "1",
          order: "1",
          workoutId: "1",
          title: "Chest workout",
          chest: [
            {
              id: "1",
              exerciseId: "1",
              title: "Chest exercise 1",
              time: 10,
              reps: 5,
              isCompleted: true,
            },
            {
              id: "2",
              exerciseId: "1",
              title: "Chest exercise 2",
              time: 10,
              reps: 5,
              isCompleted: true,
            },
          ],
          percentage: "100%",
          isCompleted: true,
          point: "10/random (optional)",
        },
        {
          id: "2",
          order: "2",
          workoutId: "1",
          title: "Back workout",
          back: [
            {
              id: "1",
              exerciseId: "1",
              title: "Back exercise 1",
              time: 10,
              reps: 5,
              isCompleted: true,
            },
            {
              id: "2",
              exerciseId: "1",
              title: "Back exercise 2",
              time: 10,
              reps: 5,
              isCompleted: false,
            },
          ],
          percentage: "50%",
          isCompleted: false,
          point: "10/random (optional)",
        },
      ],
      recurring: {
        startDate: new Date(),
        endDate: new Date(),
      },
      percentage: "70%",
      isCompleted: false,
      point: "10/random (optional)",
    },
  ],
};
