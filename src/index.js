import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
// on line 7, ReactDOM.render takes 2 arguments
// the first is the component you want to render (here, App)
// it's convention to create one top-level component, in which all your other components will render
// the second is where to render it
// leave it as-is if your top-level component will be named App
// it's convention to have it named App
