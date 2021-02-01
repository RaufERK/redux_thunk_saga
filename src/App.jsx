import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import SagaPic from './components/SagaPic';
import ThunkList from './components/ThunkList';
import ThunkPic from './components/ThunkPic';

function App() {
  return (
    <div className="App">
      <h1>APP</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Thunk list</Link>
            </li>
            <li>
              <Link to="/thunkpic">Thunk Picture</Link>
            </li>
            <li>
              <Link to="/sagapic">Saga Picture</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/thunkpic">
            <ThunkPic />
          </Route>
          <Route path="/sagapic">
            <SagaPic />
          </Route>
          <Route path="/">
            <ThunkList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
