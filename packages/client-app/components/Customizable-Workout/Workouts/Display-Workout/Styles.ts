import styled from '@emotion/styled';
import {
  CardHeader,
  CardMedia,
  Card,
  Slider,
  Stack,
  Button,
} from '@mui/material';

export const StyledCard = styled(Card)(() => ({
  border: '1px solid #E6E6E6',
  borderRadius: '20px',
  boxShadow: '0 55px 86px -35px #ecf2f6',
  cursor: 'pointer',
  padding: '5px',

  h6: {
    display: 'inline-block',
    fontSize: '14px',
    padding: '5px 10px',
    margin: '1rem',
    borderRadius: ' 50px',
    background: '#e0e0e0',
    transition: '1s all linear',
    boxShadow:
      'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset',
    '&:hover': {
      background: '#fff',
    },
  },
}));
export const PrettoSlider = styled(Slider)({
  color: '#52af77',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});
export const StyledCardMedia = styled(CardMedia)(() => ({
  objectFit: 'contain',
}));

export const StyledCardHeader = styled(CardHeader)(() => ({
  h5: {
    color: '#00BFA6',
    fontWeight: 800,
  },
}));
export const StyledStack = styled(Stack)(() => ({
  border: '1px solid #E6E6E6',
  borderRadius: '30px',
  boxShadow: '0 55px 86px -35px #ecf2f6',
  '&:hover': {
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  },
}));
export const StyledButton = styled(Button)(() => ({
  color: ' #3F3D56',
  backgroundColor: '#00BFA6',
  border: '1px solid #00BFA6',
  '&:hover': {
    backgroundColor: '#fff',
    color: '#3F3D56',
    border: '1px solid #3F3D56',
  },
}));
