import axios from "axios";
// import OpenAi,{OpenAIApi, Configuration} from "openai"

// const conf = new Configuration({
//     apiKey: import.meta.env.VITE_MY_API_KEY
// })

// const openai = new OpenAIApi(conf)
// //     apiKey: import.meta.env.VITE_MY_API_KEY
// // });

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
            },

        )

        console.log(response);
    }
    catch (e) {
        console.log(e);
    }
}