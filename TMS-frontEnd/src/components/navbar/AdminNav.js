
import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';


import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';

import Avatar from '@mui/material/Avatar'
import HomeIcon from '@mui/icons-material/Home';
import ScheduleIcon from '@mui/icons-material/Schedule';
import TableViewIcon from '@mui/icons-material/TableView';
import LogoutIcon from '@mui/icons-material/Logout';





import Logo from '../images/ictak-logo.png'
import './Navbaradmin.css'


const drawerWidth = 240;


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function AdminNav() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

 

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} className='appbar' 
      style={{backgroundColor:'whitesmoke'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon htmlColor='black' />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          
            <img src={Logo} alt='logo' id='logo'/>
            <div id='logo-text'>ICTAK Trainer Management System</div>
            
          </Typography>

        
        </Toolbar>
        
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 1,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor:'whitesmoke'

            
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        
      >
        <DrawerHeader className='drawer' >
          <Avatar style={{ backgroundColor:'red'}} className='avatar'>A</Avatar>
          <h4>Admin</h4>
          
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon htmlColor='black' /> : <ChevronRightIcon htmlColor='black'/>}
            </IconButton>
          
        </DrawerHeader>
        
        <List>
          <ListItem className='listitem'>
            <Link id='list' to='/admin'><HomeIcon id='linklogo'/><div id='link'>Home</div></Link>
          </ListItem>
          <ListItem className='listitem'>
            <Link id='list' to='/admin/allocate'><ScheduleIcon id='linklogo'/><div id='link'>Allocate</div></Link>
          </ListItem>
          <ListItem className='listitem'>
            <Link id='list' to='/admin/view-allocations'><TableViewIcon id='linklogo'/><div id='link'>View Allocations</div></Link>
          </ListItem>
          <ListItem className='listitem'>
            <Link id='list' to='/'><LogoutIcon id='linklogo'/><div id='link'>Logout</div></Link>
          </ListItem>
        </List>
        
        
      </Drawer>
      
      
    </Box>
  );
}