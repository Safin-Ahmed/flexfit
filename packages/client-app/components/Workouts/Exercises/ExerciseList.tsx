import React from 'react';
import { DisplayBodyPartsProps } from '../BodyParts/DisplayBodyParts';
import DisplayExercise from './DisplayExercise';
import ExerciseForm from './ExerciseForm';

const ExerciseList = ({ bodyPartValues }: DisplayBodyPartsProps) => {
  const [exerciseListValues, setExerciseListValues] = React.useState<{}[]>([]);
  const [isCreate, setIsCreate] = React.useState(false);

  const formData = (data: object) => {
    setExerciseListValues((prev) => [...prev, data]);
    console.log('Exercise Data', exerciseListValues);
  };

  return (
    <div>
      {Object.keys(bodyPartValues).length !== null ? (
        <button onClick={() => setIsCreate(!isCreate)}>Create Exercises</button>
      ) : (
        ''
      )}

      {isCreate && (
        <ExerciseForm
          formData={formData}
          // @ts-ignore
          bodyPartValues={bodyPartValues}
        />
      )}

      <p>========Display list=========</p>
      {/* @ts-ignore */}
      <DisplayExercise
        // @ts-ignore
        exerciseListValues={exerciseListValues}
        // @ts-ignore
        bodyPartValues={bodyPartValues}
      />
    </div>
  );
};

export default ExerciseList;
