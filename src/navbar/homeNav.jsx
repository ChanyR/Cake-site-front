import React from 'react';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const HomeNav = () => {
  return (
      <AppBar position="fixed" color="default" elevation={1} style={{top: 0, position: 'sticky',}}>
        <Container>
          <Toolbar>
            <Button component={Link} to="/login" color="inherit">
              login
            </Button>
            <Button component={Link} to="/signup" color="inherit">
            signup
            </Button>

          </Toolbar>
        </Container>
      </AppBar>
      
  );
};

export default HomeNav;
