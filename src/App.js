import './App.css';
import { HashRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Main from './pages/Main/Main';
import AddAnEvent from './pages/AddAnEvent/AddAnEvent';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Switch>
          <Route path='/addAnEvent' render={() => <AddAnEvent />} />
          <Route path='/' render={() => <Main />} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
