import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import SearchBar from './SearchBar';

it('renders without crashing', () => {
    shallow(<App />);
});

it(`mounts the SearchBar component`, () => {
    const wrapper = shallow(<App />);
    const searchBar = <SearchBar />;
    expect(wrapper.contains(searchBar)).toEqual(true);
});
