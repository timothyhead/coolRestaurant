import React, { useEffect, useState } from "react"
import CustomerInfo from "./CutomerInfo"

function CustomerDetails(props) {

    const [isDisabled, setDisabled] = useState(true)
    const [time, setTime] = useState("00:00")
    const [address, setAddress] = useState();
    const [name, setName] = useState();
    const [isPickup, setIspickup] = useState();
    var isDeleted = false
    const [deletedChanged, setDeletedChanged] = useState(false)

    useEffect(() => {
      
        // JSON.parse(localStorage.getItem("currentOrders")).forEach(element => {
           
        // });
setAddress(props.details)
    }, [props])

    useEffect(() => {
setName(address?.givenName + " " + address?.familyName)
setIspickup(address?.isPickUp)
    }, [address])



   
    return (
    <div >
   <CustomerInfo   firstField="Customer Name" thirdFieldTop={name} ></CustomerInfo>
   <CustomerInfo firstField="Pickup Y/N"  thirdFieldTop={isPickup}></CustomerInfo>
   <CustomerInfo firstField="Contact Details" secondFieldTop="phone"  secondFieldMiddleTop="email" thirdFieldTop={address?.phone} thirdFieldMiddleTop={address?.email}></CustomerInfo>
  {(props.Pickup == "Y") ?  <div><CustomerInfo  firstField="Address If Not Pickup" secondFieldTop="street"  secondFieldMiddleBottom="city" secondFieldBottom="postcode" thirdFieldTop={address?.street} thirdFieldMiddleTop={address?.city} thirdFieldBottom={address?.postCode}></CustomerInfo>
<div className="margin-bottom-30"></div></div>: <div className="margin-bottom-150"></div>}


</div>
  
    
  
        )
}

export default CustomerDetails

