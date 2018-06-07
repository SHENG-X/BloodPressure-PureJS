import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InfoCard from './components/InfoCard';
import ListView from './containers/ListView';
import UserInput from './containers/UserInput';


class App extends Component {
  render() {
    const list = [< InfoCard/>,< InfoCard backgroundColor={'yellow'}/>];
    return (
      <div>
        < ListView children={list} height={'50vh'}/>
        < UserInput/>
      </div>  
    );
  }
}

export default App;
