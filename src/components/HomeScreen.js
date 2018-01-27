import React, { Component } from 'react';
import Paper from 'material-ui/Paper'
import logo from '../logo.svg';
import '../App.css';

const style = {
    width: '270px',
    height: '480px'
}

class HomeScreen extends Component {
    render() {
        return (
            <Paper style={style} className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </Paper>
        )
    }
}

export default HomeScreen;