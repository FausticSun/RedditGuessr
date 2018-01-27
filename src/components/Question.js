import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import '../App.css';

const style = {
  
  maxHeight: '80vh'
};

const visibleStyle = {
  visibility: 'visible'
};

const hiddenStyle = {
  visibility: 'hidden'
};

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading : true, url: null };
  }
  handleGifLoaded = () => {
    this.setState({
      isLoading : false
    });
  }
  componentWillReceiveProps(nextProps){
    this.setState({isLoading : true});
  }
  render() {
    const data = this.props.questionData;
    const preview = data.preview;
    
    return (
      <div >
        {data.preview ?
          <Card>
            <CardMedia>
              {data.preview.images[0].variants.gif ?
                <img
                  style={ this.state.isLoading ? hiddenStyle : visibleStyle }
                  src={data.preview.images[0].variants.gif.source.url}
                  alt=""
                  onLoad={this.handleGifLoaded}
                  
                />
                :
                <img
                  style={ this.state.isLoading ? hiddenStyle : visibleStyle }
                  src={data.preview.images[0].source.url}
                  alt=""
                  onLoad={this.handleGifLoaded}
                />
              }
            </CardMedia>
            <CardTitle
              title={data.title}
              subtitle={"Author:" + data.author}
            />
    
          </Card>
          :
          data.is_self ?
            <Card>
              <CardTitle
                title={data.title}
                subtitle={"Author:" + data.author}
              />
            </Card>
            :
            <div>lmao no fokkin preview</div>
          
        }
      </div>
    );
  }
}


export default Question;
