import React, { useState, useEffect } from "react";
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
  height: 25vmin;
  pointer-events: none;
  animation: ${pulse} infinite ${props => props.speed}s linear;
`;

const Button = styled.button`
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default function App(props) {
  const [speed, setSpeed] = useState(20);
  const [count, setCount] = useState(1);

  const Logos = [];
  for (let i = 0; i < count; i++) {
    Logos.push(<AppLogo speed={speed}></AppLogo>);
  }

  useEffect(() => {
    document.addEventListener("APP1:addLogo", e => {
      setCount(e.detail.value);
    });
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className="Logos">{Logos}</div>
        <div className="AppDetails">
          <Button onClick={() => setSpeed(speed + 5)}>-</Button>
          <p>App 2</p>
          <Button
            primary
            onClick={() => setSpeed(speed - 5 < 0.5 ? 0.5 : speed - 5)}
          >
            +
          </Button>
        </div>
      </header>
    </div>
  );
}
