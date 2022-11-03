import { useState } from 'react';
import './Header.css';

function Header(){

  // Créer une variable d'etat email
  const[mail, setMail] = useState("")

 

  // Créer une variable d'etat pour password
  const[password, setPassword] = useState("")

  async function submit(){
    const options = {
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify({
    email: mail,
    password: password
    })
    };

    const response = await fetch("https://social-network-api.osc-fr1.scalingo.io/demo/login", options);
    const data = await response.json();
    
  }

  // Ecoute du changement de mail

  // Ecoute du changement de password





  return (
    <header>
      <img
        className="cat"
        alt="cat"
        src="https://i.pinimg.com/originals/0a/8d/77/0a8d779ffa83e45877df56a7ad06735e.png"
      />
      <img
        className="cat1"
        alt="cat"
        src="https://i.pinimg.com/originals/0a/8d/77/0a8d779ffa83e45877df56a7ad06735e.png"
      />
      <img
        className="cat3"
        alt="cat"
        src="https://avatanplus.com/files/resources/original/586537443c2ed1594b5fe297.png"
      />
      <img
        className="cat4"
        alt="cat"
        src="https://avatanplus.com/files/resources/original/586537443c2ed1594b5fe297.png"
      />
      <img
        className="cat5"
        alt="cat"
        src="https://avatanplus.com/files/resources/original/586537443c2ed1594b5fe297.png"
      />
      <img
        className="cat6"
        alt="cat"
        src="https://avatanplus.com/files/resources/original/586537443c2ed1594b5fe297.png"
      />

      <h1>Maison de Chatons</h1>

      <form className="cont">
        <div className="mail">
          <label for="input1">Email : </label>
          <input
            type="email"
            className="input1"
            placeholder="bezouglovmykhailo@gmail.com"
            
          />
        </div>

        <div className="pass">
          <label for="input2">Password : </label>
          <input
            type="password"
            className="input2"
            placeholder="*************"
            
          />
        </div>

        <div className="but">
          <input
            type="submit"
            className="button"
            value="Se connecter"
            onClick={submit}
          />
        </div>
      </form>
    </header>
  );
}
export default Header;


