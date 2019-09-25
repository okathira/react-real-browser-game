import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class CreateWindowButton extends React.Component {
  render() {
    return (
      <button className="create-window">
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

  render() {
    return (
      <div className="game">
        <div className="controller">
          <CreateWindowButton />
        </div>
      </div>
    );
  }
}

function createWindow(url, windowName, windowFeatures) {
  const windowHandle = window.open(url, windowName, windowFeatures);
  windowHandle.resizeTo(50, 50);
  return windowHandle;
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
