import React from 'react';

class ExerciseTimer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      seconds: 30
    };
  }
  
  
  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.seconds > 0) {
        this.setState(prevState => ({
          seconds: prevState.seconds - 1
        }));
      } else {
        clearInterval(this.interval);
      }
    }, 1000);
  }
    

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  


  render() {
    return (
      <div>
        <h2>{this.state.seconds} seconds left</h2>
      </div>
    );
  }
}

export default ExerciseTimer;
