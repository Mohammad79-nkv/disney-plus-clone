import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header/>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/home" component={Home}/>
        </Switch>
    </div>
  );
}

export default App;
