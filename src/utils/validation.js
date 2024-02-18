/* eslint-disable no-useless-escape */
const validation = (email, password, name) => {
    const emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const passwordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
    let nameValidate = null;
    console.log(name)
    if (name) {
        nameValidate = /^[A-Za-z][A-Za-z0-9_]{3,29}$/.test(name);
    }

    if (!emailValidate) {
        return "Email is not valid";
    } else if (!passwordValidate) {
        return "Password is not valid";
    } else if (!nameValidate) {
        return "Name is not valid";
    } else {
        return null;
    }
}

export default validation;
