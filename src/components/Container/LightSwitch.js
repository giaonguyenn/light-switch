import React from "react";

const LightSwitch = ({ onChange, switchType }) => {
  return switchType === "basic"
    ? BasicLightSwitch(onChange)
    : AdvanceLightSwitch(onChange);
};

const BasicLightSwitch = onChange => (
  <input type="checkbox" onChange={() => onChange()} />
);

const AdvanceLightSwitch = onChange => (
  <label class="switch">
    <input type="checkbox" onChange={() => onChange()} />
    <span class="slider round"></span>
  </label>
);

export default LightSwitch;
