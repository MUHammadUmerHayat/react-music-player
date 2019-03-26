import './assets/static/css/reset.css';
import './assets/static/css/common.css';
import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './reducers/reducers';


import List from './components/List/index';
import Player from './components/Player/index';
import Header from './components/Header/index';

let store = createStore(RootReducer);
const emptyStyle = {
  textAlign: 'center',
  marginTop: '50px',
  fontSize: 'large'
}
export default (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/player" render={()=>(
            store.getState().musicStatus.currentMusicItem 
            ? <Player />
            : <p style={emptyStyle}>No music is playing, please select music</p>
            )}
          />
        </Switch>
      </div>
    </Router>
  </Provider>
);
