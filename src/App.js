import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer';

import ChooseRoom from './screens/choose-room';
import CreateRoom from './screens/create-room';
import MainGame from './screens/main-game';
import Navbar from './components/navbar';
import Profile from './screens/profile';
import Ranking from './screens/ranking';
import Welcome from './screens/welcome';
import AuthContext from './store/auth-context';

import './App.css';

const App = () => {
  const store = createStore(rootReducer);
  const authCtx = useContext(AuthContext);
  
  if (!authCtx.isLoggedIn) {
    return (
      <Provider store={store}>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome' />
          </Route>
          <Route path='/welcome'>
            <Welcome />
          </Route>
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <Navbar></Navbar>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/choose-room' />
        </Route>
        <Route path='/main-game/:roomId'>
          <MainGame />
        </Route>
        <Route path='/create-room'>
          <CreateRoom />
        </Route>
        <Route path='/choose-room/:error'>
          <ChooseRoom />
        </Route>
        <Route path='/choose-room'>
          <ChooseRoom />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/ranking'>
          <Ranking />
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Provider>
  );
};

export default App;
