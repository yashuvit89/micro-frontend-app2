import React, { useState } from "react";
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
  animation: ${pulse} infinite ${props => props.count}s linear;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default function App(props) {
  // let { path, url } = useRouteMatch();
  const [count, setCount] = useState(20);

  const Logos = [];
  for (let i = 0; i < 2; i++) {
    Logos.push(<AppLogo count={count}></AppLogo>);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="Logos">{Logos}</div>
        <div className="AppDetails">
          <Button onClick={() => setCount(count + 5)}>-</Button>
          <p>App 2</p>
          <Button
            primary
            onClick={() => setCount(count - 5 < 0.5 ? 0.5 : count - 5)}
          >
            +
          </Button>
        </div>
      </header>
    </div>
  );
}
