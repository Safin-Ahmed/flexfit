/**
 * It calculates the progress of a workout by counting the number of completed exercises in the
 * currently active routine
 * @param {any} workoutData - This is the workout data that we get from the API.
 * @returns {number} A number between 0 and 100
 */
export const getRoutineProgress = (workoutData: any) => {
  let currentWorkout;
  let activeRoutine = null;
  let totalExercises = 0;
  let completedExercises = 0;
  let progress = 0;

  // Calculate current workout
  for (let i = 0; i < workoutData.length; i++) {
    let workout = workoutData[i].attributes;
    if (!workout.isCompleted) {
      currentWorkout = workout;
      break;
    }
  }

  // If there is no current workout
  if (!currentWorkout) return;

  // Find the currently active routine
  for (const routine of currentWorkout.routines.data) {
    if (!routine.attributes.isCompleted) {
      activeRoutine = routine;
      break;
    }
  }

  // If there is no active routine
  if (!activeRoutine) return;

  // Calculate progress based on active routine and its exercise lists
  if (activeRoutine) {
    totalExercises = activeRoutine.attributes.exercise_lists.data.length;
    for (const exerciseList of activeRoutine.attributes.exercise_lists.data) {
      completedExercises += exerciseList.attributes.isCompleted ? 1 : 0;
    }
  }

  progress = Number(
    (totalExercises > 0
      ? (completedExercises / totalExercises) * 100
      : 0
    ).toFixed()
  );

  return {
    activeRoutine,
    progress,
  };
};
