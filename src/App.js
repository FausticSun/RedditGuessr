import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRedditPosts } from './actions/RedditActions';
import { changePage } from './actions/RoutingActions';
import HomeScreen from './components/HomeScreen';
import QuestionScreen from './components/QuestionScreen';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchRedditPosts());
    this.props.dispatch(changePage("Home"));
  }
  startGame = () => {
    console.log("Sth");
    this.props.dispatch(changePage("QuestionScreen"));
  }
  render() {
  let page = null;
  if (this.props.isLoadingPosts) {
    page = null;
  } else {
    switch (this.props.page) {
      case "Home":
        page = (<HomeScreen startGame={this.startGame}/>);
        break;
      case "QuestionScreen":
        page = (<QuestionScreen questions={this.props.posts}/>);
        break;
      default:
        page = null;
    }
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
