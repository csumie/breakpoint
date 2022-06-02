// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, {Component} from 'react';

class Post extends Component {
  render () {
    return (
      <div>
      <h1>{this.props.title}</h1>
      <p>by {this.props.author}</p>
      <div>
      <p>{this.props.body}</p>
      </div>
      <h3>Comments:</h3>
      <p>{this.props.comments[0]}</p>
      </div>
    )
  }
}

export default Post

