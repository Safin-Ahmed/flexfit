import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import ExerciseList from '../Exercises/ExerciseList';
import { RoutineData } from '../types';

import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export interface DisplayRoutines {
  routineList: RoutineData[];
  handleClickOpenForUpdate: (id: string) => void;
}

const DisplayRoutines = ({
  routineList,
  handleClickOpenForUpdate,
}: DisplayRoutines) => {
  return (
    <div>
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
                <Box
                  border={1}
                  borderRadius={2}
                  padding={1}
                  mt={2}
                  boxShadow={1}
                >
                  <Stack direction={'row'} justifyContent={'space-between'}>
                    <Typography variant="h4">{item.routineTitle}</Typography>
                    <Button
                      size="small"
                      color="info"
                      variant="contained"
                      onClick={() => handleClickOpenForUpdate(item.id)}
                    >
                      <EditIcon />
                    </Button>
                    <Button
                      size="small"
                      color="warning"
                      variant="contained"
                      onClick={() => handleClickOpenForUpdate(item.id)}
                    >
                      <DeleteForeverIcon />
                    </Button>
                  </Stack>

                  <ExerciseList
                    //@ts-ignore
                    routine={item}
                  />
                  <hr />
                </Box>
              )}
            </React.Fragment>
          ))
        ) : (
          <Typography color={'warning'}>
            No Routines to show. Please create one...
          </Typography>
        )}
      </Stack>
    </div>
  );
};

export default DisplayRoutines;
