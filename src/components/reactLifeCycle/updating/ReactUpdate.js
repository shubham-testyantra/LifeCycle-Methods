import React, { Component } from "react";

export default class ReactUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      snacks: "French Fries",
    };
  }

  //   static getDerivedStateFromProps(props, state) {
  //     return {
  //       snacks: props.newSnacks,
  //     };
  //   }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ snacks: "Pani Puri" });
    }, 3000);
  }

  shouldComponentUpdate() {
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return (document.getElementById("beforeUpdate").innerHTML =
      `Before Update: ` + prevState.snacks);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    document.getElementById("afterUpdate").innerHTML =
      "After Update: " + this.state.snacks;

    console.log("Prev props", prevProps);
    console.log("Prev State", prevState);
    console.log("Snapshot Value:", snapshot);
  }

  render() {
    return (
      <div>
        <h2>Snacks Orderd : {this.state.snacks}</h2>

        {/* get Snapshot */}
        <div id="beforeUpdate"></div>

        {/* Component did update */}
        <div id="afterUpdate"></div>
      </div>
    );
  }
}
