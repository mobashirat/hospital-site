import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">



      <Router>
        <Header></Header>
        <Home></Home>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
