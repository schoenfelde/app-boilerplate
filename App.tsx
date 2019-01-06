import React from 'react';
import { Provider, connect } from 'react-redux';
import store from './lib/redux/store';
import { User } from './lib/common/interface';
import Root from './lib/screens/Root';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root/>
      </Provider>
    );
  }
}