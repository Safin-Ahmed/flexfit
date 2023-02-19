import { Button } from '@mui/material';
import Box from '@mui/material/Box/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import React from 'react';
import { RoutineData } from '../types';
import DisplayExercise from './DisplayExercise';
import ExerciseForm from './ExerciseForm';
import CancelIcon from '@mui/icons-material/Cancel';

interface ExerciseListProps {
  routine: RoutineData;
}

const ExerciseList = ({ routine }: ExerciseListProps) => {
  const [exerciseListValues, setExerciseListValues] = React.useState<{}[]>([]);
  const [isCreate, setIsCreate] = React.useState(false);

  //For Updating states
  const [isUpdate, setIsUpdate] = React.useState(false);
  const [exerciseId, setExerciseId] = React.useState('');

  //state lifting and creating Exercises
  const liftFormData = (data: object, formCollapse: boolean) => {
    console.log('formValues: ', data);

    setExerciseListValues((prev) => [...prev, data]);
    setIsCreate(!formCollapse);
    setIsUpdate(!formCollapse);
  };

  const getExerciseId = (id: string) => {
    //@ts-ignore
    setExerciseId(id);
    console.log(id);
    setIsUpdate(!isUpdate);
  };

  // Update or edit a Exercise
  ///////////////////////////
  const UpdateExercise = (data: object) => {
    setIsUpdate(!isUpdate);

    const updatedExercise = exerciseListValues.map((exercise) => {
      //@ts-ignore
      if (exercise.exerciseId === exerciseId) {
        //@ts-ignore
        return {
          ...exercise,
          //@ts-ignore
          name: data.name,
          //@ts-ignore
          reps: data.reps,
          //@ts-ignore
          sets: data.sets,
          //@ts-ignore
          time: data.time,
        };
      }
      return exercise;
    });

    setExerciseListValues(updatedExercise);
  };

  // Delete a Exercise
  ///////////////////////////
  const deleteExercise = (id: string) => {
    const updatedExerciseList = exerciseListValues.filter(
      //@ts-ignore
      (exercise) => exercise.exerciseId !== id
    );
    setExerciseListValues(updatedExerciseList);
  };

  return (
    <Box>
      {isCreate ? (
        <Button
          disabled={isUpdate}
          variant="outlined"
          color="warning"
          onClick={() => setIsCreate(!isCreate)}
        >
          <CancelIcon /> Cancel Creating
        </Button>
      ) : (
        <Button
          disabled={isUpdate}
          variant="outlined"
          sx={isUpdate ? { display: 'none' } : { display: 'inline-block' }}
          onClick={() => setIsCreate(!isCreate)}
        >
          Create Exercises
        </Button>
      )}

      <Box>
        {isUpdate ? (
          <Button
            variant="outlined"
            color="warning"
            onClick={() => setIsUpdate(!isUpdate)}
          >
            <CancelIcon /> Cancel Updating
          </Button>
        ) : (
          ''
        )}
      </Box>

      {!isUpdate && isCreate && (
        <ExerciseForm
          formData={liftFormData}
          //@ts-ignore
          routine={routine}
          //@ts-ignore
          isUpdate={isUpdate}
          // dataHolder={dataHolder}
          isCreate={isCreate}
          UpdateExercise={UpdateExercise}
        />
      )}
      {!isCreate && isUpdate && (
        <ExerciseForm
          formData={liftFormData}
          //@ts-ignore
          routine={routine}
          //@ts-ignore
          isUpdate={isUpdate}
          // dataHolder={dataHolder}
          isCreate={isCreate}
          UpdateExercise={UpdateExercise}
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
        isCreate={isCreate}
        getExerciseId={getExerciseId}
      />
    </Box>
  );
};

export default ExerciseList;
