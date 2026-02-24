import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1 className="header__h1">Little Taco Shop</h1>
      <nav className="header__nav">
        <ul className="header__ul">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "active-link" : ""}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/hours" 
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              Hours
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/order" 
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              Order Online
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;