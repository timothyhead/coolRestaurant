import { logDOM } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

function MenuList(props) {

  let didInit = false
  useEffect(() => {
 // if (!didInit) {
     // didInit = true
      props.menuItems.shift()
 // }
  }, [])

function handleClick(id) {



props.delete(id)

}
 
return (
    <div>
    <h4 className="orange corner menuSectionMargin centre-wide">{props.sectionName}</h4>
   
    <ul>
   {
 
  props.menuItems?.map( function(item, index) {

   return <li key={index}>
<MenuItem  id={index} menuItem={item} onDelete={handleClick}/>

 </li>
  




    

   })  


   
   }

   </ul> 
    </div>
  
)
};

export default MenuList;