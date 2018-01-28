import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import '../App.css';

const styles = {
  button: {
    padding:'1%',
    width: "42%",
    height: "20%",
    margin: "3%"
    
  },
  wrapper: {
    width: "100%",
    height: "50%",
    
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
                  key={obj.srName}
                  label={obj.srName}
                  labelPosition="before"
                  style={styles.button}
                  containerElement="label"
                  onClick={submitCorrect}
                />);
            } else{
              return (
                <RaisedButton
                  key={obj.srName}
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
