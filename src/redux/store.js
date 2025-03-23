import {createStore} from 'redux'
import rootReducers from './reducer/reducers'

const store = createStore(rootReducers);

export default store;

