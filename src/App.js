import "./App.css";

import React, { useState } from "react";

import Header from "./_components/Header";
import MainMenu from "./_components/MainMenu";
import ProfileMenu from "./_components/ProfileMenu";

function App() {
  const [profileMenuActive, setProfileMenuActive] = useState(false);
  const [bellMenuActive, setBellMenuActive] = useState(false);
  const bellIconClickHandler = () => {
    setBellMenuActive(!bellMenuActive);
    if (profileMenuActive) {
      setProfileMenuActive(false);
    }
  };
  const userIconClickHandler = () => {
    setProfileMenuActive(!profileMenuActive);
    if (bellMenuActive) {
      setBellMenuActive(false);
    }
  };
  return (
    <div className="App">
      <Header
        userIconClick={userIconClickHandler}
        userIconStyle={{
          backgroundColor: profileMenuActive ? "green" : "transparent",
          transform: profileMenuActive ? "scale(1.1, 1.1)" : "",
          color: profileMenuActive ? "red" : "blue",
        }}
        bellIconClick={bellIconClickHandler}
        bellIconStyle={{
          backgroundColor: bellMenuActive ? "green" : "transparent",
          transform: bellMenuActive ? "scale(1.1, 1.1)" : "",
          color: bellMenuActive ? "red" : "blue",
        }}
      />
      <div style={{ display: profileMenuActive ? "block" : "none" }}>
        <ProfileMenu />
      </div>
      <MainMenu />
    </div>
  );
}

export default App;
