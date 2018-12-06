//import 'materialize-css/dist/css/materialize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

//import InfoTable from './InfoTable';
//import App from './components/App';
//import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<InfoTable />, document.getElementById('root'));
//registerServiceWorker();

import App from './components/App';
import reducers from './reducers';

//const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
//const store = createStore(reducers, applyMiddleware(reduxThunk));

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  //<Provider store={store}>
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
