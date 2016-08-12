jest.unmock('../../src/filtering/filter');

import React from 'react';
import {shallow} from 'enzyme';
import {Filter} from '../../src/filtering/filter';

describe('Filter', () => {

    it('has empty filtering text by default', () => {
        // when
        const filter = shallow(
            <Filter/>
        );

        // then
        expect(filter.props().value).toEqual('');
    });

    it('changes provided filtering text', () => {
        // given
        const state = {
            textToUse : 'abc'
        };
        const filter = shallow(
            <Filter filteringText={state.textToUse}
                    onFilteringTextChange={text => state.textToUse = text}/>
        );

        // when
        filter.simulate('change', { target : { value : 'def' } });

        expect(state.textToUse).toEqual('def');
    });

});