
import { logDOM } from "@testing-library/react";
import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";

function MenuItem(props) {
    console.log(props.detailArray[1], "sdfghjkle;rtyujhgfdszxckvbln;bvc");
const menuItems = props.menuItem;
const menuItemArray = menuItems["menuItem"] || [];

const MealName = menuItemArray[0];
const BodyText = menuItemArray[1]
const detailArray = menuItems["detail"] || [];
const image = detailArray[0];
const price = detailArray[1];

const id = menuItems.id


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
   <h2>Hello</h2>
   <img className="image50" src={image}></img>
   </details>
   <button className="inline" onClick={handleClick}>
    Delete
   </button>
     
        </div>
    )
}

export default MenuItem;