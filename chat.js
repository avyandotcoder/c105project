// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBia0OH9vlHaa8Yo0zG_wYMmzSIY1OvMIA",
    authDomain: "chat-web-app-5befa.firebaseapp.com",
    databaseURL: "https://chat-web-app-5befa-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-5befa",
    storageBucket: "chat-web-app-5befa.appspot.com",
    messagingSenderId: "694991436674",
    appId: "1:694991436674:web:923e34b1197d1c378ded9b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



