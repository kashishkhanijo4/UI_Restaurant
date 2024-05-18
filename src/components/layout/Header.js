import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import React ,{useState} from 'react'

import {Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import '../../Style/Ah.css'
const Header = () => {
const [mobileOpen , setMobileOpen] = useState(false);

//handle menu click
const handleDrawerToggle = ()=> {
  setMobileOpen(!mobileOpen)
}
//menu drawer
const drawer= (
  <Box onclick={handleDrawerToggle} 
   sx={{textAlign:'center'}} >


<Typography color={'goldenrod'}
         variant='h6'
          component='div'
          sx={{flexGrow: 1, my:2 }}>
          <FastfoodIcon/>
          My Restaurant</Typography>


      {/* now creating navigation list  */}

      
        <ul className="mobile-navigation-menu">
          <li>
          <Link to={'/'}>Home</Link>
          </li>

          <li>
          <Link to={'/menu'}>Menu</Link>
          </li>

          <li>
          <Link to={'/about'}>About</Link>
          </li>

          <li>
          <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>
     


  </Box>
)
  return (
    <>
    <Box>
      <AppBar component={'nav'} sx={{bgcolor:"black"}}>
        <Toolbar>
        <IconButton
         color='inherit' 
        arial-label='open drawer'
         edge='start'
         sx={{
          mr:2,
         display: {sm:"none"},}}
        onClick={handleDrawerToggle}
          >  
       <MenuIcon/>

        </IconButton>


        <Typography color={'goldenrod'}
         variant='h6'
          component='div'
          sx={{flexGrow: 1}}>
          <FastfoodIcon/>
          My Restaurant
          
          </Typography>


      {/* now creating navigation list  */}

      <Box sx={{ display:{xs:'none', sm: 'block'}}}>
        <ul className="navigation-menu">
          <li>
          <Link to={'/'}>Home</Link>
          </li>

          <li>
          <Link to={'/menu'}>Menu</Link>
          </li>

          <li>
          <Link to={'/about'}>About</Link>
          </li>

          <li>
          <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>
      </Box>
        </Toolbar>
      </AppBar>

      <Box component='nav'>
      <Drawer
       variant='temporary'
       open={mobileOpen}
        onclose={handleDrawerToggle}
        sx={{display:{xs:'block',sm:'none'},
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: "240px",
      
      },}}
       >
        {drawer}
      </Drawer>
      <Toolbar/>
      </Box>
    </Box>

      </>
  )
}

export default Header