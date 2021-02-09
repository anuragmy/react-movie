import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { findByTestAtrr } from '../../utils';
import { ShallowMock } from './ShallowMock';
import MovieCard from '.';

configure({ adapter: new Adapter() });

const setUp = (props = {}) => shallow(ShallowMock(<MovieCard />, props));

describe('Movie Card Component', () => {
  let component;
  beforeEach(() => (component = setUp(<MovieCard />)));
  it('it should render correctly', () => {
    const wrapper = findByTestAtrr(component, 'movieCardComponent');
    expect(wrapper.length).toBe(1);
  });

  it('it should render the movie cover', () => {
    const wrapper = findByTestAtrr(component, 'movieImage');
    expect(wrapper.length).toBe(1);
  });
});
