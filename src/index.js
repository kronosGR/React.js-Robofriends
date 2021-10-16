import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { createStore } from 'redux';

import App from './containers/App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { searchRobots } from './reducers';

import 'tachyons';

const store = createStore(searchRobots);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/**
 * DEPLOYMENT INFO
 * https://create-react-app.dev/docs/deployment/#github-pages-https-pagesgithubcom
 */
