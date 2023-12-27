import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Grid } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Baker = (props) => {
  let item = props.item;

  return (
    <Grid item xs={12} md={6}>
      <Card sx={{ width: '100%', backgroundColor: "#f2f2f2", height: '100%' }}>
        {/* <CardMedia
          component="img"
          height="140"
          image={item.image}
          alt={item.name}
        /> */}
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {item.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {item.email}
          </Typography>
        </CardContent>
        <CardActions>
        <FavoriteIcon sx={{ marginRight: '8px' }} />
          <Button size="small" color="primary">
            View Details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Baker;
