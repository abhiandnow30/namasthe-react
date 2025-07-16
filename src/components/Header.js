import {reslog_URL} from "../service/constants";
import {log_URL} from "../service/constants";

const Header = () => {
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
    </ul>
  </div>
  </div>
)
}
export default Header;