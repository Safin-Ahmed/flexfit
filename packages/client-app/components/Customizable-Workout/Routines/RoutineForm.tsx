import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { RoutineData } from '../Types/types';

interface RoutineFormProps {
  liftAndCreateRoutine: (data: object) => void;
  handleClose: () => void;
  updateRoutine: (formData: object) => void;
  open: boolean;
  isUpdate: boolean;
}

const RoutineForm = ({
  liftAndCreateRoutine,
  handleClose,
  open,
  isUpdate,
  updateRoutine,
}: RoutineFormProps) => {
  const [routineFormValue, setRoutineFormValue] = React.useState<RoutineData>({
    routineTitle: '',
  });
  //@ts-ignore
  const handleChange = (e: React.SelectChangeEvent<string>) => {
    setRoutineFormValue((prev) => ({
      ...prev,
      routineTitle: e.target.value,
    }));
  };

  const createRoutine = () => {
    //@ts-ignore
    if (routineFormValue.routineTitle) {
      //@ts-ignore
      liftAndCreateRoutine(routineFormValue);
    }

    // setRoutineFormValue({ routineTitle: '' });
    handleClose();
  };

  const updateRoutineData = () => {
    if (isUpdate) {
      updateRoutine(routineFormValue);
    }
    handleClose();
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth={true}>
        <DialogTitle>{isUpdate ? 'Edit Title' : 'Your Title'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={isUpdate ? 'Update Routine Title' : 'Routine Title'}
            type="text"
            fullWidth
            variant="standard"
            //@ts-ignore
            value={routineFormValue.routineTitle}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {isUpdate ? (
            <Button onClick={updateRoutineData}>Update</Button>
          ) : (
            <Button onClick={createRoutine}>Create</Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RoutineForm;
