import React, { useEffect, useState } from "react"





function OrdersMeals(props) {

const  [orders, setOrders] = useState([])
 const  [heightForSection, setHeightForSection] = useState()
 var id = 0


var isInit = false
       
useEffect(() => {
//if (isInit == false) {
    isInit = true

    setOrders(props.meals) 


//}
}, [props.meals])

//var didinit = false
useEffect(() => {
   // if (!didinit) {
       // didinit = true
    
        setHeightForSection(orders?.orderAndCount?.length * 20)
   // }


}, [orders])




return (

    
        
 <div>


<section className="left-box inline" style={{height: heightForSection}}>
     <h3 className="inline capitalize">{orders?.section}</h3>
     
        </section>  
        <section className="middle-box margin-bottom-20" >
        {orders?.orderAndCount?.map((newItem) => {
         
    return  <ul>
    <h4  className="inline" style={{height: heightForSection}}>{newItem.order}</h4>
    </ul>
})
}
</section>  

<section className="right-box  margin-bottom-20">
{orders?.orderAndCount?.map((newItem) => {
return  <ul>
<h4 className="inline" style={{height: heightForSection}}>{newItem.count}</h4>
</ul>

})
}

</section>
</div>

    )

}


export default OrdersMeals;