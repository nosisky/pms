import Location from '../models/Location';

const LocationController = {
  /**
   * @description Creates a new location data
   *
   * @param {Object} req - request
   *
   * @param {Object} res - response
   *
   * @return {Object} - returns newly created location
   */
  createLocation(req, res) {
    const newLocation = new Location(req.locationData);
    newLocation.save().then((location) => {
      res.status(201).send({
        location,
        message: 'Location created successfully',
      });
    });
  },

  /**
   * @description - Fetches all locations in the database
   *
   * @param {Object} req - request
   *
   * @param {Object} res - response
   *
   * @returns {Array} - Array of all locations in the database
   */
  getAllLocations(req, res) {
    Location.find().then((location) => {
      if (location.length > 0) {
        return res.status(200).send(location);
      }
      return res.status(404).send({
        message: 'There is no location in the database',
      });
    });
  },

  /**
   * Retrieves a single document
   *
   * @param {Object} req - request
   *
   * @param {Object} res - response
	 *
	 * @returns {Object} - API response
   */
  getOneLocation(req, res) {
    Location.findOne({
      _id: req.params.id,
    })
      .then((location) => {
        if (location) {
          const newLocation = location.toObject();
          return res.status(200).send(newLocation);
        }
        return res.status(404).send({
          message: 'Location not found',
        });
      })
      .catch(() => res.status(500)
        .send({ message: 'Invalid location ID supplied' }));
  },

  /**
   * @description - Edits a location
   *
   * @param {Object} req - request
   *
   * @param {Object} res - response
   * 
	 * @returns {Object} - API response
   */
  editLocation(req, res) {
    Location.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
      .then(() => res.status(200).send({
        message: 'Location updated successfully',
      }))
      .catch(() => res.status(500).send({
        message: 'error occured, location ID is invalid',
      }));
  },

  /**
   * @description - Deletes a location
   *
   * @param {Object} req - request
   *
   * @param {Object} res - response
	 *
	 * @returns {Object} - API response
   */
  deleteLocation(req, res) {
    Location.findOneAndRemove({ _id: req.params.id })
      .then(deletedLocation => res.status(200).send({
        // eslint-disable-next-line no-underscore-dangle
        _id: deletedLocation._id,
        message: 'Location successfully deleted',
      }))
      .catch(() => res.status(500).send({
        message: 'Error occured, location ID is invalid',
      }));
  },
};

export default LocationController;
