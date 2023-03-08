'use client';
import * as React from 'react';
import { Button, Chip, Divider, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import WorkoutForm from './WorkoutForm';
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
import DisplayWorkout from './DisplayWorkout';
import { StyledBox, StyledButton } from './Styles/Styles';
import { WorkoutData } from '../Types/types';

const Workouts = () => {
  //RTK===================
  //create
  const [addWorkout, { isError, isLoading, isSuccess }] =
    useAddWorkoutMutation();

  //get
  //@ts-ignore
  const { data: allWorkouts } = useGetAllWorkoutsQuery();

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
    console.log(data);
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

  return (
    <Container sx={{ bgcolor: '#F7F7F7' }}>
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        Workouts
      </Typography>

      <Divider variant="middle" />

      <Typography variant="h5" my={2}>
        Create & Customize your Workouts
      </Typography>

      {!isAdd ? (
        <StyledBox sx={isUpdate ? { display: 'none' } : { display: 'flex' }}>
          <StyledButton onClick={() => setIsAdd(!isAdd)} disabled={isUpdate}>
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
        />
      )}

      {!isAdd && isUpdate && (
        <WorkoutForm
          liftAndCreateWorkouts={liftAndCreateWorkouts}
          updateWorkout={updateWorkout}
          isUpdate={isUpdate}
          singleWorkout={singleWorkout}
        />
      )}

      <Divider sx={{ marginY: '2rem' }}>
        <Chip label="Your Workout List" />
      </Divider>

      {/* @ts-ignore */}
      {allWorkouts?.length ? (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          direction="row"
          justifyContent="start"
          alignItems="center"
        >
          {allWorkouts && //@ts-ignore
            allWorkouts.map((workout: any) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                //@ts-ignore
                key={workout.id}
              >
                <DisplayWorkout
                  deleteWorkout={deleteWorkout}
                  workout={workout}
                  getWorkoutData={getWorkoutData}
                />
              </Grid>
            ))}
        </Grid>
      ) : (
        <Typography>Nothing to show. Please create one...</Typography>
      )}
    </Container>
  );
};

export default Workouts;
