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
                prompt:"chocklate cake from front view heart shape with sprinkles",
                n:1,
                size:"512x512",
            },
            {
                headers:{
                    "Content-Type":"application/json",
                    Authorization:"Bearer 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",
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