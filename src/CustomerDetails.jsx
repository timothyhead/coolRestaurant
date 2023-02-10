import React, { useEffect, useState } from "react"
import CustomerInfo from "./CutomerInfo"

function CustomerDetails(props) {

    const [isDisabled, setDisabled] = useState(true)
    const [time, setTime] = useState("00:00")
    const [address, setAddress] = useState();
    const [name, setName] = useState();
    const [isPickup, setIspickup] = useState();

    useEffect(() => {
      
        JSON.parse(localStorage.getItem("currentOrders")).forEach(element => {
           
        });
setAddress(props.details)
    }, [props])

    useEffect(() => {
setName(address?.givenName + " " + address?.familyName)
setIspickup(address?.isPickUp)
    }, [address])

function activeOrders(order) {
  
 return order.id != props.id

}

function clicked() {
   
 let newStore = JSON.parse(localStorage.getItem("currentOrders"));
 const result = newStore.filter(activeOrders);

  localStorage.setItem("currentOrders", JSON.stringify(result));
  
}
    return (
    <div >
   <CustomerInfo   firstField="Customer Name" thirdFieldTop={name} ></CustomerInfo>
   <CustomerInfo firstField="Pickup Y/N"  thirdFieldTop={isPickup}></CustomerInfo>
   <CustomerInfo firstField="Contact Details" secondFieldTop="phone"  secondFieldMiddleTop="email" thirdFieldTop={address?.phone} thirdFieldMiddleTop={address?.email}></CustomerInfo>
  {(props.Pickup == "Y") ?  <div><CustomerInfo  firstField="Address If Not Pickup" secondFieldTop="street"  secondFieldMiddleBottom="city" secondFieldBottom="postcode" thirdFieldTop={address?.street} thirdFieldMiddleTop={address?.city} thirdFieldBottom={address?.postCode}></CustomerInfo>
<div className="margin-bottom-30"></div></div>: <div className="margin-bottom-150"></div>}
<button  onClick={clicked}>ORDERS SENT NOW DELETE ITEM</button>

</div>
  
    
  
        )
}

export default CustomerDetails

