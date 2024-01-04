import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/context';
// import Baker from './baker';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { fetchBakerListData, updateBakerLikes } from '../services/functionApiService'
import Baker from '../bakers/baker';

const BakersLike = () => {
  const { bakers, setBakers } = useContext(AppContext);
  const { user } = useContext(AppContext);
  const [likedCakes, setLikedCakes] = React.useState([]);

  const handleLikeClick = async (bakerId) => {
    console.log(bakerId);
    await updateBakerLikes(bakerId)
    await fetchBakerListData({ bakers, setBakers }, true);
  }

  // הזרם הראשוני של הדף
  useEffect(() => {
    console.log('Effect is running');
    fetchBakerListData({ bakers, setBakers });
  }, [bakers]);

  // כאשר bakers מתעדכן, עדכן את likedCakes
  useEffect(() => {
    setLikedCakes(bakers.filter(baker => baker.likes.some(like => like === user._id)));
  }, [bakers, user]);

  return (
    <div className="container mt-4 text-center">
      <Typography variant="h4" gutterBottom >
        האופים שאהבתי
      </Typography>
      <Grid container spacing={2} justifyContent="flex-start">
        {likedCakes.map(item => (
          <Grid key={item._id} item xs={12} md={4}>
            <Baker item={item} handleLikeClick={handleLikeClick} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BakersLike;