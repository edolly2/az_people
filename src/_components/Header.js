import { AiOutlineHome } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";
import { FiBell } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      <div className="header-icon-container">
        <div>
          <CgMenuGridR className="icons" />
        </div>
        <div>
          <AiOutlineHome className="icons" />
          <FiBell className="icons" />
          <FaRegUserCircle className="icons" />
        </div>
      </div>
    </header>
  );
};

export default Header;
