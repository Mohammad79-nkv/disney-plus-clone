import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';

function App() {
  return (
    <div className="App">
      <Header/>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/home" component={Home}/>
          <Route path="/movie/:id" component={Movie}/>
        </Switch>
    </div>
  );
}

export default App;
