import React,{Component} from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import TourList from './components/TourList/Tourlist';

class App extends Component{
  render(){
    return (
<main>
    <Navbar/> 
        <TourList/>
        </main>
  
    );   
}
}

export default App;
