console.log("hello world");

function greet(name) {
    console.log("hello", name);
}

function login({name}) {
    // network call with required data i.e. name 

    // response

    // success -> redirect to otp enter page
    // failure -> error show
}

function verifyOTP({otp}){
    //network call -> otp
    //header token appended

    //response

    //success -> redirect to home page
    //failure -> give another chance to enter otp
}

//login
//verifyOTP