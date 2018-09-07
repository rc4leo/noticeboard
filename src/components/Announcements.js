import React from 'react';
import { Col } from 'react-flexbox-grid';

import '../styles/Announcements.css';

class Announcements extends React.Component {
  render() {
    return (
      <Col xs={12} md={4}>
        <h1>Announcements</h1>
      </Col>
    );
  }
}

export default Announcements;
