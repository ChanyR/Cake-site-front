import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/context';
import Baker from './baker';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { fetchBakerListData, updateBakerLikes } from '../services/functionApiService'

const BakerList = () => {
  const { bakers, setBakers } = useContext(AppContext);
  const { user } = useContext(AppContext);

  const handleLikeClick = async (bakerId) => {
    console.log(bakerId);
    await updateBakerLikes(bakerId)
    await fetchBakerListData({ bakers, setBakers }, true);

  }

  useEffect(() => {
    console.log('Effect is running');
    fetchBakerListData({ bakers, setBakers });

  }, []);


  return (
    <div className="container mt-4 text-center">
      <Typography variant="h4" gutterBottom >
        OUR PASTRY CHEFS      </Typography>
      <Grid container spacing={2} justifyContent="flex-start">
        {bakers.map(item => (
          <Grid key={item._id} item xs={12} md={4}>
            <Baker item={item} handleLikeClick={handleLikeClick} />
          </Grid>
        ))}
      </Grid>

    </div>
  );
};
export default BakerList;
{/* <div className="container mt-4">
      <Typography variant="h4" className="text-center mb-4">
        Our Bakers
      </Typography>
      <div className="d-flex flex-wrap justify-content-center">
        {bakers.map(item => (
          <div key={item._id} className="mx-2 mb-3">
            <Baker item={item} />
          </div>
        ))}
      </div>
    </div> */}