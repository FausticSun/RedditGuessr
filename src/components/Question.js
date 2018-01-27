import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import '../App.css';

const style = {
  width: '400px',
  height: '600px'
}

class Question extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.questionData);
  }
  render() {
    const data = this.props.questionData;
    const preview = data.preview;
    
    return (
      <div >
        {data.preview ?
          <Card>
            <CardMedia>
              <img src={data.preview.images[0].source.url} alt="" />
            </CardMedia>
            <CardTitle
              title={data.title}
              subtitle={"Author:" +  data.author}
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
