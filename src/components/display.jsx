import React from 'react';

class Display extends React.Component {
    render() {
    return <div className="display">
      <h1>
      {this.props.value}
      </h1>
      </div>;
  }
}


export default Display;