import * as React from 'react';
import { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid, Select, Menu, MenuItem, IconButton, Typography, Button } from '@mui/material';
import styles from './utils/styles.css'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import LockIcon from '@mui/icons-material/Lock';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import BuildIcon from '@mui/icons-material/Build';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import VideocamIcon from '@mui/icons-material/Videocam';
import PopupState, { bindTrigger, bindMenu, bindHover } from 'material-ui-popup-state';

// Define el tema personalizado con un color principal personalizado
const theme = createTheme({
    palette: {
        primary: {
            main: '#ff0000', // Define tu color principal aquí
        },
    },
});
export default function SimpleBottomNavigation() {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };
    useEffect(() => {
        console.log('variable Hover: ', isHover)
    }, [isHover])

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ height: '100%' }}>
                <Grid container sx={{ height: '100%', marginTop: '1rem',display:'flex',justifyContent:'center' }} >
                    <Grid item xs={12} md={1} sx={{ height: '100%' }}>
                        <BusinessCenterIcon sx={{ fontSize: '4rem', margin: '1rem', background: 'white', borderRadius: '2rem' }} />
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <Button
                                        className='buttonErebil'
                                        {...bindTrigger(popupState)}

                                    >
                                        Accesorios
                                    </Button>
                                    <Menu sx={{ borderRadius: '2rem' }} {...bindMenu(popupState)}>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>Profile</MenuItem>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>My account</MenuItem>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>Logout</MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>
                    </Grid>
                    <Grid item xs={12} md={1} sx={{ height: '100%' }}>
                        <SecurityIcon sx={{ fontSize: '4rem', margin: '1rem', background: 'white', borderRadius: '2rem' }} />
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <Button
                                        className='buttonErebil'
                                        {...bindTrigger(popupState)}

                                    >
                                        Alarmas
                                    </Button>
                                    <Menu sx={{ borderRadius: '2rem' }} {...bindMenu(popupState)}>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>Profile</MenuItem>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>My account</MenuItem>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>Logout</MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>
                    </Grid>
                    <Grid item xs={12} md={1} sx={{ height: '100%' }}>
                        <StorageIcon sx={{ fontSize: '4rem', margin: '1rem', background: 'white', borderRadius: '2rem' }} />
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <Button
                                        className='buttonErebil'
                                        {...bindTrigger(popupState)}

                                    >
                                        Almacenamiento
                                    </Button>
                                    <Menu sx={{ borderRadius: '2rem' }} {...bindMenu(popupState)}>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>Profile</MenuItem>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>My account</MenuItem>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>Logout</MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>
                    </Grid>
                    <Grid item xs={12} md={1} sx={{ height: '100%' }}>
                        <VideoCameraFrontIcon sx={{ fontSize: '4rem', margin: '1rem', background: 'white', borderRadius: '2rem' }} />
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <Button
                                        className='buttonErebil'
                                        {...bindTrigger(popupState)}

                                    >
                                        Camaras
                                    </Button>
                                    <Menu sx={{ borderRadius: '2rem' }} {...bindMenu(popupState)}>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>Profile</MenuItem>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>My account</MenuItem>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>Logout</MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>
                    </Grid>
                    <Grid item xs={12} md={1} sx={{ height: '100%' }}>
                        <LockIcon sx={{ fontSize: '4rem', margin: '1rem', background: 'white', borderRadius: '2rem' }} />
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <Button
                                        className='buttonErebil'
                                        {...bindTrigger(popupState)}

                                    >
                                        Control Acceso
                                    </Button>
                                    <Menu sx={{ borderRadius: '2rem' }} {...bindMenu(popupState)}>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>Profile</MenuItem>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>My account</MenuItem>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>Logout</MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>
                    </Grid>
                    <Grid item xs={12} md={1} sx={{ height: '100%' }}>
                        <CameraAltIcon sx={{ fontSize: '4rem', margin: '1rem', background: 'white', borderRadius: '2rem' }} />
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <Button
                                        className='buttonErebil'
                                        {...bindTrigger(popupState)}

                                    >
                                        Dash Cam y Accesorios
                                    </Button>
                                    <Menu sx={{ borderRadius: '2rem' }} {...bindMenu(popupState)}>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>Profile</MenuItem>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>My account</MenuItem>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>Logout</MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>
                    </Grid>
                    <Grid item xs={12} md={1} sx={{ height: '100%' }}>
                        <BuildIcon sx={{ fontSize: '4.7rem', margin: '1rem', background: 'white', borderRadius: '2rem' }} />
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <Button
                                        className='buttonErebil'
                                        sx={{fontSize:'1.3rem'}}
                                        {...bindTrigger(popupState)}

                                    >
                                        EAS
                                    </Button>
                                    <Menu sx={{ borderRadius: '2rem' }} {...bindMenu(popupState)}>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>Profile</MenuItem>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>My account</MenuItem>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>Logout</MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>
                    </Grid>
                    <Grid item xs={12} md={1} sx={{ height: '100%' }}>
                        <CodeOffIcon sx={{ fontSize: '4.7rem', margin: '1rem', background: 'white', borderRadius: '2rem' }} />
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <Button
                                        className='buttonErebil'
                                        {...bindTrigger(popupState)}
                                        sx={{fontSize:'1rem'}}
                                    >
                                        KIT
                                    </Button>
                                    <Menu sx={{ borderRadius: '2rem' }} {...bindMenu(popupState)}>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>Profile</MenuItem>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>My account</MenuItem>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>Logout</MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>
                    </Grid>
                    <Grid item xs={12} md={1} sx={{ height: '100%' }}>
                        <DesktopWindowsIcon sx={{ fontSize: '4rem', margin: '1rem', background: 'white', borderRadius: '2rem' }} />
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <Button
                                        className='buttonErebil'
                                        {...bindTrigger(popupState)}

                                    >
                                        Monitores
                                    </Button>
                                    <Menu sx={{ borderRadius: '2rem' }} {...bindMenu(popupState)}>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>Profile</MenuItem>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>My account</MenuItem>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>Logout</MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>
                    </Grid>
                    <Grid item xs={12} md={1} sx={{ height: '100%' }}>
                        <VideoCameraBackIcon sx={{ fontSize: '4rem', margin: '1rem', background: 'white', borderRadius: '2rem' }} />
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <Button
                                        className='buttonErebil'
                                        {...bindTrigger(popupState)}

                                    >
                                        Plataforma DSS
                                    </Button>
                                    <Menu sx={{ borderRadius: '2rem' }} {...bindMenu(popupState)}>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>Profile</MenuItem>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>My account</MenuItem>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>Logout</MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>
                    </Grid>
                    <Grid item xs={12} md={1} sx={{ height: '100%' }}>
                        <VideocamIcon sx={{ fontSize: '4rem', margin: '1rem', background: 'white', borderRadius: '2rem' }} />
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <Button
                                        className='buttonErebil'
                                        {...bindTrigger(popupState)}

                                    >
                                        Video Portero
                                    </Button>
                                    <Menu sx={{ borderRadius: '2rem' }} {...bindMenu(popupState)}>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>Profile</MenuItem>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>My account</MenuItem>
                                        <MenuItem className='menu-item backgroundHover' onClick={popupState.close}>Logout</MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>
                    </Grid>
                </Grid>

            </Box>
        </ThemeProvider>
    );
}
