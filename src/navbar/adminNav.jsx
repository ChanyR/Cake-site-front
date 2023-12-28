import React from 'react';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const AdminNav = () => {
  return (
    <div>
      <AppBar position="fixed" color="default" elevation={1} style={{top: 0, position: 'sticky',}}>
        <Container>
          <Toolbar>
          <Button component={Link} to="/admin" color="inherit" style={{ textTransform: 'none' }}>
              פרופיל
            </Button>
            <Button component={Link} to="/admin" color="inherit" style={{ textTransform: 'none' }}>
              ההזמנות שלי
            </Button>
            <Button component={Link} to="/admin/bakersManagement" color="inherit" style={{ textTransform: 'none' }}>
              ניהול אופים
            </Button>
            <Button component={Link} to="/admin/usersManagement" color="inherit" style={{ textTransform: 'none' }}>
              ניהול משתמשים
            </Button>
            <Button component={Link} to="/logout" color="inherit" style={{ textTransform: 'none' }}>
              יציאה
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>

  )
}

export default AdminNav