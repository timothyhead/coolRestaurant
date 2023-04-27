import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Link, Routes,  Route, Outlet} from "react-router-dom";
import FinishedMenu from "./FinishedMenu";
import EditMenu from "./EditMenu";
import Orders from "./Orders";
import Admin from "./Admin";





 function Header(props) {

  
    const [isClicked, setIsClicked] = useState(false);

    var [aMenuArray, setMenuArray] = useState([]);
    const [isLogged, setIsLogged] = useState(false);
  
useEffect(() => {
isLoggedin(props.isLoggedin)
}, [props.isLoggedin])

    function setMenu(menu) {
        console.log(menu, "menu");

setIsClicked(false)
setIsClicked((state) => {

    return state;
  });

setMenuArray(menu);

    };
    
 function isLoggedin(logged) {
setIsLogged(logged)
 }

 
 

    return(
      
        <Router basename="/"> 
    
   <div>
   <header>
       <h1>Cool Restaurant</h1>
       <nav>
    
<Link className="block" to="/Admin">Admin</Link>
<Link  className="block" to="/FinishedMenu">Menu</Link>

<Link  to="/Orders">Orders</Link>
{isLogged === true &&  <Link className="block" to="/EditMenu">Create Menu</Link>}
 
       </nav>
       <Outlet />
       </header>

    
       <Routes>
        <Route path="/Admin" element={<Admin isLoggedin={isLoggedin}/>}/>
       <Route  path="/EditMenu" element={<EditMenu set={setMenu}/>}/>
        <Route  path="/Orders"  element={<Orders/> } />
        <Route   path="/FinishedMenu" element={<FinishedMenu isRedBorder={false} menuArray={aMenuArray} add={isClicked}/>}/>
        
       </Routes>
       <footer>
    <h6>copyright Timothy head 2022</h6>
   </footer>
       </div>
     
        </Router>
      

    );


};
export default Header;