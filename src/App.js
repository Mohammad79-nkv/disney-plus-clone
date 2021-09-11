import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path="/" exact >
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
