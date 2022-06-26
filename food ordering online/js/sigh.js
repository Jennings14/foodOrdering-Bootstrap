
    // // Initialize the FirebaseUI Widget using Firebase.
    // var ui = new firebaseui.auth.AuthUI(firebase.auth());

    // ui.start('#firebaseui-auth-container', {
    //     signInOptions: [
    //       firebase.auth.EmailAuthProvider.PROVIDER_ID
    //     ],
    //     // Other config options...
    //   });

    //   ui.start('#firebaseui-auth-container', {
    //     signInOptions: [
    //       firebase.auth.EmailAuthProvider.PROVIDER_ID
    //     ],
    //     // Other config options...
    //   });
      
      
    // var uiConfig = {
    //     callbacks: {
    //     signInSuccessWithAuthResult: function(authResult, redirectUrl) {
    //         // User successfully signed in.
    //         // Return type determines whether we continue the redirect automatically
    //         // or whether we leave that to developer to handle.
    //         return true;
    //     },
    //     uiShown: function() {
    //         // The widget is rendered.
    //         // Hide the loader.
    //         document.getElementById('loader').style.display = 'none';
    //     }
    //     },
    //     // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    //     signInFlow: 'redirect',
    //     signInSuccessUrl: 'index.html',
    //     signInOptions: [
    //     // Leave the lines as is for the providers you want to offer your users.
    //     // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //     // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //     // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    //     // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    //     firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //     // firebase.auth.PhoneAuthProvider.PROVIDER_ID
    //     ],
    //     // Terms of service url.
    //     tosUrl: 'contact.html',
    //     // Privacy policy url.
    //     privacyPolicyUrl: '<your-privacy-policy-url>'
    // };
    // // The start method will wait until the DOM is loaded.
    // ui.start('#firebaseui-auth-container', uiConfig);

    
  




// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       // User is signed in.
//       document.getElementById("user_div").style.display = "initial";
//       document.getElementById("Login_form").style.display = "none";

//     } else {
//       // No user is signed in.
//       document.getElementById("user_div").style.display = "none";
//       document.getElementById("Login_form").style.display = "initial";
//     }
//   });
  

function signup(){
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;

    window.alert("WELCOME!!!");
    window.alert("User with the email" + " " + userEmail + " " + "has been logged in " );
    window.location.href = "index.html";

//     firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
//   .then((user) => {
//     // Signed in 
//     window.alert(userEmail + " " + userPassword);
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;

//     window.alert("Error: " + errorMessage);

//   });  

}