/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Signup from './adapters/primary/components/Signup/Signup';

describe('App', () => {
  let AppWrapper;
  beforeAll(() => {
    /** 'shallow' only render the component, not children */
    AppWrapper = shallow(<App />);
  });

  it('must find required components', () => {
    const findSignup = AppWrapper.find(Signup);
    const findSwitch = AppWrapper.find(Switch);
    const findRoute = AppWrapper.find(Route);
    expect(findSignup).not.toBeNull();
    expect(findSwitch).not.toBeNull();
    expect(findRoute).not.toBeNull();
  });

  it('must be wrapped in a main tag for SEO', () => {
    expect(AppWrapper.find('main')).not.toBeNull();
  });
});
