import { Button } from '@mui/material';
import Box from '@mui/material/Box/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import React, { useEffect } from 'react';
import DisplayExercise from './DisplayExercise';
import ExerciseForm from './ExerciseForm';
import CancelIcon from '@mui/icons-material/Cancel';
import {
  useAddUserExerciseMutation,
  useDeleteUserExerciseMutation,
  useGetAllUserExercisesQuery,
  useUpdateUserExerciseMutation,
} from '@redux/features/api/userExercise-api';
import { useGetAllExercisesQuery } from '@redux/features/api/exercise';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ExerciseListProps {
  routineId: any;
}

const ExerciseList = ({ routineId }: ExerciseListProps) => {
  // RTK======================
  //create
  const [addUserExercise, { isError, isLoading, isSuccess }] =
    useAddUserExerciseMutation();

  //get
  const { data: allUserExercises } = useGetAllUserExercisesQuery();

  //get exercise names
  const { data: exercises } = useGetAllExercisesQuery();

  //update
  const [updateUserExercise, { isSuccess: isUpdateSuccess }] =
    useUpdateUserExerciseMutation();

  //delete
  const [deleteUserExercise, { isSuccess: isDeleteSuccess }] =
    useDeleteUserExerciseMutation();

  // RTK======================

  const [isCreate, setIsCreate] = React.useState(false);

  //For Updating states
  const [isUpdate, setIsUpdate] = React.useState(false);
  const [exerciseId, setExerciseId] = React.useState(0);
  const [userExercise, setUserExercise] = React.useState({});

  const [isCompleted, setIsCompleted] = React.useState(false);
  const [completeId, setCompleteId] = React.useState(0);

  //state lifting and creating Exercises
  const liftFormData = (data: object, formCollapse: boolean) => {
    const payload = {
      data: {
        //@ts-ignore
        routine: data.routine,
        //@ts-ignore
        exercise: data.exercise,
        //@ts-ignore
        sets: data.sets,
        //@ts-ignore
        weight: data.weight,
        //@ts-ignore
        reps: data.reps,
        //@ts-ignore
        time: data.time,
      },
    };

    addUserExercise(payload);

    setIsCreate(!formCollapse);
    setIsUpdate(!formCollapse);
  };

  const getExercise = (data: object) => {
    setUserExercise((prev) => ({ ...prev, data }));

    //@ts-ignore
    setExerciseId(data?.id);
    setIsUpdate(!isUpdate);
  };

  //Update status
  ////////////////////
  const status = (id: number) => {
    setIsCompleted((prev) => !prev);
    setCompleteId(id);
  };
  useEffect(() => {
    const payload = {
      data: {
        //@ts-ignore
        isCompleted: isCompleted,
      },
    };

    updateUserExercise({ exerciseId: completeId, data: payload });
  }, [isCompleted]);

  // Update or edit a Exercise
  ///////////////////////////
  const UpdateExercise = (data: object) => {
    setIsUpdate(!isUpdate);

    const payload = {
      data: {
        //@ts-ignore
        routine: data.routine,
        //@ts-ignore
        exercise: data.exercise,
        //@ts-ignore
        sets: data.sets,
        //@ts-ignore
        weight: data.weight,
        //@ts-ignore
        reps: data.reps,
        //@ts-ignore
        time: data.time,
      },
    };

    updateUserExercise({ exerciseId, data: payload });
    setUserExercise({});
  };

  // Delete an Exercise
  ///////////////////////////
  const deleteExercise = (id: number) => {
    deleteUserExercise(id);
  };

  //Notification alerts============
  React.useEffect(() => {
    if (isSuccess) {
      toast.success('Exercise Created', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000,
        theme: 'colored',
      });
    }
  }, [isSuccess]);
  React.useEffect(() => {
    if (isDeleteSuccess) {
      toast.error('Deleted', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000,
        theme: 'colored',
      });
    }
  }, [isDeleteSuccess]);
  React.useEffect(() => {
    if (isUpdateSuccess) {
      toast.info('Updated Successfully!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        theme: 'colored',
      });
    }
  }, [isUpdateSuccess]);

  return (
    <Box>
      {isSuccess && <ToastContainer />}
      {isDeleteSuccess && <ToastContainer />}
      {isUpdateSuccess && <ToastContainer />}

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
          exercises={exercises}
          formData={liftFormData}
          routineId={routineId}
          //@ts-ignore
          isUpdate={isUpdate}
          isCreate={isCreate}
          UpdateExercise={UpdateExercise}
          userExercise={userExercise}
        />
      )}
      {!isCreate && isUpdate && (
        <ExerciseForm
          exercises={exercises}
          formData={liftFormData}
          routineId={routineId}
          //@ts-ignore
          isUpdate={isUpdate}
          isCreate={isCreate}
          UpdateExercise={UpdateExercise}
          userExercise={userExercise}
        />
      )}

      <Typography mt={2} variant="h6">
        <Divider></Divider>
        Your Exercises: <Divider></Divider>
      </Typography>

      {allUserExercises?.length ? (
        allUserExercises?.map((userExercise: any) => {
          if (userExercise?.attributes?.routine?.data?.id === routineId) {
            return (
              <DisplayExercise
                key={userExercise.id}
                // @ts-ignore
                userExercise={userExercise}
                // @ts-ignore
                routineId={routineId}
                deleteExercise={deleteExercise}
                isCreate={isCreate}
                getExercise={getExercise}
                status={status}
              />
            );
          }
        })
      ) : (
        <Typography mt={2}>Nothing to show. Please Create one...</Typography>
      )}
    </Box>
  );
};

export default ExerciseList;
