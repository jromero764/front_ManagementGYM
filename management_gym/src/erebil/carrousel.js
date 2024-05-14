import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SwipeableTextMobileStepper from './carrouselMUI'


export default function Carrousel() {
    return (
        <Box sx={{ flexGrow: 1, height: 100 }}>
            <Grid container sx={{ display: 'flex', justifyContent: 'center',paddingX:'10rem' }}>
                <Grid item>
                    <SwipeableTextMobileStepper />
                </Grid>
            </Grid>
        </Box>
    );
}
