import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faAddressBook,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="nav-main">
      <header>
        <h1>CV</h1>
        <div className="underline"> </div>
      </header>
      <div className="nav-links">
        <ul>
          <li>
            <a href="#aboutMe">
              <FontAwesomeIcon className="icon" icon={faUserCircle} />
              <span> About me </span>
            </a>
          </li>
          <li>
            <a href="#services">
              <FontAwesomeIcon className="icon" icon={faListCheck} />
              <span> experience </span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <FontAwesomeIcon className="icon" icon={faAddressBook} />
              <span> contacts </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
