// Ge element by class
var loginSubmitBtn = $(".loginbtn");
var loginUserName = $('input[name="loginUserName"]');
var loginPassword = $('input[name="loginPassword"]');
var signupSubmitBtn = $(".signupbtn");
var signupUserName = $('input[name="signupUserName"]');
var signupPassword = $('input[name="signupPassword"]');

// Functions
async function loginHandler(){
    console.log("Submit Press")
    console.log(loginUserName.val());
    console.log(loginPassword.val());
}

async function signupHandler(){
    console.log("Submit Press")
    console.log(signupUserName.val());
    console.log(signupPassword.val());
}

// Event handler

loginSubmitBtn.on("click", function(e){
    e.preventDefault();
    loginHandler();
});

signupSubmitBtn.on("click", function(e){
    e.preventDefault();
    signupHandler();
})

