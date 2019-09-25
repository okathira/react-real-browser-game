import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class CreateWindowButton extends React.Component {
  render() {
    return (
      <button className="create-window" onClick={this.props.onClick}>
        Create Window
      </button>
    )
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainWindowHandle: undefined,
    }
  }

  createMainWindow() {
    this.setState({
      mainWindowHandle: createWindow("", "_blank", "left=50,top=50,width=100,height=100,menubar=no,toolbar=no,location=no,status=no"),
    });
  }

  render() {
    return (
      <div className="game">
        <div className="controller">
          <CreateWindowButton onClick={() => this.createMainWindow()} />
        </div>
      </div>
    );
  }
}

function createWindow(url, windowName, windowFeatures) {
  const windowHandle = window.open(url, windowName, windowFeatures);
  return windowHandle;
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
