import axios from "axios";

const url = "http://localhost:3001";

export const sendSignupData = async () => {
    try {
        const send = await axios({
            url: `${url}/signup`,
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
            url: `${url}/login`,
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
