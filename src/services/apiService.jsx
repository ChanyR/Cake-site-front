import axios from 'axios'
import Cookies from 'js-cookie';
export const API_URL = "http://localhost:3001";
// export const TOKEN_NAME = "ADMIN_TOKEN";

export const apiRequestGet = async (_url) => {
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
        console.log(_body)
        console.log(_method);
        console.log(_url);
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