import glamorous from 'glamorous';
import {css} from 'glamor'
import React, {Component} from 'react';
import {TextField, Button, withStyles} from '@material-ui/core';
import transitions from '@material-ui/core/styles/transitions';


const Container = glamorous('div', {propsAreCssOverrides: true})({
      width:'100vw',
      background: '',
      borderRadius:'5px',
      height:'240px',
      display:''
});
const InnerContainer = glamorous('div', {propsAreCssOverrides: true})({
      height: 'calc(100% - 12px)',
      marginLeft:'8px',
      marginRight:'8px',
      marginTop:'8px',
      background:'#eee',
      boxShadow:'0 0 1px 3px #ccc',
      borderRadius:'5px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'center'
});

const borderAnimation = css.keyframes({ 
  '0%': {borderColor:'#444' },
//   '25%':{borderColor:'#ef9a9a' },
//   '50%':{borderColor:'#f44336'},
  '100%': {borderColor:'#4CAF50' }
})
const InputContainer = glamorous.div({
      width:'70vw',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      '& input':{
             width: "100%",
             height:'30px',
             margin: "5px 0",
             boxSizing: "border-box",
             border:'none',
             outline:'none',
             fontSize:'18px',
             background:'transparent',
             borderBottom: '1.5px solid #444',
      },
      '& input:focus': {
            animation: `${borderAnimation} 1s`,
            borderColor: '#4CAF50'

      },
      '& input[type=button]':{
            border:'none',
            borderRadius: '5px',
            boxShadow:'0 0 2px 2px #ccc',
            opacity: '0.9',
            backgroundColor: '#8BC34A',
            color: '#DCEDC8',

      },
      '& input[type=button]:hover': {
            transform: 'scale(1.01)',
      },
      '& input[type=button]:active': {
            transform: 'scale(0.99)',
            opacity:1,
            backgroundColor: '#689F38',
      }

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
                              <form>
                                    <InputContainer>
                                          <div>@</div>
                                    </InputContainer>
                                    <InputContainer>
                                          <input type='number' placeholder='systolic'/>
                                    </InputContainer>
                                    <InputContainer>
                                          <input type='number' placeholder='diastolic'/>
                                    </InputContainer>
                                    <InputContainer>
                                          <input type='number' placeholder='pulse'/>
                                    </InputContainer>
                                    <InputContainer>
                                          <input type='button' value='SUBMIT'/>
                                    </InputContainer>
                              </form>
                        </InnerContainer>
                  </Container>
            );
      }
}


export default UserInput;