import React from "react";
class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleDateString(),
      name:'class'
    };
  }
  render() {
    return (
      <>
        <h1>Class</h1>
        <h1>
          {this.props.name} {new Date().toLocaleTimeString()}
        </h1>
        <h2>hôm nay là ngày:{this.state.time}</h2>
        <h2>tên tui là {this.state.name}</h2>
      </>
    );
  }
}
export default Hello;
