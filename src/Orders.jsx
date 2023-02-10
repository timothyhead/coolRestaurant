import React, { useEffect, useState } from "react"
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
    const [currentOrders, setCurrentOrders] = useState([]);
    const [pickUp, setPickUp] = useState();
  var [hasChangedOrders, setHasChangedCurrentOrders] = useState(false);
  var [hasSetCurrentOrders, setHasSetCurrentOrders] = useState(false)
  var id = 0
  var obj = []
  var j = 1


    var didInit = false
   

useEffect(() => {
  
  
    if ((!didInit) && (props.data != null)) {
        didInit = true
       
       
      
     

       
        props?.data != null ? obj = props?.data : obj = null
        if (obj) {
            setOrders(obj.orders)
            setAddress(obj.address)
       
        
      
           
        } else {
     
       

        }

}

}, [props.data, props.changeOrders])

var didInit2 = false 


useEffect(() => {
   
    
    if (didInit2 == false) {
        didInit2 = true


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
            setCurrentOrders(JSON.parse(localStorage.getItem("currentOrders")))
        
            setHasChangedCurrentOrders(hasChangedOrders = !hasChangedOrders);
           
          
;
        }
    
 
}, [orders])




   var didInit3 = false

useEffect(() => {

  if (didInit3 == false)   {
  

    didInit3 = true
   
setCurrentOrders((prevalue) => {

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




setHasSetCurrentOrders(hasSetCurrentOrders = !hasSetCurrentOrders)
  }
}, [hasChangedOrders])
    var didInit4 = false
useEffect(() => {
    if ((!didInit4) && (props.changeOrders == false)) {
        didInit4 = true

localStorage.setItem("currentOrders", JSON.stringify(currentOrders));

    }
}, [hasSetCurrentOrders])
var didInit5 = false
useEffect(() => {

    if (didInit5 == false  && props.changeOrders == true) {
     
  
        didInit5 = true
        setCurrentOrders([])
   
    setCurrentOrders(JSON.parse(localStorage.getItem("currentOrders")))
    }
}, [props.changeOrders])
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
{   currentOrders?.length > 0 &&  
currentOrders?.map((item) => {
  
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
    
</details>

</ul>  
}})}


 </div>
 </div>

    )
}
export default Orders;