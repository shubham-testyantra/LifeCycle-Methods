import React from "react";

class Mounting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      framework: "Angular",
    };
  }

  //   static getDerivedStateFromProps(props, state) {
  //     return {
  //       framework: props.newFramework,
  //     };
  //   }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ framework: "Vue JS" });
    }, 3000);
  }

  render() {
    return (
      <div>
        <h1>This Framework is :{this.state.framework}</h1>
      </div>
    );
  }
}

export default Mounting;
