
import React from "react";
import MenuItem from "./MenuItem";

function MenuList(props) {

//   useEffect(() => {
//     console.log("menuitems", props.menuItems)
//      // props.menuItems.shift()
//  ;
//   }, [ props.menuItems])

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
<MenuItem  id={index} menuItem={item} onDelete={handleClick} finishedMenu={props.finishedMenu}/>

 </li>
  




    

   })  


   
   }

   </ul> 
    </div>
  
)
};

export default MenuList;