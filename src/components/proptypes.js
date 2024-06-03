import PropTypes from 'prop-types';

const projectProptypes = {
  slides: {
    alt: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  },
};

export default projectProptypes;
