import React, { Component } from 'react';
import './App.css';
import Plot from 'react-plotly.js';
// import * as Desmos from './calculator.js';

class Cal extends React.Component {
  constructor(props){
    super(props);
    this.state={
      des : {},
    }
  }
  componentDidMount = () =>{
    // window.getDesmos=(function getDesmos(Desmos){
    //   let elt = document.getElementById('calculator');
    //   let calculator = this.state.des.GraphingCalculator(elt);
    //   calculator.setExpression({id:'graph1', latex:'y=x^2'});
    // }.bind(this),
    // (function(){
    //   const script = document.createElement("script");
    //
    //   script.src = "https://www.desmos.com/api/v1.2/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6";
    //   // script.async = true;
    //   document.body.appendChild(script);
    //
    //   script.onload = () =>{
    //     getDesmos(this);
    //   }
    // })()

    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+points',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
      />
        </header>
        <div className="footer">Made with love by Amit</div>
      </div>
    );
  }
}

class App extends Component {
  render(){
     return (<Cal />)
  }
}
export default App;
