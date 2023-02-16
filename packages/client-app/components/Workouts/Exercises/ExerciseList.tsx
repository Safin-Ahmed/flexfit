import React from 'react';
import { RoutineData } from '../types';
import DisplayExercise from './DisplayExercise';
import ExerciseForm from './ExerciseForm';

interface ExerciseListProps {
  routine: RoutineData;
}

const ExerciseList = ({ routine }: ExerciseListProps) => {
  const [exerciseListValues, setExerciseListValues] = React.useState<{}[]>([]);
  const [isCreate, setIsCreate] = React.useState(false);

  //state lifting
  const liftFormData = (data: object) => {
    setExerciseListValues((prev) => [...prev, data]);
  };

  return (
    <div>
      {Object.keys(routine).length !== null ? (
        <button onClick={() => setIsCreate(!isCreate)}>Create Exercises</button>
      ) : (
        ''
      )}

      {isCreate && (
        <ExerciseForm
          formData={liftFormData}
          //@ts-ignore
          routine={routine}
        />
      )}

      <p>========Display list=========</p>
      <DisplayExercise
        // @ts-ignore
        exerciseListValues={exerciseListValues}
        // @ts-ignore
        routine={routine}
      />
    </div>
  );
};

export default ExerciseList;
