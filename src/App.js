import React, { Component } from 'react';
import './App.css';

import Switch from './components/Switch.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      topColor: '#000000',
      bottomColor: '#FFFFFF'
    }
  }

  toggleColors(values) {
    let color = {
      topColor: values.topInputValue,
      bottomColor: values.bottomInputValue
    };

    console.log(color)

    this.setState({
      topColor: color.topColor,
      bottomColor: color.bottomColor
    });
  }

  render() {
    let style = {
      background: `linear-gradient(to top, ${this.state.bottomColor}, ${this.state.topColor})`
    };
    
    return (
      <div className="App" style={style}>
        <Switch toggleColors={this.toggleColors.bind(this)}></Switch>
      </div>
    );
  }
}

export default App;
