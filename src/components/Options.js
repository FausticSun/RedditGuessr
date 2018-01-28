import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import '../App.css';

const styles = {
  button: {
    width: "42%",
    margin: "3%",
    height: '50px'
  },
  wrapper: {
    width: "100%",
    height: "50%",
    
  },
  label : {
    fontSize:'0.5em',
    height:'inherit',
    display:'flex',
    flexDirection:'column',
    justifyContent: 'center'
  }
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
                  className="Option-button"
                  key={obj.srName}
                  label={obj.srName}
                  labelStyle={styles.label}
                  labelPosition="before"
                  style={styles.button}
                  containerElement="label"
                  onClick={submitCorrect}
                />);
            } else{
              return (
                <RaisedButton
                  className="Option-button"
                  key={obj.srName}
                  label={obj.srName}
                  labelStyle={styles.label}
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
