import React from 'react';
import ReactDOM from 'react-dom';
import Progress from '../src';
import  Button from '@gag/button';
class MyProgress extends React.Component {
  state = {
    percent: 50,
  };
  add = () => {
    let p = this.state.percent + 10;
    if (this.state.percent >= 100) {
      p = 0;
    }
    this.setState({ percent: p });
  }
  render() {
    const { percent } = this.state;
    return (
      <div className="progress-container">
        <Progress percent={30} position="fixed" />
        <div style={{ height: 36 }} />
        <Progress percent={40} position="normal" unfilled="hide" appearTransition />
        <div className="show-info">
          <div className="progress"><Progress percent={percent} position="normal" /></div>
          <div>{percent}%</div>
        </div>
        <Button inline style={{ marginTop: 20 }} onClick={this.add}>(+-)10</Button>
      </div>
    );
  }
}

ReactDOM.render(<MyProgress />, document.getElementById('sk-root'));
