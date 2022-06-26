function signup(){
  window.alert("It works");
// var username = document.getElementById("username").value
// var passwords = document.getElementById("passwords").value
// if(username == "admin" && passwords == "user"){
//     alert("login succesfully");
//     return false;
// }
// else{
//     alert("login failed");
// }
}

// const first_name = document.getElementById('first_name')
// const last_name = document.getElementById('last_name')
// const password = document.getElementById('password')
// const passwordconfirm = document.getElementById('passwordconfirm')
// const form = document.getElementById('form')

// form.addEventListener('submit', (e) => {
//   let messages = []
//   if (first_name.value === '' || first_name.value == null) {
//     messages.push('First name is required')
//   }

//   if (last_name.value === '' || last_name.value == null) {
//     messages.push('Last name is required')
//   }

//   if (password.value.length <= 6) {
//     messages.push('Password must be longer than 6 characters')
//   }

//   if (password.value.length >= 20) {
//     messages.push('Password must be less than 20 characters')
//   }

//   if (password.value === 'password') {
//     messages.push('Password cannot be password')
//   }

//   if (passwordconfirm.value !== password.value) {
//     messages.push('Passwords do not match')
//   }

//   if (messages.length > 0) {
//     e.preventDefault()
//     errorElement.innerText = messages.join(', ')
//   }
// })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Loop through Array of Objects
// var objPeople = [
// 	{ // Object @ 0 index
// 		username: "sam",
// 		password: "codify"
// 	},
// 	{ // Object @ 1 index
// 		username: "matt",
// 		password: "academy"
// 	},
// 	{ // Object @ 2 index
// 		username: "chris",
// 		password: "forever"
// 	}

// ]

// function getInfo() {
// 	var username = document.getElementById('username').value
// 	var password = document.getElementById('passwords').value

// 	for(var i = 0; i < objPeople.length; i++) {
// 		// check is user input matches username and password of a current index of the objPeople array
// 		if(username == objPeople[i].username && password == objPeople[i].password) {
// 			// console.log(username + " is logged in!!!")
// 			// // stop the function if this is found to be true
//             // return
            
//             alert("login succesfully");
//             return false;
//         }
//         else{
//             alret("login faild")
//         }
//     }
// 	console.log("incorrect username or password")
// }

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  // Your web app's Firebase configuration
  // var firebaseConfig = {
  //   apiKey: "AIzaSyDKajtFE20hhVqLjLa58u4tIrblj2X745c",
  //   authDomain: "food-ordering-ad19f.firebaseapp.com",
  //   databaseURL: "https://food-ordering-ad19f.firebaseio.com",
  //   projectId: "food-ordering-ad19f",
  //   storageBucket: "food-ordering-ad19f.appspot.com",
  //   messagingSenderId: "406042050165",
  //   appId: "1:406042050165:web:edd55a5d97b378abf7823c"
  // };
  // // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);

  // const auth = firebase.app();

  // function signup(){
  //   var email = document.getElementById("email");
  //   var password = document.getElementById("password");

  //   const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  //   promise.catch(e => alert(e.message));
    
  //   alert("User signed up");
  // }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function sign(){
//   var email = document.getElementById("email");
//     var password = document.getElementById("password");

//     const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
//     promise.catch(e => alert(e.message));
    
//   windows.alert("User signed up");
// }


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // var firebaseConfig = {
  //   apiKey: "AIzaSyAWC-G8untT0HjFEDgPgOgn0Up8fLhbIYM",
  //   authDomain: "foodorderingapp-75408.firebaseapp.com",
  //   databaseURL: "https://foodorderingapp-75408.firebaseio.com",
  //   projectId: "foodorderingapp-75408",
  //   storageBucket: "foodorderingapp-75408.appspot.com",
  //   messagingSenderId: "588544652298",
  //   appId: "1:588544652298:web:b58de4ba9a5c60fa0adbf3"
  // };
  // // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);

  // var con = firebase.database().ref('users');

  // document.getElementById("form").addEventListener("submit",(e)=>{
  //   e.preventDefault();

  //   var userInfo = con.push();
  //   userInfo.set({
  //     first_name: getId("first_name"),
  //     last_name: getId("last_name"),
  //     email: getId("email"),
  //     address: getId("address"),
  //     password: getId("password")
  //   });
  //   alert("sent");
  //   console.log("sent");
    
  //   document.getElementById("form").reset();
  // });

  function signup(){
    // var userInfo = con.push();
    // userInfo.set({
    //   first_name: getId("first_name"),
    //   last_name: getId("last_name"),
    //   email: getId("email"),
    //   address: getId("address"),
    //   password: getId("password")
    // });
    // alert("sent");
    // console.log("sent");
    
    // document.getElementById("form").reset();
    windows.alert("User signed up");

  }

  // function getId(id){
  //   return document.getElementById(id).value;
  // }
  