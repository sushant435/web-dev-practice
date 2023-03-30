let submitButton = document.getElementById("submitButton");

let errors={};
submitButton.addEventListener("click",function(e){
    e.preventDefault();
    let signupForm=document.forms["signupForm"];
    let firstNameInput= signupForm.firstName;
    let lastNameInput= signupForm.lastName;


    if(firstNameInput.value==""){
        errors.firstName="First Name should not be empty";

    }

    if(lastNameInput.value==""){
        errors.lastName="Last Name should not be empty";

    }

    console.log(errors);
    for(let error in errors){

    }

//     if(emailInput.value==""){
//         let emailGroup = document.getElementById("emailGroup");
//         let emailMessage=document.querySelector("#emailGroup .message");
//         emailGroup.classList.add("error");
//         emailMessage.textContent="Email should not be empty";
//     }

//     if(passwordInput.value==""){
//         let emailGroup = document.getElementById("passwordGroup");
//         let passwordMessage=document.querySelector("#passwordGroup .message");
//         passwordGroup.classList.add("error");
//         passwordMessage.textContent="Password should not be empty";
//     }

 });