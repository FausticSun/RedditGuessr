import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRedditPosts } from '../actions/RedditActions';
import Paper from 'material-ui/Paper'
import logo from '../logo.svg';
import '../App.css';
import Question from './Question';

const style = {
  width: '270px',
  height: '480px'
}

class QuestionScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentQn : 1
    };
  }
  render() {
    return (
      <Paper style={style} className="App">
        <header className="Question-header">
          Question Number ({this.state.currentQn})
        </header>
        <Question questionData={this.props.questions[this.state.currentQn].data} />
      </Paper>
    );
  }
}


export default QuestionScreen;
