export default function validatePassword(password){
    let warnings = {
        errors : [],
    };
    if(password.length<8){
        warnings.errors.push("The password needs to be atleast 8 characters long");
        return warnings;
    }
    if(!/[A-Z]/.test(password)){
        warnings.errors.push("The password must contain atleast 1 upperCase letter");
        return warnings;
    }
    if(!/[a-z]/.test(password)){
        warnings.errors.push("The password must contain atleast 1 lowerCase letter");
        return warnings;
    }
    if(!/[0-9]/.test(password)){
        warnings.errors.push("The password must contain atleast 1 Number");
        return warnings;
    }
    if(!/[!@#$%^&*]/.test(password)){
        warnings.errors.push("The password must contain a special character");
        return warnings;
    }
    if(/[ ]/.test(password)){
        warnings.errors.push("Passwords can not contain spaces");
        return warnings;
    }
    return warnings;
}