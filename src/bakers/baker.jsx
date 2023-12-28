import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Grid } from '@mui/material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';




const Baker = (props) => {
  let item = props.item;

//   const [isOpen, setIsOpen] = useState(true);

//   const handleClose = () => {
//     setIsOpen(false);
//     if (onClose) {
//       onClose();
//     }
//   };

// const getBakersDeatels=()=>{
//   return(
// <div className={`user-card ${isOpen ? 'open' : 'closed'}`}>
//       {isOpen && (
//         <>
//           <h2>{item.name}</h2>
//           <p>Email: {item.email}</p>
//           <p>Likes: {item.likes}</p>
//           <p>Comments: {item.comments.join(', ')}</p>
//           <p>Cake Bases: {item.cakeBases.join(', ')}</p>
//           <p>Cake Decorations: {item.cakeDecorations.join(', ')}</p>
//           <button onClick={handleClose}>Close</button>
//         </>
//       )}
//     </div>
//   )
// }

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
        <ThumbUpOffAltOutlinedIcon sx={{ marginRight: '8px' }} />
          <Button size="small" color="primary" onClick={getBakersDeatels}>
            View Details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Baker;
