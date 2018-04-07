jest.mock('./../../../../resources/Open_Weather.resource', () => ({
    getWeatherData: jest.fn(() => {
        return Promise.resolve({
            name: 'London',
            sys: {country: 'UK'},
            weather: [{description: 'cloud'}],
            main: {temp: '3'},
            wind: {speed: '20'},
            clouds: {all: 'cloud all'}
        });
    })
}));


import setupTests from './../../configurations/setupTests';
import React from 'react';
import renderer from 'react-test-renderer';
import Open_Weather_Search from './../../../../components/Open_Weather_Search/Open_Weather_Search';
import { getWeatherData } from './../../../../resources/Open_Weather.resource';
import { KEY_CODES } from './../../../../constants/keyCodes.constant';


describe('Open_Weather_Search', () => {
    it('should only pass :)', () => {
        expect(1).toBe(1);
    });

    // TODO: have to mock store
    // it('should match snapshot', () => {
    //     const component = renderer.create(<Open_Weather_Search weather={weatherStore} />);
    //     const json = component.toJSON();
    //
    //     expect(json).toMatchSnapshot();
    // });
    //
    // it('should have className app-open-weather-search', () => {
    //     const wrapper = global.shallow(<Open_Weather_Search weather={weatherStore} />);
    //
    //     expect(wrapper.find('.app-open-weather-search').hasClass('app-open-weather-search')).toBe(true);
    // });
    //
    // it('should call handleSearch on enter key up', () => {
    //     const event = {keyCode: KEY_CODES.ENTER};
    //     const spy = jest.spyOn(Open_Weather_Search.prototype, 'handleSearch');
    //     const wrapper = mount(<Open_Weather_Search weather={weatherStore} />);
    //
    //     wrapper.instance().handleKeyUp(event);
    //
    //     expect(spy).toHaveBeenCalled();
    // });
    //
    // it('should get weather by criteria', () => {
    //     const wrapper = mount(<Open_Weather_Search weather={weatherStore} />);
    //
    //     wrapper.instance().handleSearch();
    //
    //     expect(getWeatherData).toHaveBeenCalled();
    // });
});
