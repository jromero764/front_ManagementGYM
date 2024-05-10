import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PrimarySearchAppBar from './headerPrincipal';
import SimpleBottomNavigation from './categories';

const CustomGrid = styled(Grid)({
  height: '50%',
});

export default function Header() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        border: 2,
        height: '275px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Grid container sx={{ flexGrow: 1 }}>
        <PrimarySearchAppBar  />
      </Grid>
      <CustomGrid>
        <SimpleBottomNavigation />
      </CustomGrid>
    </Box>
  );
}