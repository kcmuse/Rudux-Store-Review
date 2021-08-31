import { createStore } from 'redux';
import reducers from './reducers';

// This will give access to redux to all of the reducers!
export default createStore(reducers);