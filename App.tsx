import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './lib/redux/store';
import Navigation from './lib/screens/Navigation';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation  />
      </Provider>
    );
  }
}