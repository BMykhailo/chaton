import React from "react";
import { useState } from "react";
import Smail from "./Smail"
import Groust from "./Groust";
import Heirt from "./Heirt";
import './Vot.css';
import Button from "./Button";



function Vot(props) {
  const [tor, setTor] = useState(<Smail/>);
  const [value, setValue] = useState();
  const [message, setMessage] = useState();

 function addNewPost () {
  
  setValue(message);
 
 }

  function plus() {
    setTor(<Heirt src="https://www.pngmart.com/files/19/Smile-Emoticon-PNG-HD.png" />
     
    );
  }
  function moin() {
    setTor(
      <Groust src="https://cdn-icons-png.flaticon.com/512/356/356671.png" /> 
    );
  }
<Button mes/>
 return (
   <div className="tor">
     <h2>{value}</h2>

     <img alt="" src={props.image} />
     <p>{tor}</p>
     
       <input
         size={23}
         placeholder="Donnez un nom au chaton"
         value={message}
         type="text"
         onChange={(Event) => setMessage(Event.target.value)}
       />

       <br></br>
       <button className="bt" onClick={addNewPost}>
         Valider le Nom
       </button>
       <br></br>
     
     <button onClick={plus}>
       <img
         className="top"
         alt="r"
         src="https://cdn-icons-png.flaticon.com/512/20/20664.png"
       />
     </button>
     <button onClick={moin}>
       <img
         className="top"
         alt="r"
         src="https://cdn-icons-png.flaticon.com/512/219/219682.png"
       />
     </button>
     
   </div>
 );

    

};
export default Vot;  