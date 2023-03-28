
// console.log("Javascript");
// //Alert dialog 
// //window.alert("SeTeX");

// //confirm box

// //let answer= window.confirm("are you sure yo want to exit")

// //console.log(answer)

// //prompt dialog box

// // let answer = window.prompt("What is the capital of nepal")

// // if (answer == "kathmandu"){
// //     window.alert("You are correct")
// // }
// // else
// // {
// //     window.alert("you are wrong.")
// // }
// // console.log(answer); 

// // document

// console.log(window.document)

// //window.document.body.style.backgroundColor = "red";

// //document.body.style.fontfamily = "sans-serif"
// //document.body.innerHTML = "<h1> HTML </h1>"

// //selector
// // let movies= document.getElementById("movies")
// // movies.style.backgroundColor = "cyan";

// //Class selector 
// s=document.getElementsByClassName("movies")
// console.log("movies")

// /////Query selector 
//  let movies = document.querySelector(".movieslist")
//  movies.classList.add("big-red")
// // //All
// let movies1= document.querySelectorAll(".movieslist")
// movies1[1].style.backgroundColor="blue";

// //event listner
// // document.addEventListener("click", function(){
// //     window.alert("You win");
// // })
// let button = document.querySelector('.click')
// button.addEventListener("click",function()
// {
//     window.alert("You win");
// });

let button = document.querySelector('.click')
button.addEventListener("click",function()
{
 document.body.classList.add("dark") ;
button.textContent="Light mode";
});

















