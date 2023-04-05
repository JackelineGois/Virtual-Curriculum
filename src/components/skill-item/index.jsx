import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Skill = (props) => {
  return (
    <div className="icons-text">
      <FontAwesomeIcon className="blue-color general-icon" icon={faCheck} />
      <h4>{props.text}</h4>
    </div>
  );
};

export default Skill;
