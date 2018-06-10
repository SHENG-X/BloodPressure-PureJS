import React, { Component } from 'react';
import logo from './logo.svg';
import InfoCard from './components/InfoCard';
import ListView from './containers/ListView';
import UserInput from './containers/UserInput/UserInput';
import glamorous from 'glamorous';
import NavBar from './components/NavBar';


const APPContainer = glamorous.div({
    height:'100vh',
    // width:'100vw',
    backgroundColor: '#DCEDC8',
});
const Main = glamorous.div({
  height:'calc(100vh - 56px)',
  // width:'100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems:'center'
});



// const mapStateToProps = (state) => {
//       return{
//             'data': state.fetchData.data
//       }
// }
 
// const mapDispatchToProps = (dispatch) => {
//       return{
//               onGetUserData: () => dispatch(request_data())
//             }
// }
class App extends Component {

  render() {
    return (
      <APPContainer>
        <NavBar/>
        <Main>
          < ListView/>
          < UserInput/>
        </Main>  
      </APPContainer>  
    );
  }
}

export default App;
