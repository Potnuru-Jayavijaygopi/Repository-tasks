// 1.Create a global variable  and access inside function
let name = "Gopi";
function displayName() {
    console.log(name);
}
displayName();
//2.Create a block  varaible and try accessing Outside
if (true) {
    var age = "30";
}
console.log(age);

// 3.Repalce var with let
//var
var city = "Guntur";
console.log(city);
//let
let place = "Guntur";
console.log(place);

//4.Show favorite color and display it after refresh
localStorage.setItem("color", "Blue");
console.log(localStorage.getItem("color"));
let savedColor = localStorage.getItem("color");
console.log(savedColor);

//5. Store a user object
let user = {
    name: "Gopi",
    age: 22,
    city: "Guntur"
};
localStorage.setItem("user", JSON.stringify(user));
console.log(JSON.parse(localStorage.getItem("user")));

// 6.Create a "Rember Me" user name field in local storage
// let username = prompt("Enter username:");
// localStorage.setItem("username", username);
// console.log(localStorage.getItem("username"));

//7.Use Session stroage and watch it disppaer after closing
// let name1 = prompt("Enter username:");
// sessionStorage.setItem("username", name1);
// console.log(sessionStorage.getItem("username"));