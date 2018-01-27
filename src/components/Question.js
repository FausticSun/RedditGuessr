import React, { Component } from 'react';
import '../App.css';

const style = {
  width: '400px',
  height: '600px'
}

class Question extends Component {
  render() {
    return (
      <div>
        <header className="Question-header">
          {this.props.questionData.title}
        </header>
        <p className="App-intro">
          {this.props.questionData.subreddit_name_prefixed}
        </p>
      </div>
    );
  }
}


export default Question;
