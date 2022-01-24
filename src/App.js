import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './components/Main';
import Redirect from './components/Redirect';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main/>            
          </Route>
          <Route path="/:id">
            <Redirect/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
