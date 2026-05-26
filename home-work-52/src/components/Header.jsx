import { NavLink } from "react-router";
import { FaTruck } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <FaTruck /> TruckLoads
      </div>
      <nav>
        <NavLink to="/">Loads</NavLink>
        <NavLink to="/add">Add Load</NavLink>
      </nav>
    </header>
  );
}

export default Header;
