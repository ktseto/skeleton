import React from 'react';
import { mount, shallow, render } from 'enzyme';
import App from '../components/app';

describe('App', () => {
  it('passes', async () => {
    expect(1).toEqual(1);
  });

  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);

    expect(component).toMatchSnapshot();
  });
});
