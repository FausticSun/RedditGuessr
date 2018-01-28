import React, { Component } from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

import '../App.css';

const style = {
  fixedHeight: {
    maxHeight: '75vh',
    overflow: 'hidden'
  }
};

const visibleStyle = {
  width:'100%',
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
    
    return (
      <div >
        {data.preview ?
          <Card>
            <CardMedia>
              <a href={data.url} target="_blank">
              <div style={style.fixedHeight}>
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
              </div>
              </a>
            </CardMedia>
            <CardTitle
              title={data.title}
              subtitle={"Link:" + data.url}
            />
    
          </Card>
          :
          data.is_self ?
            <Card>
              <CardTitle
                title={data.title}
                subtitle={"Author:" + data.msoCommentAuthor}
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
