import { useContext } from "react";
import { AppContext } from '../context/context';
import { API_URL, apiRequestGet } from "./apiService";

export const fetchBakerListData = async (context) => {
    const { bakers, setBakers } = context;
    if (bakers.length == 0) {
        let url = API_URL + "/bakers";
        try {
            let resp = await apiRequestGet(url);
            console.log(resp.data);
            await setBakers(resp.data);
        } catch (err) {
            alert("Error fetching data");
            console.log("ERROR ", err);
        }
    }
};

export const fetchUsersListData = async (context) => {
    const { bakers, setBakers } = context;
    if (bakers.length == 0) {
        let url = API_URL + "/bakers";
        try {
            let resp = await apiRequestGet(url);
            console.log(resp.data);
            await setBakers(resp.data);
        } catch (err) {
            alert("Error fetching data");
            console.log("ERROR ", err);
        }
    }
};
