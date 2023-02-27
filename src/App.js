import logo from './logo.svg';
import './App.css';
import React, { Component, useEffect, useState } from 'react';
import Header from './Header';
import socketIOClient from 'socket.io-client';
const ENDPOINT = "https://historical-pretty-guava.glitch.me";
//import io from 'socket.io-client';
//import  { w3cwebsocket as W3CWebSocket } from "websocket"

function App() {
const [posts, setPosts] = useState();
const [noChangeToOrders, SetChangeToOrders] = useState(false);
const [noChangeToEtag, setNoChangeToEtag] = useState(false);

var etag = ""







//   socket.onopen = () => {
//       console.log(("Websocket client connected"));
//       socket.send(JSON.stringify("hello from react app"))
//    };
//   socket.onmessage = (message) => {
//       console.log((message, "message"));
//    };
//   socket.onerror = function() {
//       console.log('Connection Error');
//   };



var isInit = false
const socket = socketIOClient(ENDPOINT);
useEffect(() => {

 


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
     if (etag != localStorage.getItem("Etag")) {
   
       console.log("etags differnt");
         setPosts(JSON.parse(myData.order));
         SetChangeToOrders(true);
         localStorage.setItem("Etag", etag)
    
      } else {
         console.log("etags the same");
            SetChangeToOrders(false);
            // toggle nochangeToEtag to update use effect in orders when changetoOrders == false
            setNoChangeToEtag(noChangeToEtag != noChangeToEtag)
         
      }
 
  
    
  
 });

 
   

   if (isInit == false) {
      isInit = true
 

//   fetch("/api", {cache: "default"})
//      .then( res =>  {
      
   
      
//       for(const header of res.headers) {
        
//         if (header[0] == "etag") { 
// etag = header[1]
// return res.json() 
//         }
//       }
     
//     } )
   
//      .then((data) => {
 
//       if (etag != localStorage.getItem("Etag")) {
   
//          let myData = JSON.parse(data)
//          setPosts(myData);
//          setNoChangeToOrders(false);
//          localStorage.setItem("Etag", etag)
    
//       } else {
       
//             setNoChangeToOrders(true);
         
//       }

        
       
//      })
//      .catch((err) => {
//         console.log(err.message);
//         console.log("error");
 
        
//      });
    }
   return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('order');
    };
   
}, []);

const sendPing = () => {
   socket.emit('ping');
 }

function buttonClicked() {
 
   localStorage.removeItem("currentOrders")
  fetch("/api", {cache: "default"})
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
