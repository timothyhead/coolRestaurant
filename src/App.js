
import './App.css';
import React, {useEffect, useState } from 'react';
import Header from './Header';
<<<<<<< HEAD
import socketIOClient from 'socket.io-client';
const ENDPOINT = "localhost: 8080";
//import io from 'socket.io-client';

=======
//import socketIOClient from 'socket.io-client';



// import  { w3cwebsocket as W3CWebSocket } from "websocket"
 import {io} from 'socket.io-client';
//const ENDPOINT = "https://localhost:8080";

const socket = io("https://historical-pretty-guava.glitch.me/");
>>>>>>> temp

function App() {
const [posts, setPosts] = useState();
const [noChangeToOrders, SetChangeToOrders] = useState(false);
const [noChangeToEtag, setNoChangeToEtag] = useState(false);






fghjkl;


<<<<<<< HEAD
  // socket.onopen = () => {
  //     console.log(("Websocket client connected"));
  //     socket.send(JSON.stringify("hello from react app"))
  //  };
  // socket.onmessage = (message) => {
  //     console.log((message, "message"));
  //  };
  // socket.onerror = function() {
  //     console.log('Connection Error');
  // };
=======
  socket.onopen = () => {
      console.log(("Websocket client connected"));
      socket.send(JSON.stringify("hello from react app"))
   };
  socket.onmessage = (message) => {
      console.log((message, "message"));
   };
  socket.onerror = function() {
      console.log('Connection Error');
  };
>>>>>>> temp



var isInit = false
// const socket = socketIOClient(ENDPOINT, { 
//     "force new connection" : true,
// "reconnectionAttempts": "Infinity", 
// "timeout" : 10000,                  
// "transports" : ["websocket"],
// withCredentials:true,
//     extraHeaders:{
//         "my-custom-header": "abcd"
//     }

// });

useEffect(() => {

   var etag = ""


socket.on('connect', () => {
console.log("True");
 });
 socket.on('disconnect', () => {
  console.log("false");
 });


socket.on("connection", (socket) =>
{ // send a message to the client
socket.emit("hello", "world"); // receive a message from the client




});
socket.on('order', (data) => {
 
   
      let myData = JSON.parse(data);
      console.log(myData.order, "myData", myData.Etag)
      etag = myData.Etag
     if (etag !== localStorage.getItem("Etag")) {
   
       console.log("etags differnt");
         setPosts(JSON.parse(myData.order));
         SetChangeToOrders(true);
         localStorage.setItem("Etag", etag)
    
      } else {
         console.log("etags the same");
            SetChangeToOrders(false);
            // toggle nochangeToEtag to update use effect in orders when changetoOrders == false
            setNoChangeToEtag(!noChangeToEtag === noChangeToEtag)
         
      }
 
  
    
  
 });

 
   

  
    
   return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('order');
    };
   
}, []);


<<<<<<< HEAD

=======
function buttonClicked() {
 
   localStorage.removeItem("currentOrders")
  fetch("https://historical-pretty-guava.glitch.me//api", {cache: "default"})
     .then((res) => res.json())
     .then((data) => {
        setPosts(JSON.parse(data));
        console.log("received 2", data, "received 2");
    
     })
     .catch((err) => {
        console.log(err.message);
        console.log("error");
        
     });
}
>>>>>>> temp

  return (
    <div className="App">

    
        <form action="../../post" method="post"
           className="form">
       <button type="submit">Connected?</button>
     
     </form>
  

  <Header data={posts} changeOrders={noChangeToOrders} noChangeToEtag={noChangeToEtag}/>
    
    </div>
  );
}

export default App;
