import { Button } from '@mui/material';
import Box from '@mui/material/Box/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
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
  const liftFormData = (data: object, formCollapse: boolean) => {
    setExerciseListValues((prev) => [...prev, data]);
    setIsCreate(!formCollapse);
  };

  // Delete a Exercise
  ///////////////////////////
  const deleteExercise = (id: string) => {
    const updatedExerciseList = exerciseListValues.filter(
      //@ts-ignore
      (exercise) => exercise.exerciseId !== id
    );
    setExerciseListValues(updatedExerciseList);
    console.log(id);
  };

  return (
    <Box>
      <Button variant="outlined" onClick={() => setIsCreate(!isCreate)}>
        Create Exercises
      </Button>

      {isCreate && (
        <ExerciseForm
          formData={liftFormData}
          //@ts-ignore
          routine={routine}
          //@ts-ignore
          isCreate={isCreate}
        />
      )}

      {exerciseListValues.length >= 1 ? (
        <Typography mt={2} variant="h6">
          <Divider></Divider>
          Your List: <Divider></Divider>
        </Typography>
      ) : (
        <Typography mt={2}>Nothing to show. Please Create one...</Typography>
      )}

      <DisplayExercise
        // @ts-ignore
        exerciseListValues={exerciseListValues}
        // @ts-ignore
        routine={routine}
        deleteExercise={deleteExercise}
      />
    </Box>
  );
};

export default ExerciseList;