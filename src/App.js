import React from 'react';
import Game from './components/chess/game';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Game />
    );
  }
}

export default App;
