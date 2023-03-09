'use client';
import * as React from 'react';
import { Button, Chip, Divider, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import WorkoutForm from './Workout-Form/WorkoutForm';
import CancelIcon from '@mui/icons-material/Cancel';
import {
  useAddWorkoutMutation,
  useDeleteSingleWorkoutMutation,
  useGetAllWorkoutsQuery,
  useUpdateSingleWorkoutMutation,
} from '@redux/features/api/workouts-api';
import {
  useDeleteSingleRoutineMutation,
  useGetAllRoutinesQuery,
} from '@redux/features/api/routine-api';
import {
  useDeleteUserExerciseMutation,
  useGetAllUserExercisesQuery,
} from '@redux/features/api/userExercise-api';
import AddIcon from '@mui/icons-material/Add';
import DisplayWorkout from './Display-Workout/DisplayWorkout';
import { StyledBox, StyledButton } from './Styles';
import { WorkoutData } from '../Types/types';
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/system';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Workouts = () => {
  //RTK===================
  //create
  //@ts-ignore
  const [addWorkout, { isError, isSuccess }] = useAddWorkoutMutation();

  //get
  //@ts-ignore
  const { data: allWorkouts, isLoading } = useGetAllWorkoutsQuery();

  //delete
  const [deleteSingleWorkout, { isSuccess: isDeleteSuccess }] =
    useDeleteSingleWorkoutMutation();

  //update
  const [updateSingleWorkout, { isSuccess: isUpdateSuccess }] =
    useUpdateSingleWorkoutMutation();

  //get all routines
  const { data: allRoutines } = useGetAllRoutinesQuery();

  //delete a routine
  const [deleteSingleRoutine] = useDeleteSingleRoutineMutation();

  //get all exercises
  const { data: allUserExercises } = useGetAllUserExercisesQuery();

  //delete a exercise
  const [deleteUserExercise] = useDeleteUserExerciseMutation();
  //RTK===================

  const [isAdd, setIsAdd] = React.useState(false);

  // For Update States
  const [isUpdate, setIsUpdate] = React.useState(false);
  const [workoutId, setWorkoutId] = React.useState(0);
  const [singleWorkout, setSingleWorkout] = React.useState<any>({});

  //lift and create workouts
  ///////////////////////////
  const liftAndCreateWorkouts = (formData: WorkoutData) => {
    //closing the workout form
    setIsAdd(false);

    const payload = {
      data: {
        title: formData.title,
        endDate: formData.endDate,
      },
    };
    addWorkout(payload);
  };

  // get workout id to update the workout
  const getWorkoutData = (data: any) => {
    setSingleWorkout((prev: any) => ({ ...prev, data }));

    setWorkoutId(data?.id);
    setIsUpdate(!isUpdate);
  };

  //edit or update your workouts
  ///////////////////////////////
  const updateWorkout = (formData: WorkoutData) => {
    setIsUpdate(!isUpdate);

    const payload = {
      data: {
        title: formData.title,
        endDate: formData.endDate,
      },
    };

    updateSingleWorkout({ workoutId, data: payload });
    setSingleWorkout({});
  };

  //delete a single workout
  //////////////////////////////
  const deleteWorkout = (id: number) => {
    deleteSingleWorkout(id);

    //delete related routines
    allRoutines?.data?.map((routine: any) => {
      if (routine?.attributes?.workout?.data?.id === id) {
        allUserExercises?.map((userExercise: any) => {
          if (userExercise?.attributes?.routine?.data?.id === routine?.id) {
            deleteUserExercise(userExercise?.id);
          }
        });
        deleteSingleRoutine(routine?.id);
      }
    });
  };

  //Notification alerts============
  React.useEffect(() => {
    if (isSuccess) {
      toast.success('Workout Created !', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000,
        theme: 'dark',
      });
    }
  }, [isSuccess]);
  React.useEffect(() => {
    if (isDeleteSuccess) {
      toast.error('Deleted', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000,
        theme: 'dark',
      });
    }
  }, [isDeleteSuccess]);
  React.useEffect(() => {
    if (isUpdateSuccess) {
      toast.info('Updated Successfully!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        theme: 'dark',
      });
    }
  }, [isUpdateSuccess]);

  return (
    <>
      {isSuccess && <ToastContainer />}
      {isDeleteSuccess && <ToastContainer />}
      {isUpdateSuccess && <ToastContainer />}
      {isLoading ? (
        <Box sx={{ width: '100%', position: 'fixed', top: 0 }}>
          <LinearProgress />
        </Box>
      ) : (
        <Box>
          <Typography variant="h2" sx={{ textAlign: 'center' }}>
            Workouts
          </Typography>
          <Divider variant="middle" />
          <Box>
            <Typography variant="h5" my={2}>
              Create & Customize your Workouts
            </Typography>

            {!isAdd ? (
              <StyledBox
                sx={isUpdate ? { display: 'none' } : { display: 'flex' }}
              >
                <StyledButton
                  onClick={() => setIsAdd(!isAdd)}
                  disabled={isUpdate}
                >
                  <AddIcon fontSize="large" />
                </StyledButton>
              </StyledBox>
            ) : (
              <Button
                variant="outlined"
                color="warning"
                sx={{ my: '1rem' }}
                onClick={() => setIsAdd(!isAdd)}
                disabled={isUpdate}
              >
                <CancelIcon /> Cancel
              </Button>
            )}

            {isUpdate && (
              <Button
                variant="outlined"
                color="warning"
                sx={{ my: 1 }}
                onClick={() => setIsUpdate(!isUpdate)}
              >
                <CancelIcon /> Cancel Update
              </Button>
            )}

            {!isUpdate && isAdd && (
              <WorkoutForm
                liftAndCreateWorkouts={liftAndCreateWorkouts}
                updateWorkout={updateWorkout}
                isUpdate={isUpdate}
                singleWorkout={singleWorkout}
                isSuccess={isSuccess}
              />
            )}

            {!isAdd && isUpdate && (
              <WorkoutForm
                liftAndCreateWorkouts={liftAndCreateWorkouts}
                updateWorkout={updateWorkout}
                isUpdate={isUpdate}
                singleWorkout={singleWorkout}
                isSuccess={isSuccess}
              />
            )}

            <Divider sx={{ marginY: '2rem' }}>
              <Chip label="Your Workout List" />
            </Divider>
          </Box>

          <Box>
            {/* @ts-ignore */}
            {allWorkouts?.length ? (
              <Grid
                spacing={{ xs: 2 }}
                // columns={{ xs: 4, sm: 8, md: 12 }}
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                {allWorkouts && //@ts-ignore
                  allWorkouts.map((workout: any, index) => (
                    <Grid
                      item
                      xs={12}
                      md={6}
                      //@ts-ignore
                      key={workout.id}
                    >
                      <DisplayWorkout
                        deleteWorkout={deleteWorkout}
                        workout={workout}
                        getWorkoutData={getWorkoutData}
                        index={index}
                      />
                    </Grid>
                  ))}
              </Grid>
            ) : (
              <Typography>Nothing to show. Please create one...</Typography>
            )}
          </Box>
        </Box>
      )}
    </>
  );
};

export default Workouts;
