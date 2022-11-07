import React from 'react';

class Buttons extends React.Component {
  state = {
    displaynumber: '',
    numbers: [],
  }
  
  handleClick = () => {
    this.setState({
      displaynumber: this.state.displaynumber + this.props.number,
      numbers: this.state.numbers.concat(this.props.number),})
}

  
    // else if (value === 'C') {
    //   functionClear();
    // else if (value === '=') {
    //   this.setState({
    //     displayValue: eval(numbers.join('')),
    //     numbers: [],
    //   });
    // }
    // }
    // else if (value === '.') {
    //   functionDecimal();
    // }
    // else if (value === '+/-') {
    //   functionNegative();
    // }
    // else if (value === '%') {
    //   functionPercent();
    // }
    // else if (value === '+') {
    //   functionAdd();
    // }
    // else if (value === '-') {
    //   functionSubtract();
    // }
    // else if (value === '*') {
    //   functionMultiply();
    // }
    // else if (value === '/') {
    //   functionDivide();
    // }
    // else {
    //   functionNumber(value);
    // }
  



    // const num = parseInt(value, 10);
    // console.log(eval(numbers.join('')));
    // this.setState({ numbers: [...numbers, value] });
    // console.log(numbers);
    // console.log(numbers)

    

  // isNumber = (num) => {
  //   this.setState({
  //     displayValue: num,
  //     numbers: [...this.state.numbers, num],
  //   });
  // }


  render() {
    return (
      <button className="button, glow-on-hover"
      type='button'
      onClick={() => this.handleClick()}>
        {this.props.number}
      </button>
    );
  }
}

export default Buttons;