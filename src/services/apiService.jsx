import axios from 'axios'
import Cookies from 'js-cookie';
export const API_URL = "http://localhost:3001";
// export const TOKEN_NAME = "ADMIN_TOKEN";

export const apiRequestGet = async (_url) => {
    console.log(_url);
    try {
        let resp = await axios.get(_url, {
            headers: {
                "x-api-key": Cookies.get('token')
            }
        })
        return resp;
    }
    catch (err) {
        throw err;
    }
}

// For Post,delete, put, patch
export const apiRequestMethod = async (_url, _method, _body = {}) => {
    try {
        console.log(_url);
        console.log(_method);
        let resp = await axios({
            url: _url,
            method: _method,
            data: _body,
            headers: {
                "x-api-key": Cookies.get('token')
            }
        })
        return resp;
    }
    catch (err) {
        throw err;
    }
}