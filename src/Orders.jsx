import React, { useEffect, useState } from "react"
import CustomerDetails from "./CustomerDetails";
import OrdersMeals from "./OrdersMeals";
import {io} from 'socket.io-client';



function Orders(props) {

    const [appetisers, setAppetisers] = useState({});
    const [sides, setSides] = useState({});
    const [main, setMain] = useState({});
    const [saladndSoups, setSaladsAndSoups] = useState({});
    const [specalties, setSpecalties] = useState({});
    const [orders, setOrders] = useState();
    const [address, setAddress] = useState();
    const [currentOrders, setCurrentOrders] = useState(["Placeholder"]);
    const [hasChangedOrders, setHasChangedOrders] = useState(false)
    const[hasChangedCurrentOrders, setHasChangedCurrentOrders] = useState(false)
    const [posts, setPosts] = useState();
    const [isChangeToOrders, SetIsChangeToOrders] = useState(false);
    const [noChangeToEtag, setNoChangeToEtag] = useState(false);

    var id = 0
    var j = 1

    // socketio

    const socket = io("https://historical-pretty-guava.glitch.me/");

    
    socket.on('disconnect', () => {
        console.log("false");
       });
      
      var etag = ""
      socket.on('connect', () => {
        console.log("True");
         });

   
      socket.on('order', (data) => {
       
      
            let myData = JSON.parse(data);
            
            etag = myData.Etag
           if (etag !== localStorage.getItem("Etag")) {
         
             console.log("etags differnt");
               setPosts(JSON.parse(myData.order));
               SetIsChangeToOrders(true);
               localStorage.setItem("Etag", etag)
          
            } else {
              
                  SetIsChangeToOrders(false);
                 //  toggle nochangeToEtag to update use effect in orders when changetoOrders == false
                 setNoChangeToEtag(!noChangeToEtag === noChangeToEtag)
               
            }
        
       });
  

useEffect(() => {
  console.log("isChangeToOrders", isChangeToOrders);

      if (isChangeToOrders === true) {

console.log("data changed1", posts);
       
    //    posts != null ? obj.current = posts : obj.current = null
      

           
            setOrders(posts.orders)
           
            setAddress(posts.address)
         console.log(localStorage.getItem("currentOrders"), "ASDFGHJKWERTYUIOE%^&*()_+");
if (localStorage.getItem("currentOrders")) {
   
    console.log("First useeffect current orders set", JSON.parse(localStorage.getItem("currentOrders")));
    setCurrentOrders(JSON.parse(localStorage.getItem("currentOrders")));

}
          
       
      


    } 


}, [posts, isChangeToOrders])




useEffect(() => {
   
 console.log("second use effect called");
   
    
    if (isChangeToOrders === true) {
    
    


  orders?.forEach((item) => {


    
        if (item.section === "Appertisers") {
                setAppetisers(item)
             }  else if (item.section === "Salads And Soups") {
                setSaladsAndSoups(item)
             }  else if (item.section === "Main") {
                setMain(item)
             }  else if (item.section === "Sides") {
                setSides(item)
             } else if(item.section === "Specalties") {
                setSpecalties(item)
         
        }
               
    
            })

            console.log("current orders in orders second use effect", orders);
         
                console.log("current orders set in second use effect", localStorage.getItem("currentOrders"));
                setCurrentOrders(localStorage.getItem("currentOrders") ? JSON.parse(localStorage.getItem("currentOrders")) : [])
            
           
        
       setHasChangedOrders(state => !state)
           
          

        }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [orders])





  

useEffect(() => {
  
 
    
    if (isChangeToOrders === true) {
      
   
        

setCurrentOrders((prevalue) => {

    console.log(prevalue, "prevalue");
  return  [...prevalue, {
        address: address,
        appetisers: appetisers,
        saladandSoups: saladndSoups,
        main: main,
        sides: sides,
        specalties: specalties,
        id: j,
        date: props.data?.date
       
    }] 


    
})


setHasChangedCurrentOrders(state => !state)
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
}, [hasChangedOrders])
 



useEffect(() => {
 

   if (isChangeToOrders === true) {
 
    localStorage.setItem("currentOrders", JSON.stringify(currentOrders));
   
}
     // eslint-disable-next-line react-hooks/exhaustive-deps
}, [hasChangedCurrentOrders])

useEffect(() => {

    if  (isChangeToOrders === false) {
      
       

       // localStorage.setItem("currentOrders",  localStorage.getItem("current") === undefined ? null : JSON.parse(localStorage.getItem("current")))
    const storedItem = localStorage.getItem("currentOrders");
    if (storedItem) {
      
       
    console.log("storedItem", storedItem);
  
        console.log("Here", currentOrders);
        
        setCurrentOrders(JSON.parse(storedItem));


    }
   
}
 // eslint-disable-next-line react-hooks/exhaustive-deps
}, [noChangeToEtag])




function clicked(id) {
   console.log("clicked");
    let newStore = JSON.parse(localStorage.getItem("currentOrders"));
    if (newStore?.length <= 1) {
        setCurrentOrders([]) 
        localStorage.setItem("currentOrders", []);
    } else {
   var result = newStore.filter(function (order, index) {
       console.log(order.id, index, "ids");
       return (order.id !== id)
    })
    };
    setCurrentOrders(result)
localStorage.setItem("currentOrders", JSON.stringify(result));


console.log(result, "result", newStore);

setCurrentOrders(result)


}
    return (
<div>

<h1>Orders</h1>
<div className="corner">
<div className="flex-container-row">
<section className="red golden-ratio-width-small"></section>
<section className="red golden-ratio-width-large">

<h2 className="inline menu-sections-postion">Menu Sections</h2>
<h2  className="inline vertical-center">Meal Name</h2>
<h2  className="inline qty-postion vertical-center">Qty </h2>
</section>
</div>
{console.log("It's here", currentOrders)}
 
{ currentOrders ?
    currentOrders.map((item) => {

 if (item.address != null) {

    id ++
    item.id = id
   

 return   <ul>

<details className="silk">
<div className="flex-container-row">
<section className="green golden-ratio-width-small">
 <CustomerDetails details={item.address} id={id}></CustomerDetails>
</section>
<section className="orange golden-ratio-width-large">
 <div>


<OrdersMeals meals={item.appetisers}/>
</div>
<div>
<OrdersMeals meals={item.saladandSoups}/>
</div>
<div> 
<OrdersMeals meals={item.main}/>
</div>
<div>
<OrdersMeals meals={item.sides}/>
</div>
<div>
<OrdersMeals meals={item.specalties}/>
</div>
</section>
</div>
   <button  onClick={() => {
    clicked(item.id)
}}>ORDERS SENT? NOW DELETE ITEM</button>
</details>

</ul>  
} else {
    return <div></div>
}
})

: console.log("No current orders")
}



 </div>
 </div>

    )
}
export default Orders;