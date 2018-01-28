import React, { Component } from 'react';
import Paper from 'material-ui/Paper'

import '../App.css';
import RaisedButton from 'material-ui/RaisedButton';


const buttonStyle = {
  margin: 12,
};
const styles ={
  app: {
    display: 'flex',
    flexDirection: "column"
  },
  top: {
    fontSize: '3.5vw',
    flexGrow: '1',
  },
  mid: {
    fontWeight:'bold',
    flexGrow: '1',
  },
  mid2: {
    paddingLeft:"10%",
    paddingRight:"10%",
    flexGrow: '1',
  },
  
  bottom: {
    flexGrow: '1',
  }
}
const redditor = [
  "Reddit Beginner",
  "Reddit Novice",
  "Reddit Padawan",
  "Medium Redditor",
  "Intermediate Redditor",
  "Intermediate Redditor",
  "Seasoned Redditor",
  "Seasoned Redditor",
  "Reddit Addict",
  "Reddit Master",
  "Native Reddit Islander",
]
const message = [
  "Oops! Browse Reddit more!",
  "Only know a few subreddits? Gain more experience!",
  "Only know a few subreddits? Gain more experience!",
  "Spend more time outside your own Subreddits!",
  "Spend more time outside your own Subreddits!",
  "More experience required",
  "More experience required!",
  "Nearly a master!",
  "Almost a master!",
  "Maybe try spending less time on Reddit kappa",
  "You got all right! But maybe try spending less time on Reddit kappa"
]
class ScoreScreen extends Component {
    render() {
        return (
            <Paper style={styles.app} className="App">
                <p className="score-top">
                  Score : {this.props.score} /10
                </p>
                <p className="score-mid">{redditor[this.props.score]}!</p>
                <p className="score-mid2">{message[this.props.score]}</p>
                <div className="score-bottom">
                    <RaisedButton
                        label="Replay"
                        primary={true}
                        style={buttonStyle}
                        onClick={this.props.startGame}
                    />
                </div>
            </Paper>
        )
    }
}

export default ScoreScreen;