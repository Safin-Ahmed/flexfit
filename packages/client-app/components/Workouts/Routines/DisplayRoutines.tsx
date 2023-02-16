import { Box, Stack } from '@mui/material';
import React from 'react';
import ExerciseList from '../Exercises/ExerciseList';
import { RoutineData } from '../types';

export interface DisplayRoutines {
  routineList: RoutineData[];
}

const DisplayRoutines = ({ routineList }: DisplayRoutines) => {
  return (
    <div>
      <Stack direction={'row'} justifyContent={'start'} gap={1}>
        {routineList.length &&
          routineList?.map((item, index) => (
            <React.Fragment key={index}>
              {item.routineTitle && (
                <Box border={1} padding={1}>
                  <hr />
                  <h2>{item.routineTitle}</h2>
                  <ExerciseList
                    //@ts-ignore
                    routine={item}
                  />
                  <hr />
                </Box>
              )}
            </React.Fragment>
          ))}
      </Stack>
    </div>
  );
};

export default DisplayRoutines;
