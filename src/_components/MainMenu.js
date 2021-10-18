import { BsCaretDownFill } from "react-icons/bs";
import { useState } from "react";

const MainMenu = () => {
  const [meList, setMeList] = useState(false);
  const [toolList, setToolList] = useState(false);
  return (
    <div className="main-menu-container">
      <ul>
        <li>
          <li>
            <h2>DASHBOARD</h2>
          </li>
          <li>
            <h3 onClick={setMeList(!meList)}>
              ME
              <BsCaretDownFill className="drop-icons" />
            </h3>
            <hr />
          </li>
          <div style={{ display: meList ? "block" : "none" }}>
            <li>Directory</li>
            <li>Personal Information</li>
            <li>Languages and Certifications</li>
            <li>Schedule Absences</li>
            <li>Direct Deposit</li>
            <li>e-Charitable</li>
            <li>View Paycheck/W2</li>
            <li>My Benefits</li>
            <li>My 401k</li>
            <li>Employee Stock Purchase</li>
            <li>My MVR</li>
            <li>MVR DOC Alerts</li>
          </div>
        </li>
        <li>
          <li>
            <h3 onClick={setToolList(!toolList)}>
              TOOLS
              <BsCaretDownFill className="drop-icons" />
            </h3>
            <hr />
          </li>
          <div style={{ display: toolList ? "block" : "none" }}>
            <li>Set Preferences</li>
            <li>Work List</li>
            <li>Scheduled Processes</li>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MainMenu;
