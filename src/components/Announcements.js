import React from 'react';
import { Col } from 'react-flexbox-grid';

import AnnouncementItem from './AnnouncementItem';

class Announcements extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      announcements: []
    }
  }

  async componentDidMount() {
    const response = await fetch('/announcements.json');
    const data = await response.json();

    this.setState({
      loading: false,
      announcements: data
    });
  }

  render() {
    if (this.state.loading) {
      return (
        // TODO: Improve announcement loading style
        <span>Loading...</span>
      );
    }

    const announcementItems = this.state.announcements.map((a, i) =>
      <AnnouncementItem key={ i } title={ a.title } content={ a.content } />
    );

    return (
      <Col xs={12} md={4} className='announcements'>
        { announcementItems }
      </Col>
    );
  }
}

export default Announcements;
