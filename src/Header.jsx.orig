import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Link, Routes,  Route, Outlet} from "react-router-dom";
import FinishedMenu from "./FinishedMenu";
import EditMenu from "./EditMenu";
import Orders from "./Orders";





 function Header(props) {

  
    const [isClicked, setIsClicked] = useState(false);

    var [aMenuArray, setMenuArray] = useState([{
        mealName: "",
       bodyText: "",
       image: null,
       detailText: "",
       price: "",
        section: ""
                
             }]);
  
 

   

    // useEffect( () => {
    //     aMenuArray = [{
    //         mealName: "",
    //         bodyText: "",
    //         image: "",
    //         detailText: "",
    //         price: "",
    //          section: ""
    // }];
                    

        
    // }, [props.data]);

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

<Link  to="/Orders">Orders</Link>
<Link className="block" to="/to-restaurant">Create Menu</Link>
 
       </nav>
       <Outlet />
       </header>

    
       <Routes>
 
<<<<<<< HEAD
        <Route  path="/to-restaurant" element={<CreateMenu set={setMenu}/>}/>
        <Route  path="/Orders"  element={<Orders data={props.data} changeOrders={props.changeOrders} noChangeToEtag={props.noChangeToEtag}/> } />
=======
        <Route  path="/to-restaurant" element={<EditMenu set={setMenu}/>}/>
        <Route  path="/orders"  element={<Orders data={props.data} changeOrders={props.changeOrders} noChangeToEtag={props.noChangeToEtag}/> } />
>>>>>>> temp
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