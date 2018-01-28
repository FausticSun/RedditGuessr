import React, { Component } from 'react';
import Paper from 'material-ui/Paper'
import logo from '../images/redditguessr.png';
import '../App.css';
import RaisedButton from 'material-ui/RaisedButton';


const buttonStyle = {
  margin: 12,
};
class HomeScreen extends Component {
    render() {
        return (
            <Paper className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">RedditGuessr</h1>
                </header>
                <p style={{paddingLeft:'10%',paddingRight:'10%'}}>
                    We give you a random Reddit post, guess which Subreddit it is from!
                </p>
                <p style={{textAlign:'left', width:'80%', marginLeft:'10%'}}>
                    <strong>How to play</strong><br/>
                    <ol>
                        <li>Click Start!</li>
                        <li>Guess which subreddit the post belongs to!</li>
                        <li>Find out how seasoned of a Redditor you are!</li>
                    </ol>
                </p>
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