import Posts from './components/Posts';
import PostForm from './components/PostForm';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Redux Crash Course
        </p>
      </header>
      <div className="App">

        <PostForm />
        <hr />
        <Posts />
      </div>
    </>

  );
}

export default App;
