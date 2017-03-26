import React from 'react';
import ReactDOM from 'react-dom';
import DevTools from 'mobx-react-devtools'
import {Provider} from 'mobx-react'

import SearchLayout from './SearchLayout';
import SearchStore from './SearchStore';

const searchStore = new SearchStore();
searchStore.initializeDummyData();

const Search = () => {
	return(
		<Provider searchStore={searchStore}>
			<SearchLayout/>
		</Provider>
	)
}
export default Search