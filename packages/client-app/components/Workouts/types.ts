export interface WorkoutData {
  title: string;
  endDate: string;
}

export interface RoutineData {
  routineTitle: string;
}

export interface IndividualExerciseData {
  name: string;
  exerciseId: string;
  routineId: string;
  sets: string;
  reps?: string;
  time?: string;
  weight: string;
  isCompleted: boolean;
}
