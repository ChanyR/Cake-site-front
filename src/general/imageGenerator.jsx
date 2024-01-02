import axios from "axios";

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
                    "User-Agent": "Chrome"
                }
            }
        );

        // Extracting the image URL from the response
        const imageUrl = response.data && response.data.data && response.data.data[0] && response.data.data[0].url;

        // Creating a div element
        const imageContainer = document.createElement('div');

        // Creating an img element
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;

        // Appending the img element to the div
        imageContainer.appendChild(imageElement);

        // Logging the image URL and returning the div
        console.log(imageUrl);
        return imageContainer;
    } catch (e) {
        console.error(e);
        throw e; // Rethrow the error if needed
    }
}

// Example usage:
// const imageDiv = await fetchData();
// document.body.appendChild(imageDiv); // Append the div to the document body or another container
