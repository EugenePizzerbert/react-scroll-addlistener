import * as React from "react";

export default class App extends React.Component {
  state = { active: 0 };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {


    const { pageYOffset } = window;
    const { active } = this.state;

    console.log('event', event)
    console.log('pageYOffset', pageYOffset)

    if (pageYOffset >= 500 && active === 0) {
      this.setState({ active: 1 });
    } else if (pageYOffset < 500 && active === 1) {
      this.setState({ active: 0 });
    }
  };

  render() {
    const { active } = this.state;
    return (
      <div style={{height:2000}}>
        <h1> {active} </h1>
        <h1> {active} </h1>
        <h1> {active} </h1>
        <h1> {active} </h1>
        <h1> {active} </h1>
        <h1> {active} </h1>
        <h1> {active} </h1>
        <h1> {active} </h1>
        <h1> {active} </h1>
        <h1> {active} </h1>
        <h1> {active} </h1>
        <h1> {active} </h1>
        <h1> {active} </h1>
        <h1> {active} </h1>
        <h1> {active} </h1>
        <h1> {active} </h1>
        <h1> {active} </h1>
        <h1> {active} </h1>
        <h1> {active} </h1>
        <h1> {active} </h1>
        <h1> {active} </h1>

      </div>
    );
  }
}

