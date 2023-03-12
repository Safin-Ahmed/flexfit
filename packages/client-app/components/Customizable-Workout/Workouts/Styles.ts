import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';

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
