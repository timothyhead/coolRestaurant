import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Link, Routes,  Route, Outlet} from "react-router-dom";
import FinishedMenu from "./FinishedMenu";
import EditMenu from "./EditMenu";
import Orders from "./Orders";
import { logDOM } from "@testing-library/react";




 function Header(props) {

    const [sectionName, setSectionName] = useState("");
    const [mealName, setMealName] = useState("");
    const [bodyText, setBodyText] = useState("");
    const [detailText, setDetailText] = useState("");
    const [isClicked, setIsClicked] = useState(false);
    const [selectedFile, setSelectedFile] = useState(false);
    var [aMenuArray, setMenuArray] = useState([{
        mealName: "",
       bodyText: "",
       image: null,
       detailText: "",
       price: "",
        section: ""
                
             }]);
   const [amenu, setAMenu] = useState(false);
 

   

    useEffect( () => {
        aMenuArray = [{
            mealName: "",
            bodyText: "",
            image: "",
            detailText: "",
            price: "",
             section: ""
    }];
                    

        
    }, [props.data]);

    function setMenu(menu) {
        console.log(menu, "menu");

setIsClicked(false)
setIsClicked((state) => {

    return state;
  });

setMenuArray(menu);

    };
    
 

 
 

    return(
      
        <Router basename="timothyhead-coolRestaurantPublic"> 
    
   <div>
   <header>
       <h1>Cool Restaurant</h1>
       <nav>
    

<Link  className="block" to="/finishedMenu">Menu</Link>

<Link  to="/orders">Orders</Link>
<Link className="block" to="/to-restaurant">Create Menu</Link>
 
       </nav>
       <Outlet />
       </header>

    
       <Routes>
 
        <Route  path="/to-restaurant" element={<EditMenu set={setMenu}/>}/>
        <Route  path="/orders"  element={<Orders data={props.data} changeOrders={props.changeOrders} noChangeToEtag={props.noChangeToEtag}/> } />
        <Route   path="/finishedMenu" element={<FinishedMenu isRedBorder={false} menuArray={aMenuArray} add={isClicked}/>}/>
        
       </Routes>
       <footer>
    <h6>copyright Timothy head 2022</h6>
   </footer>
       </div>
     
        </Router>
      

    );


};
export default Header;