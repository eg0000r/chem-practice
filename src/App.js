import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Card extends Component{
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      index: 0,
      answer: '',
      random: false,
    }
  }
  numbers = ['1', '2', '3', '4'];
  formula = ['NH4', 'NO2', 'NO3', 'SO3', 'SO4', 'HSO4', 'OH', 'PO4', 'HPO4', 'H2PO4', 'CO3', 'HCO3',
    'ClO4', 'ClO3', 'ClO2', 'ClO', 'C2H3O2', 'Cr2O7', 'CrO4', 'CN'];
  getFormula = (i) => {
    let f = this.formula[i];
    let out = '';
    let n;
    for (n = 0; n < f.length; n ++) {
      if (this.numbers.includes(f[n])) {
        out += f[n].sub();
      } else {
        out += f[n];
      }
    }
    return out;
  };
  name = ['AMMONIUM', 'NITRITE', 'NITRATE', 'SULFITE', 'SULFATE', 'BISULFATE', 'HYDROXIDE', 'PHOSPHATE', 'HYDROGEN PHOSPHATE',
  'DIHYDROGEN PHOSPHATE', 'CARBONATE', 'BICARBONATE', 'PERCHLORATE', 'CHLORATE', 'CHLORITE', 'HYPOCHLORITE',
    'ACETATE', 'DICHROMATE', 'CHROMATE', 'CYANIDE'];
  onClick = (e) => {
    this.setState({answer: e.target.value.toUpperCase()});
    if (e.target.value.toUpperCase() === this.name[this.state.index]) {
      if (this.state.random) {
        this.setState({index: Math.floor(Math.random() * this.formula.length), score: this.state.score + 1});
      } else {
        if (this.state.index === this.name.length - 1) {
          this.setState({index: 0});
        } else {
          this.setState({index: this.state.index + 1});
        }
        this.setState({score: this.state.score + 1});
      }
      console.log('CORRECT!!!');
    }
  };
  onCheck = (e) => {
    console.log(e.target.checked);
    this.setState({random: e.target.checked});
  };
  render() {
    return(
      <div className={'card'}>
        <input type={'checkbox'} onChange={this.onCheck}/>
        <label>Random order</label>
        <h3>Score: {this.state.score}</h3>
        <h1 dangerouslySetInnerHTML={{__html: this.getFormula(this.state.index)}}/>
        <label>Name of ion: </label>
        <input onChange={this.onClick}/>
        <h2>{this.state.answer}</h2>
      </div>
    );
  }
}

function App() {
  return (
    <div className={'main'}>
      <Card/>
    </div>
  );
}

export default App;
