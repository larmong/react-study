import { Component } from "react";
import Router from "next/router";

interface IPropsState {
  count: number;
}

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("그려지고 나서 실행!");
  }

  componentDidUpdate() {
    console.log("변경되고 나서 실행!");
  }

  componentWillUnmount() {
    console.log("사라질 때 실행!");
  }

  onClickCountUp = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  onClickMove = () => {
    void Router.push("/");
    this.setState((prevState: IPropsState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <>
        <div>리액트에서 제공해주는 기능입니다.</div>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 올리기!</button>
        <button onClick={this.onClickMove}>나가기!!!</button>
      </>
    );
  }
}
