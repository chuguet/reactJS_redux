import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
import { Provider } from 'react-redux';
import Ecommerce from './components/ecommerce';

const store = configureStore();

//console.log('ESTADO!', store.getState());
window.store = store;

ReactDOM.render(
	<Provider store={ store }>
		<Ecommerce/>
	</Provider>
	, document.getElementById('app'));
