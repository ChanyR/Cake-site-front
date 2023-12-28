import React, { useContext, useEffect } from 'react';
import { API_URL, apiRequestGet, apiRequestMethod } from '../services/apiService';
import { AppContext } from '../context/context';
import Baker from './baker';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { fetchBakerListData } from '../services/functionService'

const BakerList = () => {
  const { bakers, setBakers } = useContext(AppContext);

     const updateLikes = async (_id) => {
        let url = API_URL + `/bakers/likes/:${_id}`;
        try {
            let resp = await apiRequestMethod(url, "PUT")
            console.log(resp.data);
            // await setBakers(resp.data);
            // console.log("token new", resp.data.token);
            // Cookies.set('token', resp.data.token, { expires: 1 }); // expires in 1 day
            // setShouldNavigate(true);
        }
        catch (err) {
            alert("lllll")
            console.log("ERROR ", err);
        }
    }
    

  useEffect(() => {
    console.log('Effect is running');
    fetchBakerListData({ bakers, setBakers });
  }, []);

  function handleLikeClick(_id){
    updateLikes(_id)
   console.log(_id);
   }
  return (
    <div className="container mt-4 text-center">
      <Typography variant="h4" gutterBottom >
        Our Bakers
      </Typography>
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