import React, { Component } from 'react';

class MousePosition extends Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    this.setState({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  render() {
    return (
      <div onMouseMove={this.handleMouseMove} style={{ position: 'relative' }}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default MousePosition;
