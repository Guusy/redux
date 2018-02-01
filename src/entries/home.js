import React from 'react';
import { hydrate } from 'react-dom';
import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist';
//import data from '../api.json';
// console.log('Hola mundo!' )
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/index';

import normalizedData from '../Schemas/index';
import {Map as map} from 'immutable';

console.log(normalizedData);

const store = createStore(
    reducer,
    map(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);
console.log(store.getState());

const homeContainer = document.getElementById('home-container')

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;
hydrate(
    < Provider store={store} >
        <Home />
    </Provider >

    , homeContainer);

