// import React from 'react';
// import { Card, CardContent, Typography, CardActions, Button, Grid } from '@mui/material';
// import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
// import { useState } from 'react';




// const Baker = (props) => {

//   let item = props.item;
//   let handleLikeClick = props.handleLikeClick;




//     const [isOpen, setIsOpen] = useState(true);

//     const handleClose = () => {
//       setIsOpen(false);
//       if (onClose) {
//         onClose();
//       }
//     };

//   const getBakersDeatels=()=>{
//     return(
//   <div className={`user-card ${isOpen ? 'open' : 'closed'}`}>
//         {isOpen && (
//           <>
//             <h2>{item.name}</h2>
//             <p>Email: {item.email}</p>
//             <p>Likes: {item.likes}</p>
//             <p>Comments: {item.comments.join(', ')}</p>
//             <p>Cake Bases: {item.cakeBases.join(', ')}</p>
//             <p>Cake Decorations: {item.cakeDecorations.join(', ')}</p>
//             <button onClick={handleClose}>Close</button>
//           </>
//         )}
//       </div>
//     )
//   }

//   return (
//     <Grid item xs={12} md={6}>
//       <Card sx={{ width: '100%', backgroundColor: "#f2f2f2", height: '100%' }}>
//         {/* <CardMedia
//           component="img"
//           height="140"
//           image={item.image}
//           alt={item.name}
//         /> */}
//         <CardContent>
//           <Typography variant="h6" gutterBottom>
//             {item.name}
//           </Typography>
//           <Typography variant="subtitle1" color="text.secondary" gutterBottom>
//             {item.email}
//           </Typography>
//         </CardContent>
//         <CardActions>

//           <Typography variant="body2" color="text.secondary">
//             {item.likes}
//           </Typography>
//           <Button size="small" color="primary" >
//             <ThumbUpOffAltOutlinedIcon sx={{ marginRight: '8px' }} onClick={() => { handleLikeClick(item._id) }} />
//           </Button>
//           <Button size="small" color="primary" onClick={getBakersDeatels}>
//             פרטים נוספים
//           </Button>
//         </CardActions>
//       </Card>
//     </Grid>
//   );
// };

// export default Baker;

import React, { useState } from 'react';
import { Card, CardContent, Typography, CardActions, Button, Grid } from '@mui/material';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';

const Baker = (props) => {
  const { item, handleLikeClick } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  const getBakersDetails = () => {
    return (
      <div className={`user-card ${isOpen ? 'open' : 'closed'}`}>
        {isOpen && (
          <>
            <h2>{item.name}</h2>
            <p>Email: {item.email}</p>
            <p>Likes: {item.likes}</p>
            <p>
              Comments: {item.comments && item.comments.length > 0 ? (
                item.comments.map((comment, index) => (
                  <span key={index}>{comment.comment}{index !== item.comments.length - 1 ? ', ' : ''}</span>
                ))
              ) : (
                'No comments'
              )}
            </p>
            <p>Cake Bases: {item.cake_bases && item.cake_bases.length > 0 ? (
              item.cake_bases.map((base, index) => (
                <span key={index}>{base}{index !== item.cake_bases.length - 1 ? ', ' : ''}</span>
              ))
            ) : 'No cake bases'}</p>

            <p>Cake Decorations: {item.cake_bases && item.cake_bases.length > 0 ? (
              item.cake_bases.map((decoration, index) => (
                <span key={index}>{decoration}{index !== item.cake_bases.length - 1 ? ', ' : ''}</span>
              ))
            ) : 'No cake decorations'}</p>

            <button onClick={toggleDetails}>Close</button>
          </>
        )}
      </div>
    );
  };

  return (
    <Grid item xs={12} md={6}>
      <Card sx={{ width: '100%', backgroundColor: "#f2f2f2", height: '100%' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {item.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {item.email}
          </Typography>
        </CardContent>
        <CardActions>
          <Typography variant="body2" color="text.secondary">
            {item.likes}
          </Typography>
          <Button size="small" color="primary" onClick={() => handleLikeClick(item._id)}>
            <ThumbUpOffAltOutlinedIcon sx={{ marginRight: '8px' }} />
          </Button>
          <Button size="small" color="primary" onClick={toggleDetails}>
            פרטים נוספים
          </Button>
        </CardActions>
        {getBakersDetails()}
      </Card>
    </Grid>
  );
};

export default Baker;

