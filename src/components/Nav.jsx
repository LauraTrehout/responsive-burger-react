import { useState } from "react";
import "./Nav.css";

const Nav = () => {
const [showLinks, setShowLinks] = useState(false)

const handleShowLinks = () => {
  setShowLinks(!showLinks)
}

  return (
    <div className={`navbar ${showLinks ? `show-nav` : `hide-nav`}`} >
      <div className="navbar-logo">Logo</div>
      <ul className="nav-list">
        <li className="nav-list-item">
          <a href="#" className="nav-link">
            Accueil
          </a>
        </li>
        <li className="nav-list-item">
          <a href="#" className="nav-link">
            Portfolio
          </a>
        </li>
        <li className="nav-list-item">
          <a href="#" className="nav-link">
            Services
          </a>
        </li>
        <li className="nav-list-item">
          <a href="#" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
       <button className='nav-burger' onClick={handleShowLinks}>
          <span className='burger-bar'></span>
      </button>
    </div>
  );
};

export default Nav;
