
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


function addRoom() {
    var room = document.getElementById("add_room").value
    localStorage.setItem("room", room)
    firebase.database().ref("/").child(room).update({
        "purpose": "adding room name"
    })
    window.location = "chat_room.html"
}
getData()


function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            roomNames = childKey;
            console.log(roomNames)
            //Start code
            var row = "<div class='room_name' id = " + roomNames + " onclick = 'goToRoom(this.id)'>" + roomNames + "</div><hr>"
            document.getElementById("output").innerHTML += row


            //End code
            
        });
    });
}
function logOut() {
    localStorage.removeItem("usernmame", username)
    localStorage.removeItem("roomNames", roomNames)

    window.location="index.html"
}
