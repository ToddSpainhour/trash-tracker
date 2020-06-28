import React from 'react';

import moment from 'moment';
import authData from '../../../helpers/data/authData';
import trashData from '../../../helpers/data/trashData';

import './CreateNewTrash.scss';

class CreateNewTrash extends React.Component {
  state = {
    trashName: '',
    trashDescription: '',
    materialId: [],
    selectedMaterial: '',
    isRecyclable: true,
    didYouRecycle: false,
  }

  componentDidMount() {
    trashData.getMaterialTypes()
      .then((materialId) => {
        this.setState({ materialId });
        const materialsArray = this.state.materialId;
        console.error('materialsArray is...', materialsArray);
      })
      .catch((err) => console.error('cannot get materials', err));
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ trashName: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ trashDescription: e.target.value });
  }

  // ------------------------------------------------------------------------drop down below

  materialChange = (selectedMaterial) => {
    this.setState({ selectedMaterial });
    // console.log('your onchange just fired');
  }

  // materialChange = (e) => {
  //   e.preventDefault();
  //   this.setState({ materialId: e.target.value });
  //   // console.log('your onchange just fired');
  // }

  // ------------------------------------------------------------------------drop down above

  recyclabaleChange = (e) => {
    this.setState({ isRecyclable: e.target.value });
  }

  didYouRecycleChange = (e) => {
    this.setState({ didYouRecycle: e.target.value });
  }

  saveNewTrash = (e) => {
    e.preventDefault();
    const {
      trashName,
      trashDescription,
      materialId,
      isRecyclable,
      didYouRecycle,
    } = this.state;
    const newTrashItem = {
      trashName,
      trashDescription,
      materialId,
      isRecyclable,
      didYouRecycle,
      dateAdded: moment().format('L'),
      uid: authData.getUid(),
    };
    trashData.postNewTrash(newTrashItem)
      .then(() => this.props.history.push('/trashfacts'))
      .catch((err) => console.error('cannot create new trash item', err));
  }

  render() {
    const {
      trashName,
      trashDescription,
      materialId,
    } = this.state;

    const materialsArray = this.state.materialId;
    const dropDownOptions = materialsArray.map((material) => <option key={material.id} value={material.name}>
      {material.name}
    </option>);

    return (
      <div className="CreateNewTrash col-12">
        <h5>Create New Trash Page</h5>

          <form>
{/* -----------------------------------------------------------drop down below--- */}
            <div>
              <p>What material is the made of?</p>
                <select
                  className="dropdown"
                  id="userSelectedMaterial"
                  value={materialId.name}
                  onChange={this.materialChange}>

                  <option hidden>Pick the Material</option>
                {dropDownOptions}
                </select>
            </div>
{/* ----------------------------------------------------------drop down above--- */}

            <div className="form-group">
              <label htmlFor="userCreatedItemName">Name</label>
                <input
                type="text"
                className="form-control"
                id="userCreatedItemName"
                value={trashName}
                onChange={this.nameChange}
                placeholder="Milk Carton"
                />
            </div>

            <div className="form-group">
              <label htmlFor="userCreatedItemDescription">Description</label>
              <input
              type="text"
              className="form-control"
              id="userCreatedItemDescription"
              value={trashDescription}
              onChange={this.descriptionChange}
              placeholder="One Gallon"
              />
            </div>

            {/* <div>
              <p>What material is the made of?</p>
                <select
                  className="dropdown"
                  id="userSelectedMaterial"
                  value={materialId}
                  onChange={this.materialChange}>

                  <option hidden>Pick the Material</option>
                  <option>Paper</option>
                  <option>Plastic</option>
                  <option>Cardboard</option>
                  <option>Glass</option>
                  <option>Metal</option>
                  <option>Rubber</option>
                  <option>Styrofoam</option>
                  <option>Food</option>
                  <option>Other</option>
                </select>
            </div> */}

          <div className="isRecyclableRadio">
            <h6>Is the item recyclable?</h6>
              <div className="form-check">
                <input required
                className="form-check-input"
                type="radio"
                name="recyclable"
                id="notRecyclable"
                value={true}
                onChange={this.recyclabaleChange}
                />
                <label className="form-check-label" htmlFor="notRecyclable">
                  Yes, it is recyclable.
                </label>
              </div>

              <div className="form-check">
                <input
                className="form-check-input"
                type="radio"
                name="recyclable"
                id="isRecyclable"
                value={false}
                onChange={this.recyclabaleChange}
                />
                  <label className="form-check-label" htmlFor="isRecyclable">
                  No. This item is not recyclable.
                </label>
              </div>
          </div>

          <div className="didYouRecycleRadio">
            <h6>Did you recycle this item?</h6>
            <div className="form-check">
              <input
              className="form-check-input"
              type="radio" name="iDidRecycle"
              id="didRecycle"
              value={true}
              onChange={this.didYouRecycleChange}
              />
                <label className="form-check-label" htmlFor="didRecycle">
                Yes, I chose to recycle this item.
              </label>
            </div>

            <div className="form-check">
              <input className="form-check-input"
              type="radio"
              name="iDidRecycle"
              id="didNotRecycle"
              value={false}
              onChange={this.didYouRecycleChange}
              />
                <label className="form-check-label" htmlFor="didNotRecycle">
                No. I didn't recycle this item.
              </label>

            </div>
          </div>

            <button type="submit" className="btn btn-dark btn-sm" onClick={this.saveNewTrash}>Submit More Trash</button>
          </form>
      </div>
    );
  }
}

export default CreateNewTrash;
