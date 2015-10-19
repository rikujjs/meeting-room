import React from 'react/addons';
import Reserving from '../../src/components/Reserving';
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate} = React.addons.TestUtils;

describe('Reserving', () => {
  it('renders a button', () => {
    const component = renderIntoDocument(
      <Reserving />
    );

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    expect(buttons.length).to.equal(1);
    expect(buttons[0].textContent).to.equal('Reserve');
  })

  it('invoke reserve callback when button clicked', () => {
    let reserved = false;
    const reserve = () => reserved = !reserved;

    const component = renderIntoDocument(
      <Reserving reserve={reserve} />
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    Simulate.click(buttons[0]);
    expect(reserved).to.equal(true);
  });

  it('disables button when reserver is given', () => {
    const component = renderIntoDocument(
      <Reserving reserver="Riku" />
    );

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    expect(buttons.length).to.equal(1);
    expect(buttons[0].hasAttribute('disabled')).to.equal(true);
  });

  it('renders reservers name when room is reserved', () => {
    const component = renderIntoDocument(
      <Reserving reserver="Riku" />
    );

    const reserver = React.findDOMNode(component.refs.reserver);
    expect(reserver).to.be.ok;
    expect(reserver.textContent).to.contain('Riku');
  });
});
