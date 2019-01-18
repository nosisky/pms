
const Validation = {

  /**
 * Checks if location id is supplied
 *
 * @param {Object} req - request
 *
 * @param {Object} res - response
 *
 * @param {Function} next - Call back function
 *
 * @returns { Object } - containing error message
 */
  checkLocationId(req, res, next) {
    const querier = req.params.id || req.body.locationId;
    if (!querier) {
      return res.status(400).send({
        message: 'Location ID is required'
      });
    }
    next();
  },

  /**
   *
   * @description - Validates User Input when adding a new location
   *
   * @param {Object} req - request
   *
   * @param {Object} res - response
   *
   * @param {Object} next - call back function
   *
   * @returns {Object} - Object containing error message
   */
  checkLocationInput(req, res, next) {
    req.checkBody({
      maleLocation: {
        notEmpty: true,
        errorMessage: 'Male location is required!'
      },
      femaleLocation: {
        notEmpty: true,
        errorMessage: 'Female location is required'
      },
      location: {
        notEmpty: true,
        errorMessage: 'Location is required'
      }
    });
    const errors = req.validationErrors();
    if (errors) {
      const allErrors = [];
      errors.forEach((error) => {
        const errorMessage = error.msg;
        allErrors.push(errorMessage);
      });
      return res.status(400).json({
        message: allErrors[0]
      });
    }
    const { maleLocation, femaleLocation, location  } = req.body;
    const totalResidents = Number(maleLocation) + Number(femaleLocation);

    req.locationData = {
      maleLocation,
      femaleLocation,
      totalResidents,
      location
    }
    next();
  }
};

export default Validation;
