import { Box, Button } from '@mui/material';
import React from 'react';
import DisplayRoutines from './DisplayRoutines';
import RoutineForm from './RoutineForm';

const RoutineList = () => {
  const [routineList, setRoutineList] = React.useState([{}]);
  const [singleRoutine, setSingleRoutine] = React.useState({});

  const [isCreate, setIsCreate] = React.useState(false);

  //To Update
  const [isUpdate, setIsUpdate] = React.useState<boolean>(false);
  const [routineId, setRoutineId] = React.useState<string>('');
  const [updateData, setUpdateData] = React.useState({});

  //Modal ================
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setIsUpdate(false);
    setIsCreate(true);
  };

  const handleClickOpenForUpdate = (id: string) => {
    setRoutineId(id);
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
  const liftRoutineData = (data: object) => {
    setRoutineList((prev) => [...prev, data]);
    setSingleRoutine(data);
  };

  //Update data holder starts===========
  const dataHolder = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUpdateData((prev) => ({
      ...prev,
      //@ts-ignore
      id: routineId,
      routineTitle: e.target.value,
    }));
  };
  //Update data holder ends===========

  // Update or Edit Routine
  ///////////////////////////
  const updateRoutine = () => {
    setOpen(false);

    const updatedRoutine = routineList.map((routine) => {
      //@ts-ignore
      if (routine.id === routineId) return updateData;
      return routine;
    });

    setRoutineList(updatedRoutine);
  };

  // Delete a Routine
  ///////////////////////////
  const deleteRoutine = (id: string) => {
    const updatedRoutineList = routineList.filter(
      //@ts-ignore
      (routine) => routine.id !== id
    );
    setRoutineList(updatedRoutineList);
  };

  return (
    <Box>
      {
        //@ts-ignore
        singleRoutine.routineTitle && (
          <DisplayRoutines
            //@ts-ignore
            routineList={routineList}
            handleClickOpenForUpdate={handleClickOpenForUpdate}
            deleteRoutine={deleteRoutine}
          />
        )
      }
      <Button
        sx={{ marginY: '1rem' }}
        variant="contained"
        onClick={handleClickOpen}
      >
        Create Routine
      </Button>
      {isCreate && (
        <RoutineForm
          liftRoutineData={liftRoutineData}
          handleClose={handleClose}
          open={open}
          isUpdate={isUpdate}
          updateRoutine={updateRoutine}
          dataHolder={dataHolder}
          updateData={updateData}
        />
      )}
      {isUpdate && (
        <RoutineForm
          liftRoutineData={liftRoutineData}
          handleClose={handleClose}
          open={open}
          isUpdate={isUpdate}
          updateRoutine={updateRoutine}
          dataHolder={dataHolder}
          updateData={updateData}
        />
      )}
    </Box>
  );
};

export default RoutineList;
