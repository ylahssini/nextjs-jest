import React from 'react';
import { mount } from 'enzyme';
import HomePage from '../pages';

describe('Pages', () => {
    describe('Home page', () => {
        it('Should render without throwing an error', function() {
            const wrap = mount(<HomePage />);
            expect(wrap.find('h1').text()).toBe('Salam world');
        });
    });
});