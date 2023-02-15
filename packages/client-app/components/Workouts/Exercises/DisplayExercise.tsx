import React from 'react';
import { IndividualExercise } from '../Workouts';

interface DisplayExerciseProps {
  exerciseListValues: [IndividualExercise];
  bodyPartValues: {
    id: string;
    bodyPart: string;
  };
}

const DisplayExercise = ({
  exerciseListValues,
  bodyPartValues,
}: DisplayExerciseProps) => {
  console.log(bodyPartValues);

  return (
    <div>
      <h1>
        {' '}
        {bodyPartValues.id} |||| Body: {bodyPartValues.bodyPart}
      </h1>
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
