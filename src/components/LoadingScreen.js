import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress'

class LoadingScreen extends Component {
    render() {
        return (
            <CircularProgress />
        );
    }
}

export default LoadingScreen;