import React, { Component } from 'react';

class Switch extends Component {
    constructor(props) {
      super(props);

      this.format = /#[0-9A-F]{6}$/i;
      console.log(this.format.test('#FFFFF1'));
      this.state = {
        topInputValue: '',
        bottomInputValue: ''
      }
    }

    handleFormSubmit(event) {
        event.preventDefault();
        if (this.format.test(this.state.topInputValue) === false) {
            alert('Ошибка! Неверный формат.');
            return null;
        }
        if (this.format.test(this.state.bottomInputValue) === false) {
            alert('Ошибка! Неверный формат.');
            return null;
        }
        this.props.toggleColors(this.state)
    }

    handleBottomValueChange(event) {
        this.setState({
            topInputValue: this.state.topInputValue,
            bottomInputValue: event.target.value
        })
    }

    handleTopValueChange(event) {
        this.setState({
            topInputValue: event.target.value,
            bottomInputValue: this.state.bottomInputValue
        })
    }

    render() {
      return (
        <form onSubmit={(event) => this.handleFormSubmit(event)} className="Switch__Form">
          <input onChange={(event) => this.handleTopValueChange(event)} value={this.state.topInputValue} className='Switch__input' type='text' placeholder='Введите верхний цвет #rrggbb'></input>
          <input onChange={(event) => this.handleBottomValueChange(event)} value={this.state.bottomInputValue} className='Switch__input' type='text' placeholder='Введите нижний цвет #rrggbb'></input>
          <button className='Switch__button' type='submit'>Go</button>
        </form>
      );
    }
  }
  
  export default Switch;