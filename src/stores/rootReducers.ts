import { combineReducers } from 'redux';

// reducers
import app from 'redux/app.reducer';
import auth from 'redux/auth.reducer';

const reducers = combineReducers({
  app,
  auth,
});

export default reducers;
