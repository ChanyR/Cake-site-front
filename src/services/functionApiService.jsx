import { useContext } from "react";
import { AppContext } from '../context/context';
import { API_URL, apiRequestGet, apiRequestMethod } from "./apiService";

export const fetchBakerListData = async (context, isAfterUpdate=false) => {
    const { bakers, setBakers } = context;
    console.log("fetchBakerListData");
    let url = API_URL + "/bakers";
    if (bakers.length == 0 || isAfterUpdate == true) {
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

export const fetchUsersListData = async (context, isAfterUpdate=false) => {
    const { usersList, setUsersList } = context;

    let url = API_URL + "/users/usersList";
    if (usersList.length == 0 || isAfterUpdate == true) {
        try {
            let resp = await apiRequestGet(url);
            console.log(resp.data);
            setUsersList(resp.data)
        } catch (err) {
            alert("Error fetching data");
            console.log("ERROR ", err);
        }
    }
};

export const deleteBakerApi = async (bakerId) => {
    let url = `${API_URL}/bakers/${bakerId}`;
    let method = 'DELETE'
    try {
        let resp = await apiRequestMethod(url, method);
        console.log(resp.data);
        return resp.data;
    } catch (err) {
        alert("Error fetching data");
        console.log("ERROR ", err);
    }
};

export const deleteUserApi = async (userId) => {
    let url = `${API_URL}/users/${userId}`;
    let method = 'DELETE'
    try {
        let resp = await apiRequestMethod(url, method);
        console.log(resp.data);
        return resp.data;
    } catch (err) {
        alert("Error fetching data");
        console.log("ERROR ", err);
    }
};

export const updateBakerApi=async(bakerId,bakerBody)=>{
    let url = `${API_URL}/bakers/${bakerId}`;
    let method = 'PUT'
    try {
        let resp = await apiRequestMethod(url, method,bakerBody);
        console.log(resp.data);
        return resp.data;
    } catch (err) {
        alert("Error edit baker");
        console.log("ERROR ", err);
    }
}

export const updateUserApi=async(userId,userBody)=>{
    let url = `${API_URL}/users/${userId}`;
    let method = 'PUT'
    console.log(userBody);
    try {
        let resp = await apiRequestMethod(url, method,userBody);
        console.log(resp.data);
        return resp.data;
    } catch (err) {
        alert("Error edit user");
        console.log("ERROR ", err);
    }
}

export const changeUserToBakerApi=async(userId)=>{
    let url = `${API_URL}/users/changeToBaker/${userId}`;
    let method = 'PUT'
    try {
        let resp = await apiRequestMethod(url, method);
        console.log(resp.data);
        return resp.data;
    } catch (err) {
        alert("Error edit user");
        console.log("ERROR ", err);
    }
}

export  const updateBakerLikes = async (bakerId) => {
    let url = `${API_URL}/bakers/likes/${bakerId}`;
    let method = 'PUT'
    try {
        let resp = await apiRequestMethod(url, method)
        console.log(resp.data);
        return resp.data;
    }
    catch (err) {
        alert("Error add like")
        console.log("ERROR ", err);
    }
}

export const getUserInfo=async()=>{
    let url=`${API_URL}/users/myInfo`;
    try{
        let resp=await apiRequestGet(url);
        console.log(resp.data);
        return resp.data;
    }
    catch (err) {
        alert("Error fetching data")
        console.log("ERROR: ", err);
    }
}

export const sendEmail=async(email)=>{
    let url=`${API_URL}/users/sendEmail`;
    let body={"to":email};
    try{
        let resp=await apiRequestMethod(url,"POST",body);
        console.log(resp.data)
        return resp.data;
    }
    catch(err){
        alert("Error send email");
        console.log("ERROR: ", err);
    }
}

export const resetPassowrd=async(body)=>{
    let url=`${API_URL}/users/resetPassword`;
    try{
        let resp=await apiRequestMethod(url,"PATCH",body);
        console.log(resp.data)
        return resp.data;
    }
    catch(err){
        alert("Error reset passowrd");
        console.log("ERROR: ", err);
    }
}

export const isExistEmailInDB=async(email)=>{
    let url=`${API_URL}/users/isExistEmail/${email}`;
    try{
        let resp=await apiRequestGet(url);
        console.log(resp.data)
        return resp.data;
    }
    catch(err){
        alert("Error chack is exist email");
        console.log("ERROR: ", err);
    }
}