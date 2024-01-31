export const validateRequiredField=(value,label)=>{
    let error;
    if(!value){
        error= `${label} is required`;
    }
    return error
}

export  const validateEmail = (email,label) => {
    // eslint-disable-next-line no-useless-escape
    let error;
    //email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
        error=`${label} must be a valid Email Address`;
    }
    return error;
}