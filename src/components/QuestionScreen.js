import React, { Component } from 'react';
import Paper from 'material-ui/Paper'
import '../App.css';
import Question from './Question';
import Options from './Options';
const style = {
  width: '400px',
  height: '600px',
  position: 'absolute',
  top: "20%",
  left: "5%",
  
}

const fullscreen = {
  width: "100%",
  height: "100%",
}
const wrong = [{srName:"Wrong1"},{srName:"Wrong2"},{srName:"Wrong3"}];
const wrong2 = ["Wrong1","Wrong2","Wrong3"];
class QuestionScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      score : 0,
      currentQn : 1
    };
  }
  rngOptions(correctSubreddit, wrongSubreddits){
    var correctSub = { srName : correctSubreddit, isCorrect : true};
    // var wrongSubs = [];
    var lolSubs = wrongSubreddits.map(function(obj){
      var rObj = {};
      rObj["srName"] = obj.srName;
      rObj["isCorrect"] = false;
      return rObj;
    });
    lolSubs.push(correctSub);
    // console.log(lolSubs);
    return lolSubs;
  }
  submitCorrect = () => {
    this.setState({ score: this.state.score + 1});
    this.setState({ currentQn: this.state.currentQn + 1});
  }
  submitWrong = () => {
    this.setState({ currentQn: this.state.currentQn + 1});
  }
  render() {
    return (
      <div style={fullscreen}>
        <Paper style={style} className="App">
          <header className="Question-header">
            Question Number ({this.state.currentQn}) and you have {this.state.score} right
          </header>
          <Question questionData={this.props.questions[this.state.currentQn].data} />
        </Paper>
        <Options
          submitWrong={this.submitWrong}
          submitCorrect={this.submitCorrect}
          options={this.rngOptions(this.props.questions[this.state.currentQn].data.subreddit_name_prefixed, wrong)}
          correctAns={this.props.questions[this.state.currentQn].data.subreddit_name_prefixed}
        />
      </div>
    );
  }
}


export default QuestionScreen;
