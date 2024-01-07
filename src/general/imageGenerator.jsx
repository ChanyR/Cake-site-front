// imageGenerator.jsx
import axios from 'axios';

export async function fetchData(prompt) {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/images/generations",
      {
        prompt:`Full color image from the front view of a delicious and impressive tall cake with ${prompt}`,
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
// export async function fetchData(prompt) {
//   return("../../images/Berries.jpeg")
// }

