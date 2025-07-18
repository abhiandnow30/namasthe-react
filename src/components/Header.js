import { useState } from "react";
import {reslog_URL} from "../service/constants";
import {log_URL} from "../service/constants";

const Header = () => {
   const [btnNameReact,setbtnNameReact]= useState("Login")
return(
  <div className="header">
    <div className="logo-container">
      <img className="logo" src={log_URL} />
    </div>
  <div className="nav-items">
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Cart</li>
      <button className="login" 
          onClick={() => {btnNameReact === "Login" ? setbtnNameReact("Logout"): setbtnNameReact("Login");
          //  console.log(btnNameReact);
         }}>{btnNameReact}</button>
    </ul>
  </div>
  </div>
)
}
export default Header;