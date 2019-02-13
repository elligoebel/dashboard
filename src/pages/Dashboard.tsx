import React from "react";
import styled from "styled-components";

const Widget = styled.div`
  height: 100%;
  width: 100%;
  background-color: rebeccapurple;
  border: 1px solid green;
  color: white;
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
`;
/**
 * height: ${props =>
    props.heights
      ? "calc(100% - " + (20 + (props.heights.length - 1) * 10) + "px);"
      : "100%;"};
 */
const Column = styled.div<{ heights?: number[]; width?: number }>`
  display: flex;
  flex-direction: column;
  width: ${props => (props.width ? props.width + "%;" : "100%;")};

  margin: 10px 0;
  justify-content: space-between;
  ${props =>
    props.heights
      ? props.heights.map((height, index) => {
          return `
      ${Widget}:nth-child(${index + 1}){
        height: ${height}%;
      }
    `;
        })
      : ""}
  ${Widget}:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: "scroll";
  ${Column} {
    margin-right: 10px;
  }
  ${Column}:first-child {
    margin-left: 10px;
  }
`;

interface IProps {}
interface IState {
  windowSize: { width: number; height: number };
}
export class Dashboard extends React.PureComponent<IProps, IState> {
  mounted: boolean = false;
  state = {
    windowSize: { width: 0, height: 0 }
  };
  componentDidMount() {
    this.mounted = true;
    window.addEventListener("resize", this.onWindowResize);
    this.onWindowResize();
  }

  componentWillUnmount() {
    this.mounted = false;
    window.removeEventListener("resize", this.onWindowResize);
  }

  onWindowResize = () => {
    // if (!this.mounted) {return;}
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.setState({
      windowSize: {
        width,
        height
      }
    });
  };
  render() {
    console.log(this.state.windowSize);
    if (this.state.windowSize.width > 1280) {
      return (
        <Container>
          <Column width={25} heights={[15, 25, 60]}>
            <Widget>Box 1A</Widget>
            <Widget>Box 2A</Widget>
            <Widget>Box 3A</Widget>
          </Column>
          <Column width={50} heights={[50, 10, 40]}>
            <Widget>Box 1B</Widget>
            <Widget>Box 2B</Widget>
            <Widget>Box 3B</Widget>
          </Column>
          <Column width={25} heights={[30, 25, 45]}>
            <Widget>Box 1C</Widget>
            <Widget>Box 2C</Widget>
            <Widget>Box 3C</Widget>
          </Column>
        </Container>
      );
    } else if (this.state.windowSize.width > 1000) {
      return (
        <Container>
          <Container>
            <Column width={25} heights={[20, 80]}>
              <Widget>Box 1A</Widget>
              <Widget>Box 2A</Widget>
            </Column>
            <Column width={75} heights={[50, 10, 40]}>
              <Widget>Box 1B</Widget>
              <Widget>Box 2B</Widget>
              <Widget>Box 3B</Widget>
            </Column>
          </Container>
          <Container>
            <Column width={100} heights={[30, 25, 45]}>
              <Widget>Box 1C</Widget>
              <Widget>Box 2C</Widget>
              <Widget>Box 3C</Widget>
            </Column>
          </Container>
        </Container>
      );
    } else {
      return (
        <Container>
          <Column width={25} heights={[15, 25, 60]}>
            <Widget>Box 1A</Widget>
            <Widget>Box 2A</Widget>
            <Widget>Box 3A</Widget>
          </Column>
          <Column width={50} heights={[50, 10, 40]}>
            <Widget>Box 1B</Widget>
            <Widget>Box 2B</Widget>
            <Widget>Box 3B</Widget>
          </Column>
          <Column width={25} heights={[30, 25, 45]}>
            <Widget>Box 1C</Widget>
            <Widget>Box 2C</Widget>
            <Widget>Box 3C</Widget>
          </Column>
        </Container>
      );
    }
  }
}
