import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/reducers/store';

it('Test if App renders correctly', () => {
  const TREE = TestRenderer.create(
    <Provider store={store}>
      <App />
    </Provider>,
  ); expect(TREE).toMatchSnapshot();
});
