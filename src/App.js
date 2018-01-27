import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRedditPosts } from './actions/RedditActions';
import Paper from 'material-ui/Paper'
import logo from './logo.svg';
import './App.css';

const style = {
  width: '270px',
  height: '480px'
}

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchRedditPosts());
  }

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
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.reddit.posts,
    isLoadingPosts: state.reddit.isLoadingPosts,
  }
}

export default connect(mapStateToProps)(App);
