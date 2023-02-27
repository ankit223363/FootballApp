import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Drawer from "@mui/material/Drawer";
import MenuItem from "@mui/material/MenuItem";
import Swal from 'sweetalert2'
export default function Appbar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const title='   Football App   '
    const displayRules =()=>{
      Swal.fire({
        title: '<h4>RULES</h4>',
        imageUrl: 'https://static.hudl.com/craft/home/homepage-gb-hero_short.png?mtime=20220829103417',
        imageHeight: '200px',
        html: '<p>Total players cannot be more than 15 <br/>Cannot select more than 3 attackers <br/> Cannot select more than 3 midfielders <br/> Cannot select more than 4 defenders <br/> Cannot select more than 1 goalkeeper</p>',
        background: 'black',
        color: 'white',
        allowOutsideClick: false
      })
    }
function appBarLabel(label) {
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
      };
  return (
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleDrawerToggle}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor={"left"} open={mobileOpen} sx={{ width: 100 }}
                onClose={handleDrawerToggle}>
                <MenuItem>{title}</MenuItem>
                <MenuItem><button onClick={displayRules}>RULES OF SELECTION</button></MenuItem>
            </Drawer>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 10 }}>
        {label}
      </Typography>
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});


  return (
    <Stack >
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
          {appBarLabel('Football APP')}
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}