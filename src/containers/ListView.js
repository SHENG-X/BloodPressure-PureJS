import glamorous from 'glamorous';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {get_user_data} from './UserInput/actions';
import InfoCard from '../components/InfoCard'


// const Container = glamorous.div(props =>({
//       display: 'flex',
//       width: '100vw',
//       height: '100vh',
//       flexDirection: 'column',
//       alignItems:'center',
//       background:'red'
// }));

const Container = glamorous('div', {propsAreCssOverrides: true})({
      display: 'flex',
      width: '100vw',
      flexDirection: 'column',
      alignItems:'center',
      backgroundColor: '',
      paddingTop:'10px',
      overflow:'scroll',
      flexGrow:10
})


const mapStateToProps = (state) => {
      console.log('state value', state.setInput.data);
      return{
            'data':state.setInput
      }
}
 
const mapDispatchToProps = (dispatch) => {
      return{
            onGetUserData: ()=>dispatch(get_user_data())
      }
}

class ListView extends Component{
      componentWillMount(){
        this.props.onGetUserData();
      }
      handleClick(e){
            console.log(e.target)
            alert(e.target.id);
            //Click color indicator to delete
            
      }
      render(){
            let info=[];
            info = this.props.data['data'];
            console.log('mpropsss info',info);
            return(
                  <Container>
                        {this.props.data['data'].map((val) =>  <InfoCard key={val['ID']} id={val['ID']} {...val} click={this.handleClick.bind(this)} />)}
                  </Container>
            )

}
      
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView);