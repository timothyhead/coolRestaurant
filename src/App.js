
import './App.css';
import React, {useEffect, useState } from 'react';
import Header from './Header';
import socketIOClient from 'socket.io-client';
const ENDPOINT = "localhost: 8080";
//import io from 'socket.io-client';


function App() {
const [posts, setPosts] = useState();
const [noChangeToOrders, SetChangeToOrders] = useState(false);
const [noChangeToEtag, setNoChangeToEtag] = useState(false);






fghjkl;


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



var isInit = false
const socket = socketIOClient(ENDPOINT);
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
