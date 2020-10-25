import axios from "axios";

//const url = "azure.server";

async function sendSignupData(dataToSubmit) {
    var retVal = false;

    await axios.post("/User", dataToSubmit)
    .then(response => {
        console.log(response);
        retVal = true;
    })
    .catch(error => {
        console.log(error);
        retVal = false;
    })

    return retVal;
}

async function sendLoginData(mail, psw) {
    var dataToSubmit = {
        "emailAddress": mail,
        "password": psw
    }

    var responseData = {};

    await axios.post("/AuthenticateLogin", dataToSubmit)
    .then(response => {
        //console.log(response.data);

        responseData = response.data;
    })
    .catch(error => {
        console.log(error);
    })

    return responseData;
}

export default{
    sendSignupData,
    sendLoginData
}
