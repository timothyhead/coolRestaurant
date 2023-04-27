
import React, { useEffect, useState } from "react";
import MenuList from "./MenuList";



function FinishedMenu(props) {

    const [posts, setPosts] = useState(); 
    const [isLoadingFromBackUp, setsIsLoadingFromBackUp] = useState(true)
    const [appetisers, setAppetisers] = useState([]);
    const [saladsAndSoups, setSaladAndSoups] = useState([]);
    const [main, setMain] = useState([]);
    const [sides, setSides] = useState([]);
    const [specalties, setSpecalties] = useState([]);
    const [aClass, setAClass]  = useState()
    const isFinishedMenu = true
   

               

   useEffect(() => {

    fetch("https://historical-pretty-guava.glitch.me/sendMenuToRectApp/")
    .then((res) => res.json())
    .then((data) => {
       setPosts(JSON.parse(data));
  setsIsLoadingFromBackUp(false)
      
    })
    .catch((err) => {
       console.log(err.message);
       console.log("error");
       
    });
        // ✅ Only runs once per app load
        setAClass("silk corner flex-container-vertical");
   
  
   }, []);

 useEffect(() =>{
    if (isLoadingFromBackUp === false) {
        setPosts(props.menuArray)
    }
 
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props])

   useEffect(() => {
 
    posts?.forEach((item) => {
        populateMenu(item)
       
    });
    setsIsLoadingFromBackUp(false)

 }, [posts])
 function populateMenu(props) {
        
    switch (props.section) {
      
        case "Appetisers":
            setAppetisers((preValue) => {
           
                return [...preValue, {
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview, props.detailText], price: props.price,  section: "Appetisers"
                }]
              
            });
        break;
        case "Salads and soups":
            setSaladAndSoups((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview, props.detailText], price: props.price , section: "Salads and soups"
                   
                             
                            
                         }];
                  
            });
        break;
        case "Main":
            setMain((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview, props.detailText], price: props.price , section: "Main"
                   
                             
                            
                         }];
              
            });
        break;
        case "Sides":
            setSides((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview, props.detailText], price: props.price , section: "Sides"
                   
                             
                            
                         }];
            });
        break;
        case "Specalties":

         setSpecalties((preValue) => {
            return    [...preValue,{
                menuItem:  [props.mealName, props.bodyText],
                detail: [props.image?.preview, props.detailText], price: props.price , section: "Specalties"
               
                         
                        
                     }];
            }) ;
        break;
        default:
            break
      }
    }
    



    return (
        <div className={aClass}>
<h1 className="corner green">Menu</h1>
<section className="">

<MenuList  className="menu-div" sectionName="Appetisers" menuItems={appetisers} finishedMenu={isFinishedMenu}/>
<MenuList sectionName="Salads and Soups" menuItems={saladsAndSoups} finishedMenu={isFinishedMenu}/>
<MenuList sectionName="Main" menuItems={main} finishedMenu={isFinishedMenu}/>
<MenuList sectionName="Sides" menuItems={sides} finishedMenu={isFinishedMenu}/>
<MenuList sectionName="Specalties"  menuItems={specalties} finishedMenu={isFinishedMenu}/>

</section>

        </div>
    )
};

export default FinishedMenu;
