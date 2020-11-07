import axios from "axios";
//const url = "azure.server";

const parseUrl = "https://parseapi.back4app.com";
const { REACT_APP_ID, REACT_APP_KEY } = process.env;
const dHeaders = {
    "X-Parse-Application-Id": `${REACT_APP_ID}`,
    "X-Parse-REST-API-Key": `${REACT_APP_KEY}`,
    "Content-Type": "application/json",
};

async function sendSignupData(dataToSubmit) {
    var retVal = false;

    await axios
        .post("/User", dataToSubmit)
        .then((response) => {
            console.log(response);
            retVal = true;
        })
        .catch((error) => {
            console.log(error);
            retVal = false;
        });

    return retVal;
}

async function sendLoginData(mail, psw) {
    var dataToSubmit = {
        emailAddress: mail,
        password: psw,
    };

    var responseData = {};

    await axios
        .post("/AuthenticateLogin", dataToSubmit)
        .then((response) => {
            //console.log(response.data);

            responseData = response.data;
        })
        .catch((error) => {
            console.log(error);
        });

    return responseData;
}

export default {
    sendSignupData,
    sendLoginData,
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
