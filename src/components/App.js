import React from 'react';
import '../styles/App.css';

import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
      </div>
    );
  }
}

export default App;
