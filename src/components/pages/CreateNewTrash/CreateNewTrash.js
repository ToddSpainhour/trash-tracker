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

  materialChange = (e) => {
    this.setState({ selectedMaterial: e.target.value });
  }

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
      isRecyclable,
      didYouRecycle,
      selectedMaterial,
    } = this.state;
    const newTrashItem = {
      trashName,
      trashDescription,
      materialId: selectedMaterial,
      isRecyclable,
      didYouRecycle,
      timestampForSorting: Date.now(),
      dateAdded: moment().format('L'), // this is to be displayed on the card
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

    console.log('this.state.isRecyclable.checked === false:', this.state.isRecyclable.checked === false);

    let submitButton;
    if (this.state.trashName.length === 0
        || this.state.trashDescription.length === 0
        || this.state.selectedMaterial.length === 0
        // || this.state.isRecyclable.checked
    ) {
      submitButton = <button disabled type="submit" className="btn btn-sm">Fill in more info above</button>;
    } else {
      submitButton = <button type="submit" className="btn btn-sm" onClick={this.saveNewTrash}>Submit More Trash</button>;
    }

    return (
      <div className="CreateNewTrash col-sm-12 col-sm-offset-0 col-md-10 offset-md-1">
        <h5 className="form-title">Log a New Trash Item Below</h5>

          <form>

            <div className="form-group name-field col-sm-12 col-sm-offset-0 col-md-8 offset-md-2">
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

            <div className="form-group description-field col-sm-12 col-sm-offset-0 col-md-8 offset-md-2">
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

            <div>
              <p className="dropdown-text">What material is the item made of?</p>
                <select
                  className="dropdown"
                  id="userSelectedMaterial"
                  value={materialId.name}
                  onChange={this.materialChange}>

                  <option hidden>Pick the Material</option>
                {dropDownOptions}
                </select>
            </div>

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

            {/* <button type="submit" disabled={this.state.trashName.length === 0} className="btn btn-sm" onClick={this.saveNewTrash}>Submit More Trash</button> */}
            {/* <button type="submit" className="btn btn-sm" onClick={this.saveNewTrash}>Submit More Trash</button> */}
            {submitButton}
          </form>
      </div>
    );
  }
}

export default CreateNewTrash;
