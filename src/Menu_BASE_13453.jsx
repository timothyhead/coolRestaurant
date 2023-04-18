
import React, { useEffect, useRef, useState} from "react";
import MenuList from "./MenuList";
import axios from 'axios';




function Menu(props) {

    const [appetisers, setAppetisers] = useState([{ menuItem:  [],
        detail: [], 
        sectionName: "",
        image: String
        }]);
    const [saladsAndSoups, setSaladAndSoups] = useState([{ menuItem:  [],
        detail: [], 
        sectionName: "",
        image: String
       }]);
    const [main, setMain] = useState([{ menuItem:  [],
        detail: [], 
        sectionName: "",
        image:  String
       }]);
    const [sides, setSides] = useState([{menuItem:  [],
        detail: [], 
        sectionName: "",
        image:  String
       }]);
    const [specalties, setSpecalties] = useState([{ menuItem:  [],
        detail: [], 
        sectionName: "",
        image:  String
        }]);
    const [aClass, setAClass]  = useState()
    var [menuArray, setMenuArray] = useState([{menuItem: [],
        detail: [],
        sectionName: "",
        isSet: false
        }]);
    var [isSet, setIset] = useState(false);
    const [menu, setMenu]  = useState([]);
    const [images , setImages]  = useState([]);
    const [allData, setAllData] = useState({});
    const [formData, setFormData] = useState();
    const [newMenu, setNewMenu] = useState([]);
  
const ref = useRef(null);



useEffect(() => {
    setAllData({"menu": menu, "images": images})
}, [images])







   useEffect(() => {

   setAClass("silk corner flex-container-vertical border-red menu-div-for-to-retaurant-app-menu") 

        
if (props.mealName != "") {
    populateMenu(props) 
    console.log("Hello populate menu");
}
       
     
    
        
    
    
  
   }, [props.add])

  
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
          }
    
          setMenu(preValue => {
            return [...preValue, {mealName: props.mealName, bodyText: props.bodyText, detailText: props.detailText, price: props.price, section: props.section, image:  props.image?.result}]
            
         });
       
       
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
    console.log("delete pressed");
    setAppetisers(preValue => {
        return preValue.filter((item, index) => {
        
        
          return index !== id;
      
         })
      })
      resetOutGoingMenuArrayToBackend()
}

 async function handleSet(event) {
  console.log("Set");

    props.set(menu) 
setAppetisers([]);
setSaladAndSoups([]);
setMain([]);
setSides([]);
    setSpecalties([]);
    

    const anotherResponse = await fetch("https://historical-pretty-guava.glitch.me/recievedMenu", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify({"menu" : menu}),
       

    })
   setMenu([])
  
 

}
function resetOutGoingMenuArrayToBackend() {
    console.log("Here");
    setMenu([]);
    setAppetisers((state) => {
        console.log(state);
        state.forEach((item) => {
            setMenu(preValue => {
                return [{mealName: item.menuItem[0], bodyText:  item.menuItem[1],image: item.detail[0], detailText: item.detail[1], price: item.price,section: item.section}]
                
             });
        })
        return state
    })
    setSaladAndSoups((state) => {
        console.log(state);
        state.forEach((item) => {
            setMenu(preValue => {
                return [{mealName: item.menuItem[0], bodyText:  item.menuItem[1],image: item.detail[0], detailText: item.detail[1], price: item.price,section: item.section}]
                
             });
        })
        return state
    })
    setMain((state) => {
        console.log(state);
        state.forEach((item) => {
            setMenu(preValue => {
                return [{mealName: item.menuItem[0], bodyText:  item.menuItem[1],image: item.detail[0], detailText: item.detail[1], price: item.price,section: item.section}]
                
             });
        })
        return state
    })
    setSides((state) => {
        console.log(state);
        state.forEach((item) => {
            setMenu(preValue => {
                return [{mealName: item.menuItem[0], bodyText:  item.menuItem[1],image: item.detail[0], detailText: item.detail[1], price: item.price,section: item.section}]
                
             });
        })
        return state
    })
    setSpecalties((state) => {
        console.log(state);
        state.forEach((item) => {
            setMenu(preValue => {
                return [{mealName: item.menuItem[0], bodyText:  item.menuItem[1],image: item.detail[0], detailText: item.detail[1], price: item.price,section: item.section}]
                
             });
        })
        return state
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

{props.isRedBorder ? 

<button ref={ref} id="set-menu-button" onClick={handleSet}>Set Menu</button> : null}

     
</section>

        </div>
    )
};

export default Menu;