import React, { Component } from 'react';
import { connect } from 'react-redux';
import sampleSize from 'lodash/sampleSize';
import { fetchRedditPosts } from './actions/RedditActions';
import { changePage } from './actions/RoutingActions';
import LoadingScreen from './components/LoadingScreen';
import HomeScreen from './components/HomeScreen';
import QuestionScreen from './components/QuestionScreen';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchRedditPosts());
    this.props.dispatch(changePage("LoadingScreen"));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isLoadingPosts && !this.props.isLoadingPosts) {
      this.props.dispatch(changePage("HomeScreen"));
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
        page = (<QuestionScreen questions={this.props.posts}/>);
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
    page: state.router.page
  }
}

export default connect(mapStateToProps)(App);
