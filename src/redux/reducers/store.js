import { createStore } from 'redux';
import reducers from './index';

const store = createStore(reducers, {});

export default store;
