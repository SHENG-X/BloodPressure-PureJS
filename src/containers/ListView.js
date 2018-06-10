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


const mInfo = [];
const mapStateToProps = (state) => {
      return{
            'data':state.fetchData
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
      
      render(){
            var info = this.props.data;
            if(info.length>0){
                  info.forEach(val => mInfo.push(val));
            }
            return(
                  <Container>
                        {mInfo.map((val) =>  <InfoCard key={val['ID']} {...val}/>)}
                  </Container>
            )

}
      
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView);