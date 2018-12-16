import React from 'react';
import { shallow } from 'enzyme';
import { noop } from 'node-noop';

import SearchBar from './SearchBar';

it('renders without crashing', () => {
    shallow(<SearchBar onSearch={noop} />);
});

it('include a text input', () => {
    const wrapper = shallow(<SearchBar onSearch={noop} />);
    const input = wrapper.find('input');
    expect(input.length).toEqual(1);
});

it('show a hint of of it works', () => {
    const wrapper = shallow(<SearchBar onSearch={noop} />);
    const input = wrapper.find('input');
    expect(input.first().props().placeholder).toEqual('keyword');
});

it('trigger a search when user presses `Enter`', () => {
    const searchFn = jest.fn();
    const wrapper = shallow(<SearchBar onSearch={searchFn} />);

    // fake some input here, then press <enter>
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'doggo'} });
    input.simulate('keypress', { key: 'Enter' });

    expect(searchFn).toHaveBeenCalledTimes(1);
    expect(searchFn).toHaveBeenCalledWith('doggo');
});
