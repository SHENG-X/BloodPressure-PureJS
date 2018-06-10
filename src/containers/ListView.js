import glamorous from 'glamorous';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {get_user_data, remove_item} from './UserInput/actions';
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
            onGetUserData: ()=>dispatch(get_user_data()),
            onRemoveData: (id) => dispatch(remove_item(id))
      }
}

class ListView extends Component{
      componentWillMount(){
        this.props.onGetUserData();
      }
      handleClick(e){
            console.log(e.target)
            var id = e.target.id;
            //Click color indicator to delete
            var delete_item = window.confirm('Do you want to delete this record?');
            if(delete_item){
                  var db = null;
                  var request = window.indexedDB.open("health", 1);
                  request.onsuccess = () => {
                        db = request.result;
                        var transaction = db.transaction(["health"], "readwrite");
                        var objectStore = transaction.objectStore("health");
                        var objectStoreRequest = objectStore.delete(Number(id));
                        objectStoreRequest.onsuccess = () => {
                              this.props.onRemoveData(Number(id));
                        }
                  }
            }
            
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