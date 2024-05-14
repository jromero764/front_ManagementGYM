import React from "react";

import Header from "./headerContainer";
import Carrousel from "./carrousel";
import Home from "../onepirate/Home";
import { Grid } from "@mui/material";
import Divider from '@mui/material/Divider';

export const Index = () => {


    return (
        <>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Header />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} sx={{marginTop:'2rem'}}>
                    <Divider />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Carrousel />
                </Grid>

            </Grid>



        </>
    )
}