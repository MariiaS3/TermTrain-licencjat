export const emailValidator = email => {
    if (!email) {
        return { messange: "" };
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
        return { messange: "Nieprawidłowy format e-maila" };
    }
    return { messange: "" };
}

export const passwordValidator = pass => {
    if (!pass) {
        return { messange: "" };
    } else if (pass.length < 8) {
        return { messange: "Hasło musi mieć minimum 8 znaków" };
    }
    return { messange: "" };
}