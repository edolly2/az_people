import { AiOutlineHome } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";
import { FiBell } from "react-icons/fi";

const Header = (props) => {
  return (
    <header>
      <div className="header-icon-container">
        <div className="left-icons">
          <CgMenuGridR className="icons" />
        </div>
        <div>
          <AiOutlineHome
            className="icons"
            onClick={props.homeIconClick}
            style={props.homeIconStyle}
          />
          <FiBell
            className="icons"
            onClick={props.bellIconClick}
            style={props.bellIconStyle}
          />
          <FaRegUserCircle
            className="icons"
            onClick={props.userIconClick}
            style={props.userIconStyle}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
