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

// export const sendLoginData = async (mail, psw) => {
//     var url = "http://coms-309-vb-05.cs.iastate.edu:7070/AuthenticateLogin";

//     var dataToSubmit = {
//         "emailAddress": mail,
//         "password": psw
//     }

//     await axios.post(url, dataToSubmit)
//     .then(response => {
//         return true;
//     })
//     .catch(error => {
//         console.log(error);
//         return false;
//     })

//     // try {
//     //     const send = await axios({
//     //         method: "post",
//     //         url: `${url}`,
//     //         headers: { "Access-Control-Allow-Origin": "*" },
//     //         data: {
//     //             email: mail || "",
//     //             psw: psw || "",
//     //         },
//     //     });
//     //     return send;
//     // } catch (error) {
//     //     console.log("Error sending data to server when loggin in");
//     //     return false;
//     // }
// };

export default{
    sendSignupData,
    sendLoginData
}
