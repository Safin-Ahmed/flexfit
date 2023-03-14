import styled from '@emotion/styled';
import { Box, Button, Card, Stack } from '@mui/material';

export const StyledBox = styled(Box)(() => ({
  width: '12rem',
  height: '15rem',
  backgroundColor: '#F7F7F7',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '.8rem',
  margin: '20px 0px',
}));

export const StyledButton = styled(Button)(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  padding: '35px',
  backgroundColor: `#00BFA6`,
  color: 'white',
  '&:hover': {
    backgroundColor: `#3F3D56`,
    color: 'white',
  },
}));

export const StyledStack = styled(Stack)(() => ({
  border: '1px solid #E6E6E6',
  borderRadius: '30px',
  boxShadow: '0 55px 86px -35px #ecf2f6',
  padding: '0 3px',
}));
export const StyledCard = styled(Card)(() => ({
  position: 'absolute',
  backgroundColor: '#F7F7F7',
  margin: '1rem 0rem',
}));
