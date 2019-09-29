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
      keyInputs: Array(256).fill(false),
    }
    this.createMainWindow = this.createMainWindow.bind(this);
    this.refreshKeyInput = this.refreshKeyInput.bind(this);
  }

  refreshKeyInput(keyCode, isDown) {
    const keyInputs = this.state.keyInputs.slice();
    keyInputs[keyCode] = isDown;
    this.setState({ keyInputs: keyInputs });
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
          <CreateWindowButton onClick={this.createMainWindow} />
        </div>
        <KeyInputManager refreshKeyInput={this.refreshKeyInput} />
      </div>
    );
  }
}

class KeyInputManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latestInput: { key: "", state: "" },
    }
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
    document.addEventListener('keyup', this.onKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
    document.removeEventListener('keyup', this.onKeyUp);
  }

  onKeyDown(event) {
    this.props.refreshKeyInput(event.keyCode, true);
    this.setState({ latestInput: { key: event.keyCode, state: "is down" } });
  }

  onKeyUp(event) {
    this.props.refreshKeyInput(event.keyCode, false);
    this.setState({ latestInput: { key: event.keyCode, state: "is up" } });
  }

  render() {
    return (
      <h3>
        Latest Input: {this.state.latestInput.key} {this.state.latestInput.state}
      </h3>
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
