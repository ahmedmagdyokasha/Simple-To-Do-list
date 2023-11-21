/////////////// done with insertAdjacentHTML approach //////////////

//1- select neded elements
// const btn = document.querySelector("button");
// const input = document.querySelector("input");
// const tasks = document.querySelector("ul");
// const lists = document.querySelectorAll("li");
// /////
////////// togle done function
// function toggleDone(e) {
//   if (e.target.tagName === "LI") {
//     e.target.classList.toggle("done");
//   }
// }
// lists.forEach((list) => {
//   list.addEventListener("click", toggleDone);
// });
// // 2- add event listener on botton to add user input to the list
// btn.addEventListener("click", () => {
//   if (input.value != "") {
//     let html = ` <li class="task">${input.value}</li>`;
//     tasks.insertAdjacentHTML("beforeend", html);
//     // console.log(input.value, typeof input.value);
//     input.value = "";
//     //// listen on new list and togle done class
//     let newtasks = document.getElementsByClassName("task");
//     for (let newtask of newtasks) {
//       newtask.addEventListener("click", toggleDone);
//     }
//   } else {
//     alert(`you didn add content to do !!
//      you need to add some thing to do `);
//   }
// });
///////////////////////////////// let's try create child method ///////////////
const btn = document.querySelector("button");
const input = document.querySelector("input");
const tasks = document.querySelector("ul");

//
function toggleDone(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  }
}
function handleNewTask() {
  if (input.value != "") {
    //1-create li elemnt
    let newtask = document.createElement("li");
    //2- assign the li text to user input value
    newtask.innerText = input.value;
    //3- add new li to ul
    tasks.appendChild(newtask);
    newtask.addEventListener("click", toggleDone);
    // console.log(input.value, typeof input.value);
    input.value = "";
  } else {
    alert(`you didn add content to do !!
     you need to add some thing to do `);
  }
}
btn.addEventListener("click", () => {
  handleNewTask();
});
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    handleNewTask();
  }
});
