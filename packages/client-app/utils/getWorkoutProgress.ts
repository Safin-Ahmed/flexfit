/**
 * It takes in an array of workout objects, and returns a number between 0 and 100 that represents the percentage of the current workout that has been completed
 * @param {any} workoutData - This is the data that is returned from the API.
 * @returns {number} A number between 0 and 100
 */
export const getWorkoutProgress = (workoutData: any) => {
  let currentWorkout;
  let totalRoutines = 0;
  let completedRoutines = 0;

  // Calculate current workout
  for (let i = 0; i < workoutData.length; i++) {
    let workout = workoutData[i].attributes;
    if (!workout.isCompleted) {
      currentWorkout = workout;
      break;
    }
  }

  // If there is no workout
  if (!currentWorkout) return 100;

  // Extract routines data
  const routines = currentWorkout.routines.data;
  if (!routines.length) return 0;
  totalRoutines = routines.length;

  routines.forEach((routine: any) => {
    if (routine.attributes.isCompleted) completedRoutines++;
  });

  return Number(((completedRoutines / totalRoutines) * 100).toFixed());
};
