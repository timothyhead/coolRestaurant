
import React, { useEffect, useState, useRef} from "react";
import MenuList from "./MenuList";



function FinishedMenu(props) {

    const [posts, setPosts] = useState(); 
    const [isLoadingFromBackUp, setsIsLoadingFromBackUp] = useState(false)
    const [appetisers, setAppetisers] = useState([{ menuItem:  [],
        detail: [], 
        sectionName: ""
        }]);
    const [saladsAndSoups, setSaladAndSoups] = useState([{ menuItem:  [],
        detail: [], 
        sectionName: ""
       }]);
    const [main, setMain] = useState([{ menuItem:  [],
        detail: [], 
        sectionName: ""
       }]);
    const [sides, setSides] = useState([{menuItem:  [],
        detail: [], 
        sectionName: ""
       }]);
    const [specalties, setSpecalties] = useState([{ menuItem:  [],
        detail: [], 
        sectionName: ""
        }]);
    const [aClass, setAClass]  = useState()
    var [menuArray, setMenuArray] = useState([{menuItem: [],
        detail: [],
        sectionName: "",
        isSet: false
        }]);
    var [isSet, setIset] = useState(false)
    const [menu, setMenu]  = useState([{
            mealName: "",
            bodyText: "",
            image: "",
            detailText: "",
             section: "",
             isSet: false     
                 }])
               
let didInit = false;

   useEffect(() => {
// if (didInit == false) {
    didInit = true
    fetch("https://historical-pretty-guava.glitch.me/sendMenuToRectApp")
    .then((res) => res.json())
    .then((data) => {
       setPosts(JSON.parse(data));
  setsIsLoadingFromBackUp(true)
      
    })
    .catch((err) => {
       console.log(err.message);
       console.log("error");
       
    });
        // ✅ Only runs once per app load
        setAClass("silk corner flex-container-vertical");
    menuArray = [{menuItem: [],
        detail: [],
        section: ""
        }]
      

      
       // }
  
   }, []);


 useEffect(() => {
   // if (didInit == false) {
       // didInit = true
    posts?.forEach((item) => {
        populateMenu(item)
       
    });
    setsIsLoadingFromBackUp(false)
//}
 }, [posts])

 useEffect(() =>{
   // if (didInit == false) {
      //  didInit = true
   setPosts(props.menuArray)
  //  }
 }, [props])


    
  
    function populateMenu(myProps) {
      
        switch (myProps.section) {
          
            case "Appetisers":
                console.log(myProps,"myProps");
                setAppetisers((preValue) => {
               
                    if (preValue.length !== 0) {
                        if (preValue[0].menuItem.length == 1 ) {
                        
                            return    [{
                         
                       menuItem:  [myProps.mealName, myProps.bodyText],
                       detail: [isLoadingFromBackUp ? myProps.image: myProps.image?.preview, myProps.detailText], section: "Appetisers"
                   
                                
                               
                            }]
                        } else {
                     
                            return    [...preValue,{
                                menuItem:  [myProps.mealName, myProps.bodyText],
                                detail: [isLoadingFromBackUp ? myProps.image: myProps.image?.preview, myProps.detailText],  section: "Appetisers"
                               
                                         
                                        
                                     }];
                        }
                      } else {
                            
                                
                        return [ {
                            menuItem:  [myProps.mealName, myProps.bodyText],
                            detail: [isLoadingFromBackUp ? myProps.image: myProps.image?.preview, myProps.detailText],  section: "Appetisers"
                           
                                     
                                    
                                 }]
                      }
                  
                });
            break;
            case "Salads and soups":
                setSaladAndSoups((preValue) => {
                    if (preValue.length !== 0) {
                        if (preValue[0].menuItem.length == 1 ) {
                            return    [{
                       menuItem:  [myProps.mealName, myProps.bodyText],
                       detail: [isLoadingFromBackUp ? myProps.image: myProps.image?.preview, myProps.detailText], section: "Salads and soups"
                   
                                
                               
                            }]
                        } else {
                          
                            return    [...preValue,{
                                menuItem:  [myProps.mealName, myProps.bodyText],
                                detail: [isLoadingFromBackUp ? myProps.image: myProps.image?.preview, myProps.detailText], section: "Salads and soups"
                               
                                         
                                        
                                     }];
                        }
                      } else {
                        return [ {
                            menuItem:  [myProps.mealName, myProps.bodyText],
                            detail: [isLoadingFromBackUp ? myProps.image: myProps.image?.preview, myProps.detailText], section: "Salads and soups"
                           
                                     
                                    
                                 }]
                      }
                });
            break;
            case "Main":
                setMain((preValue) => {
                    if (preValue.length !== 0) {
                        if (preValue[0].menuItem.length == 1 ) {
                            return    [{
                       menuItem:  [myProps.mealName, myProps.bodyText],
                       detail: [isLoadingFromBackUp ? myProps.image: myProps.image?.preview, myProps.detailText], section: "Main"
                   
                                
                               
                            }]
                        } else {
                          
                            return    [...preValue,{
                                menuItem:  [myProps.mealName, myProps.bodyText],
                                detail: [myProps.image?.preview, myProps.detailText], section: "Main"
                               
                                         
                                        
                                     }];
                        }
                      } else {
                        return [ {
                            menuItem:  [myProps.mealName, myProps.bodyText],
                            detail: [isLoadingFromBackUp ? myProps.image: myProps.image?.preview, myProps.detailText], section: "Main"
                           
                                     
                                    
                                 }]
                      }
                  
                });
            break;
            case "Sides":
                setSides((preValue) => {
                    if (preValue.length !== 0) {
                        if (preValue[0].menuItem.length == 1 ) {
                            return    [{
                       menuItem:  [myProps.mealName, myProps.bodyText],
                       detail: [isLoadingFromBackUp ? myProps.image: myProps.image?.preview, myProps.detailText], section: "Sides"
                   
                                
                               
                            }]
                        } else {
                          
                            return    [...preValue,{
                                menuItem:  [myProps.mealName, myProps.bodyText],
                                detail: [isLoadingFromBackUp ? myProps.image: myProps.image?.preview, myProps.detailText], section: "Sides"
                               
                                         
                                        
                                     }];
                        }
                      } else {
                        return [ {
                            menuItem:  [myProps.mealName, myProps.bodyText],
                            detail: [isLoadingFromBackUp ? myProps.image: myProps.image?.preview, myProps.detailText], section: "Sides"
                           
                                     
                                    
                                 }]
                      }
                });
            break;
            case "Specalties":
    
             setSpecalties((preValue) => {
              if (preValue.length !== 0) {
                if (preValue[0].menuItem.length == 1 ) {
                    return    [{
               menuItem:  [myProps.mealName, myProps.bodyText],
               detail: [isLoadingFromBackUp ? myProps.image: myProps.image?.preview, myProps.detailText], section: "Specalties"
           
                        
                       
                    }]
                } else {
                  
                    return    [...preValue,{
                        menuItem:  [myProps.mealName, myProps.bodyText],
                        detail: [isLoadingFromBackUp ? myProps.image: myProps.image?.preview, myProps.detailText], section: "Specalties"
                       
                                 
                                
                             }];
                }
              } else {
                return [ {
                    menuItem:  [myProps.mealName, myProps.bodyText],
                    detail: [isLoadingFromBackUp ? myProps.image: myProps.image?.preview, myProps.detailText], section: "Specalties"
                   
                             
                            
                         }]
              }
                }) ;
            break;
          }
         
     }
    

function deleteSpecalties(id) {
setSpecalties(preValue => {
  return preValue.filter((item, index) => {
  
  
    return index !== id;

   })
})
}
function deleteSides(id) {
    setSides(preValue => {
        return preValue.filter((item, index) => {
        
        
          return index !== id;
      
         })
      })
}
function deleteMain(id) {
    setMain(preValue => {
        return preValue.filter((item, index) => {
        
        
          return index !== id;
      
         })
      })
    }
function deleteSaladsAndSoups(id) {
    setSaladAndSoups(preValue => {
        return preValue.filter((item, index) => {
        
        
          return index !== id;
      
         })
      })
}
function deleteAppetisers(id) {
    setAppetisers(preValue => {
        return preValue.filter((item, index) => {
        
        
          return index !== id;
      
         })
      })
     
}



    return (
        <div className={aClass}>
<h1 className="corner green">Menu</h1>
<section className="">

<MenuList  className="menu-div" sectionName="Appetisers" menuItems={appetisers} delete={deleteAppetisers}/>
<MenuList sectionName="Salads and Soups" menuItems={saladsAndSoups} delete={deleteSaladsAndSoups}/>
<MenuList sectionName="Main" menuItems={main} delete={deleteMain}/>
<MenuList sectionName="Sides" menuItems={sides} delete={deleteSides}/>
<MenuList sectionName="Specalties"  menuItems={specalties} delete={deleteSpecalties}/>

</section>

        </div>
    )
};

export default FinishedMenu;