import React from 'react';

import './MyTrash.scss';

class MyTrash extends React.Component {
  editEvent = (e) => {
    e.preventDefault();
    const trashId = 'placeholder123';
    this.props.history.push(`/edittrash/${trashId}`);
  }

  render() {
    return (
      <div className="MyTrash">
        <h5>MyTrash READ</h5>
        <button className="btn btn-dark" onClick={this.editEvent}>Edit Trash</button>
      </div>
    );
  }
}

export default MyTrash;
