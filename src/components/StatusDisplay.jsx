import React from 'react';

export default React.createClass({
  render: function() {
    return <div className="reserver">
      {this.props.reserver ?
        <h3>Reserved for {this.props.reserver}</h3> :
        <h3>It's free!</h3>}
    </div>;
  }
});
