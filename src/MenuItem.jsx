


import React from "react";

function MenuItem(props) {
    
const menuItems = props.menuItem;
const menuItemArray = menuItems["menuItem"] || [];

const MealName = menuItemArray[0];
const BodyText = menuItemArray[1]
const detailArray = menuItems["detail"] || [];
const image = detailArray[0];
const price = detailArray[1];

function handleClick() {
    props.onDelete(props.id)
    
}

    return(
        <div >
     
        <div  className="margin-bottom-20">
   <h3 className="inline">{MealName}</h3>
   <p  className="inline margin-left-30px">{BodyText}</p>
   <p  className="inline margin-left-30px">{price}</p>
   </div>
   <details className="centre margin-bottom-30 inline">

   <img className="image50" src={image} alt=""></img>
   </details>
   <button className="inline" onClick={handleClick}>
    Delete
   </button>
     
        </div>
    )
}

export default MenuItem;