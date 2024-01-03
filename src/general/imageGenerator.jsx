import axios from 'axios';


export async function fetchData() {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/images/generations",
        {
          prompt: "give me an image of hasidic people dancing in an office",
          n: 1,
          size: "512x512",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_MY_API_KEY} `,
          },
        }
      );
  
      const imageUrl =
        response.data &&
        response.data.data &&
        response.data.data[0] &&
        response.data.data[0].url;
  
      console.log("Image URL:", imageUrl);
  
      if (imageUrl) {
        return imageUrl;
      } else {
        console.error("Image URL not found in the response.");
        return null;
      }
    } catch (e) {
      console.error("Error fetching image:", e);
      throw e;
    }
  }
  