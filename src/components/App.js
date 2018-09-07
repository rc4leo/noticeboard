import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import '../styles/App.css';

import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />

        <Grid fluid>
          <Row>
            <Col xs={12} md={9}>
              calendar
            </Col>

            <Col xs={12} md={3}>
              announcements
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              posters
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
