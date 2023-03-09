import { Box, Button } from '@mui/material';
import {
  useCreateRoutineMutation,
  useDeleteSingleRoutineMutation,
  useGetAllRoutinesQuery,
  useUpdateSingleRoutineMutation,
} from '@redux/features/api/routine-api';
import {
  useDeleteUserExerciseMutation,
  useGetAllUserExercisesQuery,
} from '@redux/features/api/userExercise-api';
import React from 'react';
import { RoutineData } from '../Types/types';
import DisplayRoutines from './DisplayRoutines';
import RoutineForm from './RoutineForm';

interface RoutineListProps {
  workoutId: number;
}

const RoutineList = ({ workoutId }: RoutineListProps) => {
  //RTK========================
  //create
  const [addRoutine, { isError, isLoading, isSuccess }] =
    useCreateRoutineMutation();

  //get all routines
  const { data: allRoutines } = useGetAllRoutinesQuery();

  //delete a routine
  const [deleteSingleRoutine] = useDeleteSingleRoutineMutation();

  //update or edit a routine
  const [updateSingleRoutine] = useUpdateSingleRoutineMutation();

  //get all exercises
  const { data: allUserExercises } = useGetAllUserExercisesQuery();

  //delete a exercise
  const [deleteUserExercise] = useDeleteUserExerciseMutation();

  //RTK========================

  const [isCreate, setIsCreate] = React.useState(false);

  //For Updating state
  const [isUpdate, setIsUpdate] = React.useState<boolean>(false);
  const [routineId, setRoutineId] = React.useState<number>(0);
  const [routineData, setRoutineData] = React.useState({});

  //Modal ================
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setIsUpdate(false);
    setIsCreate(true);
  };

  const handleClickOpenForUpdate = (data: any) => {
    console.log({ data });

    setRoutineData(data);
    setRoutineId(data?.id);
    setOpen(true);
    setIsUpdate(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsCreate(false);
    setIsUpdate(false);
  };
  //Modal ================

  //State lifting and creating Routine
  //////////////////////////////////////
  const liftAndCreateRoutine = (data: object) => {
    const payload = {
      data: {
        //@ts-ignore
        title: data.routineTitle,
        workout: workoutId,
      },
    };

    addRoutine(payload);
  };

  // Update or Edit Routine
  ///////////////////////////
  const updateRoutine = (formData: object) => {
    setOpen(false);

    const payload = {
      data: {
        //@ts-ignore
        title: formData.routineTitle,
      },
    };

    updateSingleRoutine({ routineId, data: payload });
  };

  // Delete a Routine
  ///////////////////////////
  const deleteRoutine = (id: number) => {
    deleteSingleRoutine(id);

    //delete related exercises
    allUserExercises?.map((userExercise: any) => {
      if (userExercise?.attributes?.routine?.data?.id === id) {
        deleteUserExercise(userExercise?.id);
      }
    });
  };

  return (
    <Box>
      {allRoutines?.data?.map((routine: any) => {
        if (routine?.attributes?.workout?.data?.id === workoutId) {
          return (
            <DisplayRoutines
              key={routine.id}
              routine={routine}
              handleClickOpenForUpdate={handleClickOpenForUpdate}
              deleteRoutine={deleteRoutine}
            />
          );
        }
      })}

      <Button
        sx={{ marginY: '1rem' }}
        variant="contained"
        onClick={handleClickOpen}
      >
        Create Routine
      </Button>
      {isCreate && (
        <RoutineForm
          liftAndCreateRoutine={liftAndCreateRoutine}
          handleClose={handleClose}
          open={open}
          isUpdate={isUpdate}
          updateRoutine={updateRoutine}
          routineData={routineData}
        />
      )}
      {isUpdate && (
        <RoutineForm
          liftAndCreateRoutine={liftAndCreateRoutine}
          handleClose={handleClose}
          open={open}
          isUpdate={isUpdate}
          updateRoutine={updateRoutine}
          routineData={routineData}
        />
      )}
    </Box>
  );
};

export default RoutineList;
