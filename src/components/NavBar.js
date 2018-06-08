import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';

const NavBar = (props)=>{
      return(
            <AppBar position="static" color="default" style={{background:'#689F38', height:'56px'}}>
                  <Toolbar>
                        <Typography variant="title" color="inherit" style={{color:'white'}}>
                              BPNotebook
                        </Typography>
                  </Toolbar>
            </AppBar>
      );
}

export default NavBar;