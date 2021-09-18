import './App.css';
import {BrowserRouter as Router, Switch, Route } from  'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import Privacy from './pages/privacy';
import Uso from './pages/uso';

function App() {
  return (
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/contact' component={SigninPage}/>
          <Route path='/privacy' component={Privacy} />
          <Route path='/use' component={Uso}/>
        </Switch>
      </Router>
  );
}

export default App;