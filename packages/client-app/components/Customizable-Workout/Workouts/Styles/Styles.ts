import styled from '@emotion/styled';
import { Box, Button, Link } from '@mui/material';

export const StyledBox = styled(Box)(() => ({
  width: '12rem',
  height: '15rem',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 1,
  backgroundColor: 'white',
  margin: '20px 0px',
}));

export const StyledButton = styled(Button)(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  padding: '35px',
  backgroundColor: `#1976D2`,
  color: 'white',
  '&:hover': {
    backgroundColor: `#1976D2`,
    color: 'white',
  },
}));
