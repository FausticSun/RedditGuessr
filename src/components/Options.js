import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import '../App.css';

const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

class Options extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }
  render() {
    const submitCorrect = this.props.submitCorrect;
    const submitWrong = this.props.submitWrong;
    
    return (
      <div>
        {this.props.options.map(function(obj){
            if(obj.isCorrect) {
              return (
                <RaisedButton
                  label={obj.srName + " " + obj.isCorrect}
                  labelPosition="before"
                  style={styles.button}
                  containerElement="label"
                  onClick={submitCorrect}
                />);
            } else{
              return (
                <RaisedButton
                  label={obj.srName + " " + obj.isCorrect}
                  labelPosition="before"
                  style={styles.button}
                  containerElement="label"
                  onClick={submitWrong}
                />);
            }
          })
        }
      </div>
    );
  }
}



export default Options;
