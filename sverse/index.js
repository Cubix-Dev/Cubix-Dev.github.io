// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: fetch("https://raw.githubusercontent.com/Cube-Enix/private-stuff/main/apiKey?token=GHSAT0AAAAAABY324F4TN3VHMVXD322PKNSY3YC6DQ").then(apiKey => apiKey.text()),
  authDomain: fetch("https://raw.githubusercontent.com/Cube-Enix/private-stuff/main/authDomain?token=GHSAT0AAAAAABY324F4ADG7AC3DGRYEEIL6Y3YC6JQ").then(authDomain => authDomain.text()),
  projectId: "snext-sverse",
  storageBucket: fetch("https://raw.githubusercontent.com/Cube-Enix/private-stuff/main/storageBucket?token=GHSAT0AAAAAABY324F43UJCWUN5HOGBGU6IY3YC6UQ").then(storageBucket => storageBucket.text()),
  messagingSenderId: fetch("https://raw.githubusercontent.com/Cube-Enix/private-stuff/main/messagingSenderID?token=GHSAT0AAAAAABY324F5TIAPKQFEZRBCKZEOY3YC6OQ").then(messagingSenderId => messagingSenderId.text()),
  appId: fetch("https://raw.githubusercontent.com/Cube-Enix/private-stuff/main/appID?token=GHSAT0AAAAAABY324F5QWZW46JVYF2USSPUY3YC6GA").then(appId => appId.text()),
  measurementId: fetch("https://raw.githubusercontent.com/Cube-Enix/private-stuff/main/measurementiD?token=GHSAT0AAAAAABY324F4PXPS2GRMWOIWBDDWY3YC6MA").then(measurementId => measurementId.text()),
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize variables
  const auth = firebase.auth()
  const database = firebase.database()
  
  // Set up our register function
  function register () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    username = document.getElementById('username').value
  
    // Validate input fields
    if (validate_email(email) == false)
    {
      alert("The email you entered isn't valid. Have you put an @ and . into it? That's required (SVerse Servers).")
      return
      // Don't continue running the code
    }
    if (validate_password(password) == false) 
    {
      alert('The password neeeds to be at least 6 characters long (Firebase API).')
      return
      // Don't continue running the code
    }
    if (validate_field(username) == false)
    {
      alert("The username field is either too short, or there isn't anything IN it (SVerse Servers, Firebase API).")
      return
    }
   
    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        email : email,
        username : username,
        last_login : Date.now()
      }
  
      // Push to Firebase Database.
      database_ref.child('users/' + user.uid).set(user_data)
  
      // DOne
      window.location.href = "https://cube-enix.github.io/sverse/pages/AuthenticationSuccess.html";
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  // Set up our login function
  function login () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
  
    // Validate input fields
    if (validate_email(email) == false)
    {
      alert("The email you entered isn't valid. Have you put an @ and . into it? That's required (SVerse Servers).")
      return
      // Don't continue running the code
    }
    if (validate_password(password) == false) 
    {
      alert('The password neeeds to be at least 6 characters long (Firebase API).')
      return
      // Don't continue running the code
    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).update(user_data)
  
      // DOne
      window.location.href = "https://cube-enix.github.io/sverse/pages/AuthenticationSuccess.html"
  
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  
  
  
  // Validate Functions
  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      // Email is good
      return true
    } else {
      // Email is not good
      return false
    }
  }
  
  function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }


  }
