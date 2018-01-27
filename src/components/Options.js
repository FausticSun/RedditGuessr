import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import '../App.css';

const styles = {
  button: {
    margin: "5%"
  },
  wrapper: {
    position: 'absolute',
    width: "40%",
    height: "30%",
    left: "55%",
    top: "20%",
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
      <div style={styles.wrapper}>
        {this.props.options.map(function(obj){
            if(obj.isCorrect) {
              return (
                <RaisedButton
                  label={obj.srName}
                  labelPosition="before"
                  style={styles.button}
                  containerElement="label"
                  onClick={submitCorrect}
                />);
            } else{
              return (
                <RaisedButton
                  label={obj.srName}
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
