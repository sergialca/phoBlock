import axios from "axios";
//const url = "azure.server";

const parseUrl = "https://parseapi.back4app.com";
const { REACT_APP_ID, REACT_APP_KEY } = process.env;
const dHeaders = {
    "X-Parse-Application-Id": `${REACT_APP_ID}`,
    "X-Parse-REST-API-Key": `${REACT_APP_KEY}`,
    "Content-Type": "application/json",
};

export const sendSignupData = async () => {
    try {
        const send = await axios({
            url: `${parseUrl}`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers":
                    "x-requested-with, authorization, content-type, cache-control, pragma, expires,  Content-Language",
            },
        });
        return send;
    } catch (error) {
        console.log("Error sending data to server when signed up");
        return false;
    }
};

export const sendLoginData = async (mail, psw) => {
    try {
        const send = await axios({
            method: "post",
            url: `${parseUrl}`,
            headers: { "Access-Control-Allow-Origin": "*" },
            data: {
                email: mail || "",
                psw: psw || "",
            },
        });
        return send;
    } catch (error) {
        console.log("Error sending data to server when loggin in");
        return false;
    }
};

export const addImage = async (fields, author, hash, wallet) => {
    try {
        const val = await axios({
            method: "post",
            url: `${parseUrl}/classes/Image`,
            headers: dHeaders,
            data: {
                categories: fields.select,
                author,
                hash,
                wallet,
            },
        });
        return val.data;
    } catch (e) {
        return false;
    }
};
