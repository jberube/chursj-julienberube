import React from 'react';
import { shallow } from 'enzyme';
import { noop } from 'node-noop';

import App from './App';
import SearchBar from './SearchBar';

it('renders without crashing', () => {
    shallow(<App />);
});

it(`mounts the SearchBar component`, () => {
    const wrapper = shallow(<App />);
    const searchBar = <SearchBar onSearch={noop} />;
    expect(wrapper.contains(searchBar)).toEqual(true);
});
