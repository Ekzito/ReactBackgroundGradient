import React, { Component } from 'react';
const format = /#[0-9A-F]{6}$/i;

class Switch extends Component {

      state = {
        topInputValue: '',
        bottomInputValue: ''
      }

    handleFormSubmit(event) {
        event.preventDefault();
        if (!format.test(this.state.topInputValue)) {
            alert('Ошибка! Неверный формат. (верный формат - "#rrggbb")');
            return null;
        }
        if (!format.test(this.state.bottomInputValue)) {
            alert('Ошибка! Неверный формат. (верный формат - "#rrggbb")');
            return null;
        }
        this.props.toggleColors(this.state);
    }

    handleBottomValueChange(event) {
        this.setState({
            bottomInputValue: event.target.value
        })
    }

    handleTopValueChange(event) {
        this.setState({
            topInputValue: event.target.value,
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