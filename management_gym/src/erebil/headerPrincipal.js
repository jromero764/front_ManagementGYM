import * as React from 'react';
import { Grid, TextField } from '@mui/material';
import logo from './Assets/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Select, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function PrimarySearchAppBar() {

    return (
        <>
            <Grid container>
                <Grid item xs={2} >
                    <img
                        // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={logo}
                        alt={'Erebil'}
                        loading="lazy"
                        height={'120rem'}
                    />
                </Grid>
                <Grid item xs={8}>
                    <TextField sx={{ width: '50rem', marginTop: '2rem' }}

                        label="Buscador.."

                    />
                </Grid>
                <Grid item xs={1} sx={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
                    <ShoppingCartIcon sx={{ fontSize: '3rem' }} />
                    <AccountCircleIcon sx={{ fontSize: '3rem' }} />
                    {/* <Select>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                    </Select> */}

                </Grid>
            </Grid>
        </>
    );
}
{{  }}