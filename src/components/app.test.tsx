import * as React from 'react';
import { shallow } from 'enzyme';
import App from './app';
import { isTSAnyKeyword, jsxEmptyExpression } from '@babel/types';

describe('Examining the syntax of Jest tests', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App />);
        console.log(wrapper.debug());
    })

    it('sums numbers', () => {
        //REAL CODE NOT HERE IN TEST ACTUALLY
        var sum = (num1:number, num2:number) => {
            console.log("dooty");
            return -1;
        };
        
        sum = jest.fn(() => {
            return 4;
        });

        expect(1 + 2).toEqual(3);
        expect(sum(1, 1)).toEqual(4);
    });
});

