export const validateLoginData = (email, password) => {
    const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isValidPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    if(!isValidEmail) return "Email ID is not valid";
    if(!isValidPassword) return "Password is not valid";

    return null;
};

export const validateSignupData = (fullName, email, password) => {
    const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isValidPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    if(fullName === "") return "Please enter a valid name";
    if(!isValidEmail) return "Email ID is not valid";
    if(!isValidPassword) return "Password is not valid";

    return null;
}