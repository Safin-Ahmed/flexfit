import React from 'react';
const shortid = require('shortid');
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface FormData {
  id: string;
  routineTitle: string;
}

interface RoutineFormProps {
  liftRoutineData: (data: object) => void;
  handleClose: () => void;
  updateRoutine: (formData: object) => void;
  open: boolean;
  isUpdate: boolean;
}

const RoutineForm = ({
  liftRoutineData,
  handleClose,
  open,
  isUpdate,
  updateRoutine,
}: RoutineFormProps) => {
  const [routineFormValue, setRoutineFormValue] = React.useState<FormData>({
    id: '',
    routineTitle: '',
  });
  //@ts-ignore
  const handleChange = (e: React.SelectChangeEvent<string>) => {
    setRoutineFormValue((prev) => ({
      ...prev,
      id: shortid.generate(),
      routineTitle: e.target.value,
    }));
  };

  const handleSubmit = () => {
    //@ts-ignore
    if (routineFormValue.routineTitle) {
      //@ts-ignore
      liftRoutineData(routineFormValue);
      if (isUpdate) {
        updateRoutine(routineFormValue);
      }
    }

    setRoutineFormValue({ id: '', routineTitle: '' });
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
            <Button onClick={handleSubmit}>Update</Button>
          ) : (
            <Button onClick={handleSubmit}>Submit</Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RoutineForm;
