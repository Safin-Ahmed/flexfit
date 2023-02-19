export interface WorkoutData {
  id: string;
  order: number;
  title: string;
  startDate: Date;
  endDate: string;
}

export interface RoutineData {
  id: string;
  routineTitle: string;
}

export interface IndividualExerciseData {
  name: string;
  exerciseId: string;
  routineId: string;
  sets: string;
  reps: string;
  time: string;
}
