import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import { store } from '../store/initStore';

import App from './App';
import SearchBar from '../components/SearchBar';

const givenAMountedApp = () => mount(
    <Provider store={store}>
        <App />
    </Provider>
);

it('renders without crashing', () => {
    shallow(<App />);
});

it.only('mounts the SearchBar component', () => {
    const wrapper = givenAMountedApp();

    const searchBar = wrapper.find(SearchBar);
    expect(searchBar.length).toEqual(1);
});

it('delegates searching for photos to the PhotoProvider', () => {
    const wrapper = givenAMountedApp();

    const input = wrapper.find(SearchBar).find('input');
    input.simulate('change', { target: { value: 'kitten'} });
    input.simulate('keypress', { key: 'Enter' });

    const state = store.getState();
    expect(state.images.searchTerm).toEqual('kitten');
});
