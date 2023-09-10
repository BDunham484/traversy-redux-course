import { Provider } from 'react-redux';
import store from './store';
import Posts from './components/Posts';
import PostForm from './components/PostForm';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>

  );
}

export default App;
