import React, { Component } from 'react';
import './App.css';
import Plot from 'react-plotly.js';

class Cal extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data: this.props.value, layout: {}, frames: [], config: {}
    };
  }


  render() {
    // alert(this.state.data);
    return (
      <div className="App">
        <header className="App-header">
        <Plot
              data={this.state.data}
              layout={this.state.layout}
              frames={this.state.frames}
              config={this.state.config}
              onInitialized={(figure) => this.setState(figure)}
              onUpdate={(figure) => this.setState(figure)}
          />
        </header>
        <div className="footer">Made with love by Amit</div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      data : [
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+points',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ],
    };
  }
  render(){
     return (<Cal  value={this.state.data}/>)
  }
}
export default App;
