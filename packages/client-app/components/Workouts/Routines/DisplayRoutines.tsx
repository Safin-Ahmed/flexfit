import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import ExerciseList from '../Exercises/ExerciseList';
import { RoutineData } from '../types';

import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

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
      <Stack
        direction={'row'}
        justifyContent={'start'}
        gap={1}
        flexWrap={'wrap'}
      >
        {routineList.length ? (
          routineList?.map((item, index) => (
            <React.Fragment key={index}>
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
            </React.Fragment>
          ))
        ) : (
          <Typography color={'warning'}>
            No Routines to show. Please create one...
          </Typography>
        )}
      </Stack>
    </>
  );
};

export default DisplayRoutines;
