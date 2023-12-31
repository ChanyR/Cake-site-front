import React from 'react';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const UserNav = () => {
  return (
    <AppBar position="fixed" color="default" elevation={1} style={{ top: 0, position: 'sticky', }}>
      <Container>
        <Toolbar>
          <Button component={Link} to="/user" color="inherit" style={{ textTransform: 'none' }}>
            פרופיל
          </Button>
          <Button component={Link} to="/user" color="inherit" style={{ textTransform: 'none' }}>
            דף הבית
          </Button>
          <Button component={Link} to="/user" color="inherit" style={{ textTransform: 'none' }}>
            ההזמנות שלי
          </Button>
          <Button component={Link} to="/logout" color="inherit" style={{ textTransform: 'none' }}>
            יציאה
          </Button>
        </Toolbar>
      </Container>
    </AppBar>

  );
};

export default UserNav;
