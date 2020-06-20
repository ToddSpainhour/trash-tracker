import React from 'react';

import './EditTrash.scss';

class EditTrash extends React.Component {
  render() {
    const editId = this.props.match.params.trashId;
    return (
      <div className="UpdateTrash">
        <h5>Edit Trash Page</h5>
    <h6>The trash id is {editId}</h6>
      </div>
    );
  }
}

export default EditTrash;
