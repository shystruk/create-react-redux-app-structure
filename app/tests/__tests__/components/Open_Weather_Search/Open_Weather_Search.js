import setupTests from './../../configurations/setupTests';
import React from 'react';
import renderer from 'react-test-renderer';
import Open_Weather_Search from './../../../../components/Open_Weather_Search/Open_Weather_Search';

describe('Open_Weather_Search', () => {
    it('should match snapshot', () => {
        const component = renderer.create(<Open_Weather_Search />);
        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });

    it('should have className app-open-weather-search', () => {
        const wrapper = global.shallow(<Open_Weather_Search />);

        expect(wrapper.find('.app-open-weather-search').hasClass('app-open-weather-search')).toBe(true);
    });
});

