import React from 'react';

export default React.createClass({
  isDisabled: function() {
    return !!this.props.reserver;
  },
  render: function() {
    return <div className="reserving">
      <button onClick={() => this.props.reserve()}
              disabled={this.isDisabled()}>
        <h1>Reserve</h1>
      </button>
    </div>;
  }
});
