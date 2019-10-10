import React, { Component } from "react";
import LightSwitch from "./LightSwitch";
import Light from "./Light";

class Container extends Component {
  constructor() {
    super();

    this.state = {
      isBasicSwitchOn: false,
      isAdvanceSwitchOn: false
    };
  }

  handleOnChange = (switchType, switchMode) => {
    return switchType === "basic"
      ? this.setState({
          isBasicSwitchOn: !switchMode
        })
      : this.setState({
          isAdvanceSwitchOn: !switchMode
        });
  };

  render() {
    const { isBasicSwitchOn, isAdvanceSwitchOn } = this.state;

    return (
      <div className="switch-container">
        <div className="basic-switch">
          <h2>Basic Light Switch</h2>
          <LightSwitch
            onChange={() => {
              this.handleOnChange("basic", isBasicSwitchOn);
            }}
            switchType={"basic"}
          />
          <Light isLightSwitchOn={isBasicSwitchOn} switchType={"basic"} />
        </div>
        <div className="advance-switch">
          <h2>More Advance Light Switch</h2>
          <LightSwitch
            onChange={() => {
              this.handleOnChange("advance", isAdvanceSwitchOn);
            }}
            switchType={"advance"}
          />
          <Light isLightSwitchOn={isAdvanceSwitchOn} switchType={"advance"} />
        </div>
      </div>
    );
  }
}

export default Container;
