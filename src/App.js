import React, { Component } from 'react';
import './App.css';

import Switch from './components/Switch.jsx';

class App extends Component {

    state = {
      topColor: '#000000',
      bottomColor: '#FFFFFF'
    }
 
  toggleColors(values) {
    this.setState({
      topColor: values.topInputValue,
      bottomColor: values.bottomInputValue
    });
  }

  render() {
    const style = {
      background: `linear-gradient(to top, ${this.state.bottomColor}, ${this.state.topColor})`
    };
    
    return (
      <div className="App" style={style}>
        <Switch toggleColors={colors => this.toggleColors(colors)}/>
      </div>
    );
  }
}

export default App;
