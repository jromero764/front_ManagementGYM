import React from "react";

import Header from "./headerContainer";
import Carrousel from "./carrousel";
import Home from "../onepirate/Home";
import { Grid } from "@mui/material";
export const Index = () => {


    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Header />

                </Grid>
                <Grid item xs={12}>
                    <Carrousel />

                </Grid>
                {/* <Home /> */}
            </Grid>

        </>
    )
}