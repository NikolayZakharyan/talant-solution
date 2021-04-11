import { observer } from 'mobx-react-lite';
import './App.css';
import Leftbar from './components/left-bar/Leftbar';
import Navbar from './components/navbar/navbar';
import store from './store/Store';
import { toJS } from 'mobx';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Customer from './components/Customer';
import List from './components/List';

const App = observer(() => {
  const { categoriesApi } = toJS(store);

  useEffect(() => {
    store.getData();
  }, []);

  return (
    <Router>
      <div className="App">
        <Leftbar />

        <Switch>
          <Route path="/" exact>
            <Navbar {...categoriesApi} />
          </Route>
          <Route path="/customer">
            <Customer />
          </Route>
          <Route path="/list">
            <List />
          </Route>
        </Switch>
      </div>
    </Router>
  );
});

export default App;
