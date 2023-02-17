import React from 'react';
const shortid = require('shortid');
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const RoutineData = {
  id: '',
  routineTitle: '',
};

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
    ...RoutineData,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoutineFormValue((prev) => ({
      ...prev,
      id: shortid.generate(),
      routineTitle: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (routineFormValue.routineTitle) {
      liftRoutineData(routineFormValue);
    }

    setRoutineFormValue(RoutineData);
    handleClose();
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
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
              value={updateData?.routineTitle}
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
          {/* <Button onClick={handleSubmit} type="submit">
            Submit
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RoutineForm;
