import React from 'react';
import Display from './components/display';
import './App.css';

class App extends React.Component {
  state = {
    displaynumber: '0',
    numbers: [],
    toCalc: [],
    operation: '',
  };

  handleClick = () => {
    console.log(this.props);
  };

  insereDisplay = () => {
    const { numbers } = this.state;
    const { displaynumber } = this.state;
    displaynumber === ''
      ? this.setState({ displaynumber: displaynumber + '0' })
      : this.setState({ displaynumber: '0' });
    if (numbers.length < 11) {
      const displaynumber = numbers.join('');
      this.setState({ displaynumber });
    }

    // if (numbers.length >= 10) {
    //   const displayBigNumber = numbers.join('');
    //   const d2 = Number(displayBigNumber).toExponential(10);

    //   this.setState({ displaynumber: d2 });

    //   }
  };

  handleClear = () => {
    this.setState({
      displaynumber: '0',
      numbers: [],
      toCalc: [],
      operation: '',
    });
  };

  handleNegative = () => {
    const { numbers, displaynumber, toCalc } = this.state;
    if (numbers.length === 0) {
      numbers.push(displaynumber);
      this.setState({ displaynumber: '0' });
    }

    if (numbers[0] !== '-' && numbers.length !== 0) {
      numbers.unshift('-');
      // this.setState({ numbers });
      this.setState({ numbers, displaynumber: numbers.join('') });
    } else if (
      displaynumber === '0' ||
      displaynumber === '' ||
      displaynumber === '-'
    ) {
      console.log('entrou');
      this.setState({ displaynumber: '0' });
    } else {
      numbers.shift();
      this.setState({ numbers });
      this.setState({ displaynumber: numbers.join('') });
    }
  };

  insereNum = (val) => {
    const { numbers, displaynumber } = this.state;
    if (numbers[0] === 0 && numbers[2] !== '.') {
      numbers.shift();
    }
    const testDot = numbers.filter((item) => item === '.');
    if (testDot.length <= 1 && val !== '.') {
      if (numbers.length < 11 && displaynumber.length < 10) {
        // if (numbers[0] === '0') {
        // }
        numbers.push(val);
        this.setState({ numbers });
        console.log(this.state);
        this.insereDisplay();
      }
    }

  };


  handleDel = () => {
    const { numbers } = this.state;
    // if (numbers.length !== 0 && displaynumber !== '0') {\
    numbers.pop();
    this.setState({ numbers });
    console.log(this.state);
    this.insereDisplay();
    if (numbers.length === 1 && numbers[0] === '-') {
      this.setState({ displaynumber: '0', numbers: [] });
    }
    if (numbers.length === 0) {
      this.setState({ displaynumber: '0' });
    }
  };

  handleSum = () => {
    const { numbers, toCalc, operation } = this.state;
    if (toCalc[0] === '') {
      toCalc.shift();
    }
    if (numbers.length !== 0) {
      console.log(toCalc);
      this.setState({
        toCalc: numbers,
        numbers: [],
        displaynumber: '0',
        operation: '+',
      });
    }
    if (numbers.length !== 0) {
      toCalc.push(operation);
      toCalc.push(numbers.join(''));
      const xablito = eval(toCalc.join(''));
      const disp = JSON.stringify(xablito, null, null);
      this.setState({
        toCalc,
        numbers: [],
        displaynumber: disp,
        operation: '+',
      });
    }
  };

  handleSub = () => {
    const { numbers, toCalc, operation } = this.state;
    if (toCalc[0] === '') {
      toCalc.shift();
    }
    if (numbers.length !== 0) {
      console.log(toCalc);
      this.setState({
        toCalc: numbers,
        numbers: [],
        displaynumber: '0',
        operation: '-',
      });
    }
    if (numbers.length !== 0) {
      toCalc.push(operation);
      toCalc.push(numbers.join(''));
      const xablito = eval(toCalc.join(''));
      const disp = JSON.stringify(xablito, null, null);
      this.setState({
        toCalc,
        numbers: [],
        displaynumber: disp,
        operation: '-',
      });
    }
  };

  handleMult = () => {
    const { numbers, toCalc, operation } = this.state;
    if (toCalc[0] === '') {
      toCalc.shift();
    }
    if (numbers.length !== 0) {
      console.log(toCalc);
      this.setState({
        toCalc: numbers,
        numbers: [],
        displaynumber: '0',
        operation: '*',
      });
    }
    if (numbers.length !== 0) {
      toCalc.push(operation);
      toCalc.push(numbers.join(''));
      const xablito = eval(toCalc.join(''));
      const disp = JSON.stringify(xablito, null, null);
      this.setState({
        toCalc,
        numbers: [],
        displaynumber: disp,
        operation: '*',
      });
    }
  };

  handleDiv = () => {
    const { numbers, toCalc, operation } = this.state;
    if (toCalc[0] === '') {
      toCalc.shift();
    }
    if (numbers.length !== 0) {
      console.log(toCalc);
      this.setState({
        toCalc: numbers,
        numbers: [],
        displaynumber: '0',
        operation: '/',
      });
    }
    if (numbers.length !== 0) {
      toCalc.push(operation);
      toCalc.push(numbers.join(''));
      const xablito = eval(toCalc.join(''));
      const disp = JSON.stringify(xablito, null, null);
      this.setState({
        toCalc,
        numbers: [],
        displaynumber: disp,
        operation: '/',
      });
    }
  };

  handleEqual = () => {
    const { toCalc, numbers, operation } = this.state;
    if (toCalc[0] === '') {
      toCalc.shift();
    }
    if (toCalc.length !== 0) {
      const result = toCalc.concat(operation, numbers);
      const xablito = eval(result.join(''));
      console.log(xablito);
      this.setState({
        toCalc: [],
        numbers: [xablito],
        displaynumber: xablito,
        operation: '',
      });
    }
  };

  handleDot = () => {
    console.log(this.state)
  };

  handlePercent = () => {
    const { displaynumber } = this.state;
    const percent = displaynumber / 100;
    this.setState({ displaynumber: percent, numbers: [percent] });
  };



  render() {
    const { displaynumber, toCalc, operation } = this.state;
    return (
      <div className='xabloso'>
      <div>
        <div className="calc">
          <header> Calculadora </header>

          <div value={toCalc} className="telamenor">
            <h2>
              {toCalc.join('')}
              {operation}
              {/* {toCalc.map((num, index) => { return <span key={index}>{num}</span> })} {operation} */}
            </h2>
          </div>
          <Display className="telinha" value={displaynumber}>
            {/* { displaynumber } */}
          </Display>

          {/*  _________________________________________________________________________________________________________________ COMEÇA BOTOES */}
          <div className="linha">
            <button
              className="button, glow-on-hover"
              type="button"
              onClick={() => this.handleClear()}
              number="c"
              value={this.props.number}
            >
              C
            </button>
            <button
              className="button, glow-on-hover"
              type="button"
              onClick={() => this.handleNegative()}
              number="+/-"
            >
              ±
            </button>
            <button
              className="button, glow-on-hover"
              type="button"
              onClick={() => this.handleDel()}
              number="<-"
            >
              ←
            </button>

            <button
              className="button, glow-on-hover"
              type="button"
              onClick={() => this.handleDiv()}
              number="/"
            >
              ÷
            </button>
          </div>
          {/* COMEÇO SEGUNDA LINHA */}
          <div className="linha">
            <button
              className="button, glow-on-hover"
              type="button"
              onClick={() => this.insereNum(7)}
              number="7"
            >
              7
            </button>
            <button
              className="button, glow-on-hover"
              type="button"
              onClick={() => this.insereNum(8)}
              number="8"
            >
              8
            </button>
            <button
              className="button, glow-on-hover"
              type="button"
              onClick={() => this.insereNum(9)}
              number="9"
            >
              9
            </button>

            <button
              className="button, glow-on-hover"
              type="button"
              onClick={() => this.handleMult()}
              number="x"
            >
              x
            </button>
          </div>
          {/* ____________________COMEÇO TERCEIRA LINHA_______________________________ */}
          <div className="linha">
            <button
              className="button, glow-on-hover"
              type="button"
              onClick={() => this.insereNum(4)}
              number="4"
            >
              4
            </button>
            <button
              className="button, glow-on-hover"
              type="button"
              onClick={() => this.insereNum(5)}
              number="5"
            >
              5
            </button>
            <button
              className="button, glow-on-hover"
              type="button"
              onClick={() => this.insereNum(6)}
              number="6"
            >
              6
            </button>

            <button
              className="button, glow-on-hover"
              type="button"
              onClick={() => this.handleSub()}
              number="-"
            >
              -
            </button>
          </div>
          {/* ____________________COMEÇO QUARTA LINHA_______________________________ */}
          <div className="linha">
            <button
              className="button, glow-on-hover"
              type="button"
              onClick={() => this.insereNum(1)}
              number="1"
            >
              1
            </button>
            <button
              className="button, glow-on-hover"
              type="button"
              onClick={() => this.insereNum(2)}
              number="2"
            >
              2
            </button>
            <button
              className="button, glow-on-hover"
              type="button"
              onClick={() => this.insereNum(3)}
              number="3"
            >
              3
            </button>

            <button
              className="button, glow-on-hover"
              type="button"
              onClick={() => this.handleSum()}
              number="+"
            >
              +
            </button>
          </div>
          {/* ____________________COMEÇO QUINTA LINHA_______________________________ */}
          <div className="linha">
            <button
              className="button, glow-on-hover"
              type="button"
              onClick={() => this.insereNum(0) && this.handleZero()}
              number="0"
            >
              0
            </button>
            <button
              className="button, glow-on-hover"
              type="button"
              onClick={() => this.insereNum('.')}
              number="."
            >
              .
            </button>
            <button
              className="button, glow-on-hover"
              type="button"
              onClick={() => this.handlePercent()}
              number="%"
            >
              %
            </button>

            <button
              className="button, glow-on-hover"
              id="btn-equal"
              type="button"
              onClick={() => this.handleEqual()}
              number="="
            >
              =
            </button>
          </div>
        </div>
        </div>

        <footer>
          <p>Desenvolvido por:</p>
          <p>Victor Martins</p>
          <p> Utilizando React (E algumas gambiarras) </p>
        </footer>
      </div>

    );
  }
}

export default App;
