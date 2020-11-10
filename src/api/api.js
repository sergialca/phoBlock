import Parse from "parse";

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

export const sendLoginData = async ({ mail, psw }) => {
    try {
        const send = await Parse.User.logIn(mail, psw);
        return { ok: "ok", send: send };
    } catch (error) {
        console.log("Error sending data to server when loggin in");
        return error;
    }
};

export const addImage = async (categories, author, hash, wallet) => {
    try {
        const Image = Parse.Object.extend("Image");
        const newImage = new Image();
        newImage.set("hash", hash);
        newImage.set("author", author);
        newImage.set("wallet", wallet);
        newImage.set("categories", categories);
        const send = await newImage.save();
        return { ok: "ok", send: send };
    } catch (e) {
        return e;
    }
};

export const logout = async () => {
    await Parse.User.logOut();
    return;
};
