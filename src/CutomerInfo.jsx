import React from "react";

function CustomerInfo(props) {
return (
    <div>
 <section className="orders-customer-details-box-left">
    <h1>{props.firstField}</h1>
</section>
 <section className="orders-customer-details-box-middle">
  <h4>{props.secondFieldTop}</h4>
  <h4>{props.secondFieldMiddleTop}</h4>
  <h4 className="margin-top-city">{props.secondFieldMiddleBottom}</h4>
  <h4>{props.secondFieldBottom}</h4>
 </section>
<section className="orders-customer-details-box-right">
<h4>{props.thirdFieldTop}</h4>
  <h4>{props.thirdFieldMiddleTop}</h4>
  <h4>{props.thirdFieldBottom}</h4>
</section>
   
    </div>
)

}

export default CustomerInfo