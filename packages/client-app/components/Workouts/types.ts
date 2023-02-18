export interface WorkoutData {
  id: string;
  order: number;
  title: string;
  startDate: Date;
  finishDate: Date;
}
[];

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
