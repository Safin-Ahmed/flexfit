import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Slider,
  Stack,
  Typography,
} from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import { WorkoutData } from '../../Types/types';
import RoutineList from '../../Routines/RoutineList';
import AlertDialog from '@components/Shared/Alert';
import {
  PrettoSlider,
  StyledCard,
  StyledCardHeader,
  StyledCardMedia,
  StyledStack,
} from './Styles';
import { useState } from 'react';

interface SingleWorkoutProps {
  workout: WorkoutData;
  deleteWorkout: (id: number) => void;
  getWorkoutData: (data: any) => void;
  index: any;
}

function valuetext(value: number) {
  return `${value}°C`;
}

const DisplayWorkout = (props: SingleWorkoutProps) => {
  const { workout, deleteWorkout, getWorkoutData, index } = props;

  const [toggle, setToggle] = useState(false);

  return (
    <Box padding={1}>
      {!toggle && (
        <>
          <StyledCard sx={{ maxWidth: 345 }}>
            <Stack
              direction="row"
              alignItems={'center'}
              justifyContent="space-between"
              gap={1}
            >
              <Typography variant="h6">
                {/* @ts-ignore */}
                Ends: {workout?.attributes?.endDate}
              </Typography>
              <StyledStack
                direction="row"
                alignItems={'center'}
                justifyContent="center"
                gap={1}
              >
                <AlertDialog deleteFunc={deleteWorkout} data={workout} />

                <IconButton
                  aria-label="delete"
                  size="large"
                  onClick={() => {
                    getWorkoutData(workout);
                    window.scrollTo(0, 0);
                  }}
                >
                  <CreateIcon fontSize="inherit" />
                </IconButton>
              </StyledStack>
            </Stack>
            <Box onClick={() => setToggle(!toggle)}>
              <StyledCardMedia
                //@ts-ignore
                component="img"
                height="194"
                image="/workout.svg"
                alt="Paella dish"
              />
              <CardContent>
                <StyledCardHeader
                  avatar={
                    <Avatar
                      sx={{
                        bgcolor: '#E6E6E6',
                        color: '#3F3D56',
                        fontWeight: '800',
                      }}
                      aria-label="recipe"
                    >
                      {index + 1}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      {/* <MoreVertIcon /> */}
                    </IconButton>
                  }
                  title={
                    <Typography variant="h5">
                      {/* @ts-ignore */}
                      {workout?.attributes?.title}
                    </Typography>
                  }
                />
                <Box sx={{ width: 300 }}>
                  <PrettoSlider
                    aria-label="Small steps"
                    defaultValue={10}
                    getAriaValueText={valuetext}
                    step={10}
                    min={0}
                    max={100}
                    valueLabelDisplay="auto"
                  />
                </Box>
              </CardContent>
            </Box>
          </StyledCard>
        </>
      )}
      {toggle && (
        <>
          <Box my={3}>
            <Button onClick={() => setToggle(!toggle)}>Back</Button>
            {/* @ts-ignore */}
            <RoutineList workoutId={workout?.id} />
          </Box>
        </>
      )}
    </Box>
  );
};

export default DisplayWorkout;
