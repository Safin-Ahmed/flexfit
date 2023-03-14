import { Button, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import ExerciseList from '../../Exercises/ExerciseList';

import EditIcon from '@mui/icons-material/Edit';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import AlertDialog from '@components/Shared/Alert';
import { StyledCard, StyledStack } from './Styles';

export interface DisplayRoutines {
  routine: any;
  handleClickOpenForUpdate: (data: any) => void;
  deleteRoutine: (id: number) => void;
}

const DisplayRoutines = ({
  routine,
  handleClickOpenForUpdate,
  deleteRoutine,
}: DisplayRoutines) => {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={12} sm={12} md={12} key={routine?.id}>
          <Card>
            <CardContent>
              <Stack
                direction={'row'}
                justifyContent={'space-between'}
                gap={1}
                sx={{ py: '1rem' }}
              >
                <Typography variant="h4">
                  {routine?.attributes?.title}
                </Typography>
                <StyledStack
                  direction={'row'}
                  justifyContent={'start'}
                  alignItems={'center'}
                >
                  <IconButton
                    aria-label="delete"
                    size="large"
                    onClick={() => handleClickOpenForUpdate(routine)}
                  >
                    <EditIcon />
                  </IconButton>
                  <>
                    <AlertDialog deleteFunc={deleteRoutine} data={routine} />
                  </>
                </StyledStack>
              </Stack>

              <ExerciseList
                //@ts-ignore
                routineId={routine?.id}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default DisplayRoutines;
