import React, { Component } from 'react';
import Paper from 'material-ui/Paper'
import logo from '../logo.svg';
import '../App.css';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    width: '270px',
    height: '480px'
}
const buttonStyle = {
  margin: 12,
};
class HomeScreen extends Component {
    render() {
        return (
            <Paper style={style} className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
                </header>
                <RaisedButton
                  label="Start Game!"
                  primary={true}
                  style={buttonStyle}
                  onClick={this.props.startGame}
                />

            </Paper>
        )
    }
}

export default HomeScreen;