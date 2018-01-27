import React, { Component } from 'react';
import Paper from 'material-ui/Paper'
import '../App.css';
import Question from './Question';
import Options from './Options';
import { connect } from 'react-redux';
import { clearScore, incScore } from '../actions/ScoreActions';
import { changePage } from '../actions/RoutingActions';
import sampleSize from 'lodash/sampleSize';
import shuffle from 'lodash/shuffle';

const subredditSimilarity = require('../constants/SubredditSimilarity.json');  

const styles = {
  questionStyle : {
    width: '80%',
    alignSelf: 'center',
    top: "5%",
    left: "5%"
  },
  leftWrapper : {
    display: 'flex',
    justifyContent: 'center',
    width: "48%"
  },
  rightWrapper : {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: "48%"
  }
  
}

const fullscreen = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "row wrap",
  justifyContent: "space-around"
}

const wrong = [{srName:"Wrong1"},{srName:"Wrong2"},{srName:"Wrong3"}];
class QuestionScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentQn : 0,
    };
    console.log(this.props.questions[this.state.currentQn].data);
  }
  componentDidMount(){
    this.props.dispatch(clearScore());
  }
  rngOptions(correctSubreddit, wrongSubreddits){
    var correctSub = { srName : correctSubreddit, isCorrect : true};
    var subOptions = wrongSubreddits.map(name => ({
      srName: name,
      isCorrect: false
    }));
    subOptions.push(correctSub);
    return subOptions;
  }
  getWrongAnswers = () => {
    return sampleSize(
      subredditSimilarity.subreddits.find(subreddit =>
        subreddit.name === this.props.questions[this.state.currentQn].data.subreddit).similar,
      3);
  }

  submitCorrect = () => {
    this.props.dispatch(incScore());
    this.incQuestion();
  }
  submitWrong = () => {
    this.incQuestion();
  }
  incQuestion = () =>{
    if (this.state.currentQn < 9) {
      this.setState({currentQn: this.state.currentQn + 1});
    } else {
      this.props.dispatch(changePage("ScoreScreen"));
    }
  }

  render() {
    return (
      <div style={fullscreen}>
        <div style={styles.leftWrapper}>
          <Paper style={styles.questionStyle} className="App">
            <Question questionData={this.props.questions[this.state.currentQn].data} />
          </Paper>
        </div>
        <div style={styles.rightWrapper}>
          <header className="Question-header">
            Question Number ({this.state.currentQn+1}) and you have {this.props.score} right
          </header>
  
          <Options
            submitWrong={this.submitWrong}
            submitCorrect={this.submitCorrect}
            options={shuffle(this.rngOptions(this.props.questions[this.state.currentQn].data.subreddit, this.getWrongAnswers()))}
            correctAns={this.props.questions[this.state.currentQn].data.subreddit}
          />
        </div>
      </div>
    );
  }
}


export default connect()(QuestionScreen);
