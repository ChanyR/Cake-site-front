// YourReactComponent.js

// 

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
                prompt:"a heart shaped chocklate cake with sprinkles  captured from top down view , full view ",
                n:1,
                size:"512x512",
            },
            {
                headers:{
                    "Content-Type":"application/json",
                    Authorization:`Bearer ${import.meta.env.VITE_MY_API_KEY} `,
                    "User-Agent":"Chrome"
                }
            },
            
        )

        console.log(response);
    }
    catch (e) {
        console.log(e);
    }
}