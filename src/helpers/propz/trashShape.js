import PropTypes from 'prop-types';

const trashShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  trashName: PropTypes.string.isRequired,
  trashDescription: PropTypes.string.isRequired,
  materialId: PropTypes.string.isRequired,
  isRecyclable: PropTypes.bool.isRequired,
  didYouRecycle: PropTypes.bool.isRequired,
  dateAdded: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { trashShape };
