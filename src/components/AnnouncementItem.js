import React from 'react';

import '../styles/AnnouncementItem.css';

class AnnouncementItem extends React.Component {
  render() {
    return (
      <div className='announcement-item'>
        <p><strong>{ this.props.title }</strong></p>

        <div dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </div>
    );
  }
}

export default AnnouncementItem;
