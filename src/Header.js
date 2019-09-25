import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

const Header = () => {
  return (
    <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
           <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            2019년 강원대학교 성적
          </Typography>
        </Toolbar>
      </AppBar>
  )
}

export default Header;