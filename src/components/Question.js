import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRedditPosts } from '../actions/RedditActions';
import Paper from 'material-ui/Paper'
import logo from '../logo.svg';
import '../App.css';

const style = {
  width: '270px',
  height: '480px'
}

class Question extends Component {
  render() {
    return (
      <div>
        <header className="Question-header">
          {this.props.questionData[0].title}
        </header>
        <p className="App-intro">
          {this.props.questionData[0].subreddit_name_prefixed}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.reddit.posts,
    isLoadingPosts: state.reddit.isLoadingPosts,
  }
}

export default Question;
