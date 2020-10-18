export const mailValidation = (mail) => {
    if (
        mail &&
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            mail
        )
    ) {
        return "invalid";
    } else if (!mail) {
        return "required";
    } else return true;
};

export const textValidation = (field) => {
    if (!field) {
        return false;
    } else return true;
};
