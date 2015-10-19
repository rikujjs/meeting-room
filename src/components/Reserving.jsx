import React from 'react';
import StatusDisplay from './StatusDisplay';
import Reserve from './Reserve';

export default React.createClass({
  render: function() {
    return <div>
      <h1>MEETING ROOM X</h1>
        <StatusDisplay ref="reserver" reserver={this.props.reserver} />
        <Reserve {...this.props}/>
    </div>;
  }
});
