import React, { Component } from 'react';
import { connect } from 'react-redux';
import sampleSize from 'lodash/sampleSize';
import { fetchRedditPosts, completeLoading } from './actions/RedditActions';
import { changePage } from './actions/RoutingActions';
import LoadingScreen from './components/LoadingScreen';
import HomeScreen from './components/HomeScreen';
import QuestionScreen from './components/QuestionScreen';
import ScoreScreen from './components/ScoreScreen';
import shuffle from 'lodash/shuffle';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchRedditPosts(""));
    this.props.dispatch(changePage("LoadingScreen"));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isLoadingPosts && !this.props.isLoadingPosts) {
      this.props.dispatch(changePage("HomeScreen"));
    }
    if (this.props.posts.length > 0 && this.props.posts.length < 150) {
      this.props.dispatch(fetchRedditPosts(this.props.posts[this.props.posts.length - 1].data.name));
    } else if (this.props.posts.length >= 150) {
      this.props.dispatch(completeLoading());
    }
  }

  startGame = () => {
    this.props.dispatch(changePage("QuestionScreen"));
  }

  render() {
    let page = null;
    switch (this.props.page) {
      case "LoadingScreen":
        page = (<LoadingScreen />);
        break;
      case "HomeScreen":
        page = (<HomeScreen startGame={this.startGame}/>);
        break;
      case "QuestionScreen":
        page = (<QuestionScreen
          questions={shuffle(this.props.posts).slice(0,10)}
          score={this.props.score}
        />);
        break;
      case "ScoreScreen":
        page = (<ScoreScreen score={this.props.score} startGame={this.startGame}/>);
        break;
      default:
        page = null;
    }
    return (
      [page]
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.reddit.posts,
    isLoadingPosts: state.reddit.isLoadingPosts,
    page: state.router.page,
    score: state.score.score
  }
}

export default connect(mapStateToProps)(App);
