import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';

import '../styles/App.css';
import Announcements from './Announcements';
import Calendar from'./Calendar';
import Header from './Header';
import Posters from './Posters';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />

        <Grid fluid>
          <Row>
            <Calendar />

            <Announcements />
          </Row>

          <Row>
            <Posters />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
