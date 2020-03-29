import React, { Component } from 'react';
import './App.css';
import Hangman from './Hangman';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(
      `%c 
      👋 Oh, Hi there, Curious web lover!
      `,
      'color: #d74034; font-size:24px;'
    );
    console.log(
      `%c
    ✨ Like what you see? We could work together!
      
    🐛 Found a bug? Please, let me know by e-mail, twitter, github issue...

    🛠 Code available here: https://github.com/damnitrahul/react-hangman
      
    📬 Find me here: https://twitter.com/damnitrahul
      
    Let the debug begin!
    
    Bonus meme: https://i.redd.it/2k1ut81gpcl01.png
    `,
      'font-size:16px'
    );
  }
  render() {
    return (
      <div className="App">
        <Hangman />
      </div>
    );
  }
}

export default App;
