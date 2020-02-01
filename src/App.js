import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img.attrs({
  src: logo
})`
  height: 30vmin;
  pointer-events: none;
  animation: ${pulse} infinite 10s linear;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfLogos: 1
    };
  }
  render() {
    const Logos = [];
    for (let i = 0; i < this.state.numberOfLogos; i++) {
      Logos.push(<AppLogo></AppLogo>);
    }
    return (
      <div className="App">
        <header className="App-header">
          <div className="Logos">{Logos}</div>
          <p>App 2</p>
        </header>
      </div>
    );
  }
}

export default App;
