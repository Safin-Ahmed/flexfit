import React from 'react';
import { IndividualExerciseData, RoutineData } from '../types';

interface DisplayExerciseProps {
  exerciseListValues: [IndividualExerciseData];
  routine: RoutineData;
}

const DisplayExercise = ({
  exerciseListValues,
  routine,
}: DisplayExerciseProps) => {
  return (
    <div>
      <h1>|||| Routine: {routine.routineTitle}</h1>
      {exerciseListValues.map((item, index) => (
        <div key={index}>
          <h3>Exercise Name: {item.name} </h3>
          <p> sets: {item.sets} </p>
        </div>
      ))}
    </div>
  );
};

export default DisplayExercise;
