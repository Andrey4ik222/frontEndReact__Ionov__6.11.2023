import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/" className="main-link">
          Home
        </Link>
        <Link to="/users" className="main-link">
          Users
        </Link>
      </nav>
    </header>
  );
};

export default Header;
