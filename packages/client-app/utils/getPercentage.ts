interface Exercise {
  id: string;
  exerciseId: string;
  title: string;
  time: number;
  reps: number;
  isCompleted: boolean;
}

interface BodyPart {
  id: string;
  workoutId: string;
  title: string;
  exercises: Exercise[];
  percentage: string;
  isCompleted: boolean;
  point?: string;
}

interface Workout {
  id: string;
  order: string;
  title: string;
  bodyParts: BodyPart[];
  recurring: {
    startDate: Date;
    endDate: Date;
  };
  percentage: string;
  isCompleted: boolean;
  point?: string;
}

interface WorkoutInfo {
  name: string;
  user: string;
  workouts: Workout[];
}

/**
 * It takes in a workout object and returns the percentage of the workout that has been completed
 * @param { WorkoutInfo } workoutInfo - This is the workout object that we get from the API.
 * @returns A number between 0 and 100.
 */ export const currentWorkoutProgress = (workoutInfo: WorkoutInfo) => {
  let currentWorkout;
  let totalBodyPartsExercises = 0;
  let finishedBodyPartsExercises = 0;

  for (let i = 0; i < workoutInfo.workouts.length; i++) {
    let workout = workoutInfo.workouts[i];
    if (!workout.isCompleted) {
      currentWorkout = workout;
      break;
    }
  }

  if (!currentWorkout) return 100;

  currentWorkout.bodyParts.forEach((bodyParts: any) => {
    totalBodyPartsExercises += bodyParts.exercises.length;
    bodyParts.exercises.forEach((exercise: any) => {
      if (exercise.isCompleted === true) {
        finishedBodyPartsExercises++;
      }
    });
  });

  return (finishedBodyPartsExercises / totalBodyPartsExercises) * 100;
};
