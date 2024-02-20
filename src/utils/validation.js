/* eslint-disable no-useless-escape */
const validation = (email, password) => {
    const emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const passwordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
    
    if (!emailValidate) {
        return "Email is not valid";
    } else if (!passwordValidate) {
        return "Password is not valid";
    }  else {
        return null;
    }
}

export default validation;
