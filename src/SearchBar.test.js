import React from 'react';
import { shallow } from 'enzyme';

import SearchBar from './SearchBar';

it('renders without crashing', () => {
    shallow(<SearchBar />);
});

it('include a text input', () => {
    const wrapper = shallow(<SearchBar />);
    const input = wrapper.find('input');
    expect(input.length).toEqual(1);
});

it('show a hint of of it works', () => {
    const wrapper = shallow(<SearchBar />);
    const input = wrapper.find('input');
    expect(input.first().props().placeholder).toEqual('keyword');
});
