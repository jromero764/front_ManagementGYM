import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
import BuildIcon  from '@mui/icons-material/Build';
import DesktopWindowsIcon   from '@mui/icons-material/DesktopWindows';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import VideocamIcon from '@mui/icons-material/Videocam';

// Define el tema personalizado con un color principal personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: '#ff0000', // Define tu color principal aquí
    },
  },
});

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <BottomNavigation
                    sx={{
                        display: 'flex', justifyContent: 'space-between', width: '100%',
                        '& .MuiBottomNavigationAction-root .MuiSvgIcon-root': {
                            fontSize: '4rem',
                        },
                        '& .MuiBottomNavigationAction-label': {
                            fontSize: '1.2rem', // Tamaño del texto del label
                        },
                        marginTop:'3.5rem'
                    }}
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Accesorios" icon={<BusinessCenterIcon />}   />
                    <BottomNavigationAction label="Alarmas" icon={<SecurityIcon />}  />
                    <BottomNavigationAction label="Almacenamiento" icon={<StorageIcon />}  />
                    <BottomNavigationAction label="Camaras" icon={<VideoCameraFrontIcon />}  />
                    <BottomNavigationAction label="Control de Acceso" icon={<LockIcon />}  />
                    <BottomNavigationAction label="Dash Cam y Accesorios" icon={<CameraAltIcon />}  />
                    <BottomNavigationAction label="EAS" icon={<FlashOnIcon />}  />
                    <BottomNavigationAction label="Fuentes de Poder" icon={<BuildIcon />}  />
                    <BottomNavigationAction label="KIT" icon={<DesktopWindowsIcon />}  />
                    <BottomNavigationAction label="Monitores" icon={<CodeOffIcon />}  />
                    <BottomNavigationAction label="Plataforma DSS" icon={<VideoCameraBackIcon />}  />
                    <BottomNavigationAction label="Video Portero" icon={<VideocamIcon />}  />
                </BottomNavigation>
            </Box>
        </ThemeProvider>
    );
}
