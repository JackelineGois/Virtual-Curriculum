import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";
import "./style.css";

const Contact = (props) => {
  return (
    <div>
      <FontAwesomeIcon className="blue-color general-icon" icon={props.icon} />
      <h4>{props.text} </h4>
    </div>
  );
  console.log(props);
};

export default Contact;
