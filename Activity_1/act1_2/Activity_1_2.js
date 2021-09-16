//2. Using the following array of objects, create a log-in system which checks if the username and password match. 

let obj = [{username : "user1", password: "password"},
{username : "user2", password: "password1"},
{username : "user3", password: "password2"},
{username : "user4", password: "thispassword"} ];

//Use Prompt() to get the username and password and use Alert() to inform if the credentials are valid or invalid.

let username = prompt("Input Username");
let password = prompt("Input Password");

var valid = false;
validate(username, password);

function validate(username, password) {

    for (var i=0; i <obj.length; i++) {
        if ((username == obj[i].username) && (password == obj[i].password)) {
            valid = true;
            break;  
        }
    }
}
if(valid) {
    alert("valid credentials");
  }
  else {
    alert("invalid credentials");
  }
