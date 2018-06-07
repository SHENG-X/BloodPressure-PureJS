import glamorous from 'glamorous';
import React, {Component} from 'react';
import {TextField, Button, withStyles} from '@material-ui/core';

const styles = theme => ({
  textField: {
    marginLeft: 0,
    marginRight: 0,
    width: '100%',
  }
});
const Container = glamorous('div', {propsAreCssOverrides: true})({
      width:'100vw',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
});
const InnerContainer = glamorous('div', {propsAreCssOverrides: true})({
      width:'95vw',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
});
class UserInput extends Component{
      constructor(props){
            super(props);
            this.state={

            }
      }

      render(){
            const { classes } = this.props;
            return(
                  <Container>
                        <InnerContainer>
                              <TextField 
                                    id="textarea"
                                    type='number'
                                    label="SYSTOLIC"
                                    multiline
                                    className={classes.textField}
                                    margin="normal"/>
                              <TextField 
                                    id="textarea"
                                    type='number'
                                    label="DIASTOLIC"
                                    multiline
                                    className={classes.textField}
                                    margin="normal"/>
                              <TextField 
                                    id="textarea"
                                    type='number'
                                    label="PULSE"
                                    multiline
                                    className={classes.textField}
                                    margin="normal"/>
                              <div style={{width:'100%', display:'flex', justifyContent:'flex-end'}}>
                                     < Button variant = "contained" color = "default">Add</Button>
                              </div>
                        </InnerContainer>
                  </Container>
            );
      }
}


export default withStyles(styles)(UserInput);