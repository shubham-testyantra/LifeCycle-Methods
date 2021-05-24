import React, { Component } from "react";

export default class UnMounting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
    };
  }
  deleteValue = () => {
    this.setState({ show: false });
  };

  render() {
    let myValue;
    if (this.state.show) {
      myValue = <Header />;
    }

    return (
      <div>
        {myValue}
        <button onClick={this.deleteValue}>Delete</button>
      </div>
    );
  }
}

class Header extends React.Component {
  componentWillUnmount() {
    alert("Are you sure you want to delete");
  }
  render() {
    return (
      <>
        <h2>The End</h2>
      </>
    );
  }
}
