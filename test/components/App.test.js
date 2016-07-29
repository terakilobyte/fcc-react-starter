import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';

import App from '../../src/components/App';

test('shallow', t => {
  const wrapper = shallow(<App key={1} ref="test" />);
  t.is(wrapper.contains(<h1>Hello World</h1>), true);
});

