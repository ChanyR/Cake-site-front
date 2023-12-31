// YourReactComponent.js

// 

import {Configuration, OpenApi} from "openai"

const Configuration=new Configuration({
    apiKey: import.meta.env.VITE_MY_API_KEY
})

const openai=new OpenApi(Configuration);

async function fetchData(){
try{
    const response=await openai.
}
catch(e){
    console.log(e);
}
}