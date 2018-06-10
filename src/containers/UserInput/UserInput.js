import glamorous from 'glamorous';
import {css} from 'glamor'
import React, {Component} from 'react';
import { SvgIcon} from '@material-ui/core';
import { connect } from 'react-redux';
import {enter_diastolic, enter_pulse, enter_systolic, show_hide_input_container, show_hide_container_control_button, save_data} from './actions';

const Container = glamorous('div', {propsAreCssOverrides: true})({
      width:'100vw',
      background: '',
      borderRadius:'5px',
      height:'240px',
      display:'',
});
const InnerContainer = glamorous('div', {propsAreCssOverrides: true})({
      height: 'calc(100% - 12px)',
      marginLeft:'8px',
      marginRight:'8px',
      marginTop:'8px',
      background:'#eee',
      boxShadow:'0 0 1px 2px #ccc',
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

const mapStateToProps = (state) => {
      return{
            'systolic': state.setInput.systolic,
            'diastolic': state.setInput.diastolic,
            'pulse': state.setInput.pulse,
            'container_display': state.setInput.container_display,
            'show_container_button': state.setInput.show_container_button,
      }
}
 
const mapDispatchToProps = (dispatch) => {
      return{
            onSystolicChange: (event) => dispatch(enter_systolic(event.target.value)),
            onDiastolicChange: (event) => dispatch(enter_diastolic(event.target.value)),
            onPulseChange: (event) => dispatch(enter_pulse(event.target.value)),
            onContainerControlClick: () => dispatch(show_hide_input_container()),
            onButtonControlClick: () => dispatch(show_hide_container_control_button()),
            onSubmit: ()=>dispatch(save_data()),
      }
}


class UserInput extends Component{
      render(){
            return(
                  <div>
                  <Container display={this.props.container_display}>
                        <InnerContainer>
                              <form>
                                    <InputContainer onClick={this.props.onContainerControlClick}>
                                          <SvgIcon style={{width:'45px',height:'45px', opacity:'0.4'}}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
                                                      <path d="M0 0h24v24H0z" fill="none"/>
                                                </svg>
                                          </SvgIcon>
                                    </InputContainer>
                                    <InputContainer>
                                          <input type='number' placeholder='systolic' value={this.props.systolic} onChange = {this.props.onSystolicChange}/>
                                    </InputContainer>
                                    <InputContainer>
                                          <input type='number' placeholder='diastolic'  value={this.props.diastolic} onChange = {this.props.onDiastolicChange}/>
                                    </InputContainer>
                                    <InputContainer>
                                          <input type='number' placeholder='pulse'  value={this.props.pulse} onChange = {this.props.onPulseChange}/>
                                    </InputContainer>
                                    <InputContainer>
                                          <input type='button' value='SUBMIT' onClick={this.props.onSubmit}/>
                                    </InputContainer>
                              </form>
                        </InnerContainer>
                  </Container>
                   <div style={{position:'fixed', bottom:'20px', textAlign:'center',left:'0px', width:'100%'}}>
                              <SvgIcon onClick={this.props.onButtonControlClick} style={{background:'#ccc', display:`${this.props.show_container_button}`, width:'45px', height:'45px', borderRadius:'50%',opacity:0.5}}>   
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                          <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/>
                                          <path d="M0 0h24v24H0z" fill="none"/>
                                    </svg>
                              </SvgIcon>
                  </div>
            </div>            
            );
      }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserInput);