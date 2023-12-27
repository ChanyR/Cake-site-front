import React from 'react';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const ClientNav = () => {
  return (
    <AppBar position="fixed" color="default" elevation={1}>
      <Container>
        <Toolbar>
          <Button component={Link} to="/login" color="inherit">
            Login
          </Button>
          <Button component={Link} to="/signup" color="inherit">
            SignUp
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ClientNav;
