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
class App extends Component {
  
  render() {
    const userData =[{'date':'2018/05/07', },{}];
    const list = [< InfoCard/>,< InfoCard/>, <InfoCard/>,< InfoCard/>,< InfoCard/>,< InfoCard/>,< InfoCard/>,< InfoCard/>,< InfoCard/>,< InfoCard/>,< InfoCard backgroundColor={'yellow'}/>];
    return (
      <APPContainer>
        <NavBar/>
        <Main>
          < ListView children={list}/>
          < UserInput/>
        </Main>  
      </APPContainer>  
    );
  }
}

export default App;
