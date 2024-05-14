import * as React from 'react';
import { Grid, TextField } from '@mui/material';
import logo from './Assets/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Select, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function PrimarySearchAppBar() {
    return (
        <Grid container>
            {/* Logo */}
            <Grid item xs={6} sm={6} md={1}>
                <img
                    width={'100%'}
                    src={logo}
                    alt={'Erebil'}
                    loading="lazy"
                    height={'120rem'}
                />
            </Grid>
            
            {/* Iconos (Solo en xs) */}
            <Grid item xs={12} sm={6} md={1} sx={{ display: { xs: 'block', sm: 'none' } }}>
                <ShoppingCartIcon sx={{ fontSize: '3rem', margin:'1rem' }} />
                <AccountCircleIcon sx={{ fontSize: '3rem', margin:'1rem' }} />
            </Grid>

            {/* Campo de búsqueda */}
            <Grid item xs={12} sm={6} md={10}>
                <TextField 
                    sx={{ width: '100%', marginTop: '2rem' }}
                    label="Buscador.."
                />
            </Grid>

            {/* Iconos (No en xs) */}
            <Grid item xs={12} sm={6} md={1} sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'flex-end', marginTop: '1rem' }}>
                <ShoppingCartIcon sx={{ fontSize: '3rem', margin:'1rem' }} />
                <AccountCircleIcon sx={{ fontSize: '3rem', margin:'1rem' }} />
            </Grid>
        </Grid>
    );
}
