import React, { useEffect, useState } from "react";
import Menu from "./Menu";


function EditMenu(props) {

    const [sectionName, setSectionName] = useState("");
    const [mealName, setMealName] = useState("");
    const [bodyText, setBodyText] = useState("");
    const [detailText, setDetailText] = useState("");
    const [price, setPrice] = useState("")
     var [isClicked, setIsClicked] = useState(false);
     const [selectedFile, setSelectedFile] = useState();
     const data = ""
   
     
   

const handleChange = event => {
    setSectionName(event.target.value)
    setSectionName((state) => {

     
      return state;
    });
  
}

useEffect(() => {
  setSectionName("Appetisers")
 setMealName("")
 setBodyText("")
 setDetailText("")
 setSelectedFile()
 setIsClicked(false)
  }, [])

  function handleClick() {
  setIsClicked(isClicked = !isClicked)

  setIsClicked((state) => {

    return state;
  });
 

  }

  

function changeHandler(event){
  event.preventDefault()
  if (event.target.files.length !== 0)  {
//   const reader = new FileReader();
//   reader.onload = (e) => {
// data = e.result
// console.log(data);
//   }
  
  
  




 getBase64(event.target.files[0])

}






}
function getBase64(file) {
  

  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    let result = reader.result
    console.log(reader.result);
    const img = {
      preview: URL.createObjectURL(file),
 result
    }
    setSelectedFile(img)
  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
}

function setMenu(menuArray) {
 
    props.set(menuArray)
}


   


    return (
      <div className="to-retaurant-app-div">
        <div className="centre border-red corner form-div silk"> 
        <div className="form-inner-div orange inline corner" >
<h1 className="green corner centre-text">To iPhone App</h1>






<form>

      <label  className="form-input-width" >Enter Section Name:
       
        <select  className="form-input-width margin-left-5px" value={sectionName} onChange={handleChange}>
        <option  value="Appetisers">Appetisers</option>
        <option   value="Salads and soups">Salads and soups</option>
        <option  value="Main">Main</option>
        <option   value="Sides">Sides</option>
        <option value="Specalties">Specalties</option>
      </select>
      </label>
      <label className="block">Enter Meal Name:
        <input className="form-input-width margin-left-25px"
          type="text" 
          value={mealName}
          onChange={(e) => setMealName(e.target.value)}
        />
      </label>
      <label className="block">Enter Body Text:
        <textarea className="form-input-width margin-left-34px"
          type="text" 
          value={bodyText}
          onChange={(e) => setBodyText(e.target.value)}
        />
      </label>
      <label className="block">Enter Detail Text:
        <textarea className="form-input-width margin-left-30px"
          type="text" 
          value={detailText}
          onChange={(e) => setDetailText(e.target.value)}
        />
      </label>
      <label className="block"> Enter price:
      <input className="form-input-width margin-left-25px"
          type="number" 
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
  <label>Select image file
  <input  className="margin-left" type="file" name="file" onChange={changeHandler} />
  </label>
 
    </form>
    <div>
    {selectedFile ? <img class="image100 centre" src={selectedFile.preview} alt="image"></img>: null }
    </div>
    </div>

    <div className="instruction-box-spacer-div corner">

    </div>
     
      <div className="add-button-div ">
<button onClick={() => {
handleClick()
}}>ADD</button>
      </div>
    <div className="instruction-box-div green corner">
<h5>Fill out the form to update the phone app. When done click to set the menu at the bottom</h5>
</div>



 
        </div>
        <div className="to-retaurant-app-menu-div">
        <Menu isRedBorder={true} mealName={mealName} bodyText={bodyText} detailText={detailText} image={selectedFile} price={Number(price)} section={sectionName} add={isClicked}  set={setMenu}/>
        </div>
        <div>
</div>
    
        </div>
    )
};
export default EditMenu;