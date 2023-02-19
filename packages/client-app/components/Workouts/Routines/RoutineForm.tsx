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
  updateRoutine: () => void;
  dataHolder: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  open: boolean;
  isUpdate: boolean;
  updateData: object;
}

const RoutineForm = ({
  liftRoutineData,
  handleClose,
  open,
  isUpdate,
  updateRoutine,
  dataHolder,
  updateData,
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
    }

    setRoutineFormValue({ id: '', routineTitle: '' });
    handleClose();
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth={true}>
        <DialogTitle>{isUpdate ? 'Edit Title' : 'Your Title'}</DialogTitle>
        <DialogContent>
          {isUpdate ? (
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Update Routine Title"
              type="text"
              fullWidth
              variant="standard"
              //@ts-ignore
              value={updateData && updateData.routineTitle}
              onChange={(e) => dataHolder(e)}
            />
          ) : (
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Routine Title"
              type="text"
              fullWidth
              variant="standard"
              //@ts-ignore
              value={routineFormValue.routineTitle}
              onChange={handleChange}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {isUpdate ? (
            <Button onClick={updateRoutine}>Update</Button>
          ) : (
            <Button onClick={handleSubmit}>Submit</Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RoutineForm;
