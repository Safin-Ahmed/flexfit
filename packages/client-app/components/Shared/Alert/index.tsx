import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ErrorIcon from '@mui/icons-material/Error';
import { Stack } from '@mui/system';

export default function AlertDialog({ deleteFunc, data }: any) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDelete = () => {
    deleteFunc(data?.id);
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton aria-label="delete" size="large" onClick={handleClickOpen}>
        <DeleteIcon fontSize="inherit" />
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Stack direction={'row'} alignItems={'center'} gap={1}>
            <ErrorIcon color="error" />
            <Typography variant="body1">{'Delete'}</Typography>{' '}
          </Stack>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
