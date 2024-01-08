import React, { useContext, useState } from 'react';
import { Card, CardContent, Typography, CardActions, Button, Grid } from '@mui/material';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import BakerDetails from './bakerDetails';
import { useNavigate } from 'react-router-dom';
import DesignCake from '../general/designCake';
import { AppContext } from '../context/context';
import BakerPage from './bakerPage';

const Baker = (props) => {
  const { item, handleLikeClick, handleDislikeClick } = props;
  const {activeStep, setActiveStep} = useContext(AppContext);
  const {selectedBaker, setSelectedBaker} = useContext(AppContext);
  const { chosenBaker, setChosenBaker } = useContext(AppContext);

  const nav = useNavigate();

  // const [isOpen, setIsOpen] = useState(false);
  // const [isLiked, setIsLiked] = useState(false);

  // const toggleDetails = () => {
  //   setIsOpen(!isOpen);
  // };

  const handleLikeToggle = async () => {
    await handleLikeClick(item._id);
    setIsLiked(!isLiked);
  };

  // const getBakersDetails = () => {
  //   return (
  //     <div className={`user-card ${isOpen ? 'open' : 'closed'}`}>
  //       {isOpen && (
  //         <>
  //           <h2>{item.name}</h2>
  //           <p>Email: {item.email}</p>
  //           <p>Likes: {item.likes.length}</p>
  //           <p>
  //             Comments: {item.comments && item.comments.length > 0 ? (
  //               item.comments.map((comment, index) => (
  //                 <span key={index}>{comment.comment}{index !== item.comments.length - 1 ? ', ' : ''}</span>
  //               ))
  //             ) : (
  //               'No comments'
  //             )}
  //           </p>
  //           <p>Cake Bases: {item.cake_bases && item.cake_bases.length > 0 ? (
  //             item.cake_bases.map((base, index) => (
  //               <span key={index}>{base}{index !== item.cake_bases.length - 1 ? ', ' : ''}</span>
  //             ))
  //           ) : 'No cake bases'}</p>

  //           <p>Cake Decorations: {item.decoration && item.decoration.length > 0 ? (
  //             item.cake_bases.map((decoration, index) => (
  //               <span key={index}>{decoration}{index !== item.cake_bases.length - 1 ? ', ' : ''}</span>
  //             ))
  //           ) : 'No cake decorations'}</p>

  //           <button onClick={toggleDetails}>Close</button>
  //         </>
  //       )}
  //     </div>
  //   );
  // };

  const detailsBaker = (baker) => {
    // nav(`/bakerPage`)
    console.log(baker);
    setSelectedBaker(baker);
    nav(`/bakerDetails`)
   

    // return(
    //   <div>
    //     <BakerPage/>
    //   </div>
    // )

  }

  const startOrder = (baker) => {
    // let userInfo=await getUserInfo();
    // console.log(userInfo.role);
    setChosenBaker(baker);
    setActiveStep(1);
    nav(`/cake-order`);
  }

  return (
    <Grid item xs={12} md={8}>
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
            {item.likes.length}
          </Typography>
          <Button size="small" color="primary" onClick={handleLikeToggle}>
            <ThumbUpOffAltOutlinedIcon sx={{ marginRight: '8px' }} />
          </Button>
          <Button size="small" color="primary" onClick={() => { detailsBaker(item) }}>
            פרטים נוספים
          </Button>

          <Button size="small" color="primary" onClick={()=>startOrder(item)}>
            בחירת קונדיטור
          </Button>


          {/* {selectedBaker != null && <BakerDetails
                baker={selectedBaker}
                isOpen={!!selectedBaker}
                onClose={() => setSelectedBaker(null)}
                
            />} */}
        </CardActions>
        {/* {getBakersDetails()} */}
      </Card>
    </Grid>
  );
};

export default Baker;


// import React, { useState } from 'react';
// import { Card, CardContent, Typography, CardActions, Button, Grid } from '@mui/material';
// import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
// import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

// const Baker = (props) => {
//   const { item, handleLikeClick, handleDislikeClick} = props;

//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDetails = () => {
//     setIsOpen(!isOpen);
//   };

//   const getBakersDetails = () => {
//     return (
//       <div className={`user-card ${isOpen ? 'open' : 'closed'}`}>
//         {isOpen && (
//           <>
//             <h2>{item.name}</h2>
//             <p>Email: {item.email}</p>
//             <p>Likes: {item.likes}</p>
//             <p>
//               Comments: {item.comments && item.comments.length > 0 ? (
//                 item.comments.map((comment, index) => (
//                   <span key={index}>{comment.comment}{index !== item.comments.length - 1 ? ', ' : ''}</span>
//                 ))
//               ) : (
//                 'No comments'
//               )}
//             </p>
//             <p>Cake Bases: {item.cake_bases && item.cake_bases.length > 0 ? (
//               item.cake_bases.map((base, index) => (
//                 <span key={index}>{base}{index !== item.cake_bases.length - 1 ? ', ' : ''}</span>
//               ))
//             ) : 'No cake bases'}</p>

//             <p>Cake Decorations: {item.cake_bases && item.cake_bases.length > 0 ? (
//               item.cake_bases.map((decoration, index) => (
//                 <span key={index}>{decoration}{index !== item.cake_bases.length - 1 ? ', ' : ''}</span>
//               ))
//             ) : 'No cake decorations'}</p>

//             <button onClick={toggleDetails}>Close</button>
//           </>
//         )}
//       </div>
//     );
//   };

//   return (
//     <Grid item xs={12} md={6}>
//       <Card sx={{ width: '100%', backgroundColor: "#f2f2f2", height: '100%' }}>
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
//           <Button size="small" color="primary" onClick={() => handleLikeClick(item._id)}>
//             <ThumbUpOffAltOutlinedIcon sx={{ marginRight: '8px' }} />
//           </Button>
//           <Button size="small" color="primary" onClick={() => handleDislikeClick(item._id)}>
//             <ThumbDownOffAltIcon sx={{ marginRight: '8px' }} />
//           </Button>
//           <Button size="small" color="primary" onClick={toggleDetails}>
//             פרטים נוספים
//           </Button>
//         </CardActions>
//         {getBakersDetails()}
//       </Card>
//     </Grid>
//   );
// };

// export default Baker;
