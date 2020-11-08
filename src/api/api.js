import axios from "axios";
import Parse from "parse";
//const url = "azure.server";

const parseUrl = "https://parseapi.back4app.com";
const { REACT_APP_ID, REACT_APP_KEY } = process.env;
const dHeaders = {
    "X-Parse-Application-Id": `${REACT_APP_ID}`,
    "X-Parse-REST-API-Key": `${REACT_APP_KEY}`,
    "Content-Type": "application/json",
};

export const sendSignupData = async ({ name, surname, wallet, mail, psw }) => {
    try {
        const user = new Parse.User();
        user.set("username", mail);
        user.set("email", mail);
        user.set("password", psw);
        user.set("author", `${name} ${surname}`);
        user.set("wallet", wallet);
        const send = await user.signUp();
        return { ok: "ok", send: send };
    } catch (error) {
        console.log("Error sending data to server when signed up");
        return error;
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
        return error;
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
