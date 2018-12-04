import React, { Component } from 'react';
import { connect } from 'react-redux';


class TestComponent extends Component {
render() {
return (
<div>
  <p>Test</p>
</div>
);
}
}
export default connect()(TestComponent);