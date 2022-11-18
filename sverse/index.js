// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUw_AFGzf6LfvkfCMnswH_8Z06UhLQ2jE",
  authDomain: "snext-sverse.firebaseapp.com",
  projectId: "snext-sverse",
  storageBucket: "snext-sverse.appspot.com",
  messagingSenderId: "1091633315944",
  appId: "1:1091633315944:web:4dab13b7d41145e802bbdd",
  measurementId: "G-G2N2XNZPR7"
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
    if (validate_field(full_name) == false)
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
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).set(user_data)
  
      // DOne
      alert('User Created!!')
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
      alert('User Logged In!!')
  
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