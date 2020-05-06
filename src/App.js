import React from 'react';
import Resume from './resume'
import './App.css';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <Resume source={this.props.source}/>
    );
  }
}

export default App;
