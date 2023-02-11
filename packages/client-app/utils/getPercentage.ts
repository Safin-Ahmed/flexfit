// Here is a function that takes the given JSON data and calculates the percentage of finished tasks:

export const calculatePercentage = (data: any) => {
  let totalTasks = 0;
  let finishedTasks = 0;

  data.forEach((exercise: any) => {
    totalTasks += exercise.tasks.length;
    exercise.tasks.forEach((task: any) => {
      if (task.status === "finished") {
        finishedTasks++;
      }
    });
  });

  return (finishedTasks / totalTasks) * 100;
};
