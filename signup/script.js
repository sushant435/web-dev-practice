let submitButton = document.getElementById("submitButton");

let errors={};
submitButton.addEventListener("click",function(e){
    e.preventDefault();
    errors={};
    let signupForm=document.forms["signupForm"];
    let firstNameInput= signupForm.firstName;
    let lastNameInput= signupForm.lastName;
    let EmailInput=signupForm.Email;
    let PasswordInput=signupForm.Password;


    if(firstNameInput.value==""){
        errors.firstName="First Name should not be empty";

    }

    if(lastNameInput.value==""){
        errors.lastName="Last Name should not be empty";

    }
    if(EmailInput.value=="")
    {
        errors.Email="Email should not be empty";
    }

    if(PasswordInput.value=="")
    {
        errors.Password="Password should not be empty";
    }
    if(PasswordInput.value.length <=5)
    {
        errors.Password="Minimun 6 characters are needed.";
    }

console.log(errors);

    for(let error in errors){
        let lastNameGroup = document.getElementById(`${error}Group`);
        let lastNameMessage=document.querySelector(`#${error}Group .message`);
        lastNameGroup.classList .add("error");
        lastNameMessage.textContent=errors[error];
    }
if(Object.keys(errors).length==0)
{
    signupForm.submit();
}
//     if(emailInput.value==""){
//         
//     }

//     if(passwordInput.value==""){
//         let emailGroup = document.getElementById("passwordGroup");
//         let passwordMessage=document.querySelector("#passwordGroup .message");
//         passwordGroup.classList.add("error");
//         passwordMessage.textContent="Password should not be empty";
//     }

 });