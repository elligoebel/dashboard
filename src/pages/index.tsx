import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";

import { Dashboard } from "./Dashboard";

const GlobalStyles = createGlobalStyle`
  body {
    margin: unset;
    font-family: Arial, Helvetica, sans-serif;
  }
  &  * {
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;
type State = {
  open: boolean;
};

export class Index extends React.Component {
  state = {
    open: false
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleClick = () => {
    this.setState({
      open: true
    });
  };

  render() {
    return (
      <Container>
        <Dashboard />
        <GlobalStyles />
      </Container>
    );
  }
}
