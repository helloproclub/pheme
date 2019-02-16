import React from 'react';
import renderer from 'react-test-renderer';
import Contacts from './Contacts';

describe('Contacts', () => {
  const props = {
    contacts: {
      facebook: 'helloproclub',
      email: 'helloproclub',
      twitter: 'helloproclub',
      github: 'helloproclub',
      rss: 'rss.xml',
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Contacts {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
