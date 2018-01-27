import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRedditPosts } from './actions/RedditActions';
import { changePage } from './actions/RoutingActions';
import HomeScreen from './components/HomeScreen';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchRedditPosts());
    this.props.dispatch(changePage("Home"));
  }

  render() {
  let page = null;
    switch (this.props.page) {
      case "Home":
        page = (<HomeScreen />); break;
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
