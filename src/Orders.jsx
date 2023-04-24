import React, { useEffect, useRef, useState } from "react"
import CustomerDetails from "./CustomerDetails";
import OrdersMeals from "./OrdersMeals";


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
    const [didinit, setdidinit] = useState(false);
    const [didinit2, setdidinit2] = useState(false);
    const [didinit3, setdidinit3] = useState(false);

    var id = 0
    var obj = useRef([])
    var j = 1


    
   

useEffect(() => {
  

      if (props.changeOrders === true) {

console.log("data changed1", props.data);
       
        props?.data != null ? obj.current = props?.data : obj.current = null
        if (obj.current) {

           
            setOrders(obj.current.orders)
           
            setAddress(obj.current.address)
         console.log(localStorage.getItem("currentOrders"), "ASDFGHJKWERTYUIOE%^&*()_+");
if (localStorage.getItem("currentOrders")) {
   
    console.log("First useeffect current orders set", JSON.parse(localStorage.getItem("currentOrders")));
    setCurrentOrders(JSON.parse(localStorage.getItem("currentOrders")));
    setdidinit(true)
}
          
       
        } 


    } 


}, [props.data, props.changeOrders])




useEffect(() => {
   
 console.log("second use effect called");
   
    
    if (props.changeOrders === true && didinit === true) {
      setdidinit2(true)
    


setdidinit(false)
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
    
 
}, [didinit, orders, props.changeOrders])





  

useEffect(() => {
   console.log("use effect3", props.changeOrders, didinit2);
 
       setdidinit3(true)
    if (props.changeOrders === true && didinit2 === true) {
       setdidinit2(false)
   
        console.log("Set current orders again", currentOrders);

setCurrentOrders((prevalue) => {
if (prevalue != null) {
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
} else {
    return  [{
        address: address,
        appetisers: appetisers,
        saladandSoups: saladndSoups,
        main: main,
        sides: sides,
        specalties: specalties,
        id: j,
        date: props.data?.date
       
    }] 
}

    
})


setHasChangedCurrentOrders(state => !state)
    }
}, [hasChangedOrders, address, currentOrders, appetisers, didinit2, j, main, props.changeOrders ,props.data , saladndSoups, sides, specalties])
 



useEffect(() => {
 

   if (props.changeOrders === true && didinit3 === true) {
   setdidinit3(false)
    localStorage.setItem("currentOrders", JSON.stringify(currentOrders));
    console.log("use effect 4", currentOrders);
}
    
}, [hasChangedCurrentOrders, currentOrders, didinit3, props.changeOrders])

useEffect(() => {

    if  (props.changeOrders === false) {
      console.log(localStorage.getItem("currentOrders"), "props.changeOrders == false");
       

        localStorage.setItem("currentOrders",  localStorage.getItem("current") === undefined ? null : JSON.parse(localStorage.getItem("current")))
    const storedItem = localStorage.getItem("currentOrders");
    if (storedItem) {
      
       
    console.log("storedItem", storedItem);
  
        console.log("Here", currentOrders);
        
        setCurrentOrders(JSON.parse(storedItem));


    }
   
}
}, [props.noChangeToEtag, currentOrders, props.changeOrders])




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