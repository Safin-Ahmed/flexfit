export interface WorkoutData {
  title: string;
  endDate: string;
}

export interface RoutineData {
  routineTitle: string;
}

export interface IndividualExerciseData {
  exercise: number;
  routine: number;
  sets: number;
  reps?: number;
  time?: number;
  weight: number;
  isCompleted?: boolean;
}
