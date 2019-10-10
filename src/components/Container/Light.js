import React from "react";

import "./styles.css";

const Light = ({ isLightSwitchOn, switchType }) => {
  return switchType === "basic"
    ? BasicLight(isLightSwitchOn)
    : AdvanceLight(isLightSwitchOn);
};

const BasicLight = isLightSwitchOn => (
  <p className={isLightSwitchOn ? "lightOn" : "lightOff"}>Light</p>
);

const AdvanceLight = isLightSwitchOn => (
  <div
    className={`advance-light ${isLightSwitchOn ? "lightOn" : "lightOff"}`}
  ></div>
);

export default Light;
