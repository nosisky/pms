import express from 'express';
import LocationController from '../controllers/LocationController';
import Validation from '../middleware/Validation';

const {
  getAllLocations, editLocation, deleteLocation, createLocation, getOneLocation,
} = LocationController;

const { checkLocationInput, checkLocationId } = Validation;

const locationRouter = express.Router();

locationRouter
  .route('/')
  .post(checkLocationInput, createLocation)
  .get(getAllLocations);

locationRouter.route('/:id')
  .put(checkLocationId, editLocation)
  .get(checkLocationId, getOneLocation)
  .delete(checkLocationId, deleteLocation);

export default locationRouter;
