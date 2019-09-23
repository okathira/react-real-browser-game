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

function Game() {
  return (
    <div className="game">
      <section className="game-menu">
        <CreateWindowButton />
      </section>
    </div>
  );
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
