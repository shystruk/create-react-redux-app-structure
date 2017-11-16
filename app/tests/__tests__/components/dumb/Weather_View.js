import setupTests from './../../configurations/setupTests';
import React from 'react';
import renderer from 'react-test-renderer';
import Weather_View from './../../../../components/dumb/Weather_View';

describe('Weather_View', () => {
    it('should match snapshot', () => {
        const component = renderer.create(<Weather_View />);
        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });
});
