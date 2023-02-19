import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import ExerciseList from '../Exercises/ExerciseList';
import { RoutineData } from '../types';

import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

export interface DisplayRoutines {
  routineList: RoutineData[];
  handleClickOpenForUpdate: (id: string) => void;
  deleteRoutine: (id: string) => void;
}

const DisplayRoutines = ({
  routineList,
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
        {routineList.length >= 1 &&
          routineList?.map((item, index) => (
            <Grid item xs={12} sm={12} md={12} key={index}>
              {item.routineTitle && (
                <Card>
                  <CardContent>
                    <Stack
                      direction={'row'}
                      justifyContent={'space-between'}
                      gap={1}
                      sx={{ py: '1rem' }}
                    >
                      <Typography variant="h4">{item.routineTitle}</Typography>
                      <Stack direction={'row'} justifyContent={'start'}>
                        <Button
                          onClick={() => handleClickOpenForUpdate(item.id)}
                        >
                          <EditIcon />
                        </Button>
                        <Button onClick={() => deleteRoutine(item.id)}>
                          <DeleteForeverIcon />
                        </Button>
                      </Stack>
                    </Stack>

                    <ExerciseList
                      //@ts-ignore
                      routine={item}
                    />
                  </CardContent>
                </Card>
              )}
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default DisplayRoutines;
