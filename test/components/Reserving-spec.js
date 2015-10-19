import React from 'react/addons';
import Reserving from '../../src/components/Reserving';
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag} = React.addons.TestUtils;

describe('Reserving', () => {
  it('renders a button', () => {
    const component = renderIntoDocument(
      <Reserving />
    );

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    expect(buttons.length).to.equal(1);
    expect(buttons[0].textContent).to.equal('Reserve');
  })
});
