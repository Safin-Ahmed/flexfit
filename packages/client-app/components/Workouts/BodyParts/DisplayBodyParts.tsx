import { Box, Stack } from '@mui/material';
import React from 'react';
import ExerciseList from '../Exercises/ExerciseList';

export interface DisplayBodyPartsProps {
  bodyPartValues: [BodyPartData];
}
type BodyPartData = {
  id: string;
  bodyPart: string;
};

const DisplayBodyParts = ({ bodyPartValues }: DisplayBodyPartsProps) => {
  // console.log('Full Data ', exerciseValues);

  return (
    <div>
      <Stack direction={'row'} justifyContent={'start'} gap={1}>
        {bodyPartValues?.map((item) => (
          <Box key={item.id} border={1} padding={1}>
            <hr />
            <h2>{item.bodyPart}</h2>
            {/* @ts-ignore */}
            <ExerciseList bodyPartValues={item} />
            <hr />
          </Box>
        ))}
      </Stack>
    </div>
  );
};

export default DisplayBodyParts;
