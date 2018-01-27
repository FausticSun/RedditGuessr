import React, { Component } from 'react';
import Paper from 'material-ui/Paper'

import '../App.css';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    width: '270px',
    height: '480px'
}
const fullScreen = {
    width: "100%",
    height: "100%"
}
const buttonStyle = {
  margin: 12,
};
class ScoreScreen extends Component {
    render() {
        return (
            <Paper style={style} className="App">
                Score : {this.props.score} /10
                <RaisedButton
                    label="Replay"
                    primary={true}
                    style={buttonStyle}
                    onClick={this.props.startGame}
                />
            </Paper>
        )
    }
}

export default ScoreScreen;