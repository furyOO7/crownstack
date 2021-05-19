import { Route, Switch, /*BrowserRouter,  Redirect */ } from 'react-router-dom'
import './App.css';
import Categorypage from './components/categorypage/categorypage';
import Landingpage from './components/landingpage/landingpage';
import Navbarcomp from './components/navbar/navbarcomp';
import {catalogData} from './constants/catalog'
function App() {
  return (
    <div className="App">
      <Navbarcomp catalogData={catalogData}/>
      <Route exact path='/'>
      
        <div className="main-container">
          <Landingpage />
        </div>
      </Route>
      <Switch>
        <Route exact path='/:location/:branch'>
          <Categorypage />
        </Route>
        <Route exact path='/:location/:branch/:cat'>
        <Categorypage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
