import mongoose from 'mongoose';

const { Schema } = mongoose;

const LocationSchema = new Schema({
  location: {
    type: String,
    required: 'Location is required'
  },
  maleLocation: {
    type: Number,
    required: 'Male location is required'
  },
  femaleLocation: {
    type: Number,
    required: 'Please enter female location'
  },
  totalResidents: {
    type: Number,
    required: 'Total residents is required'
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

const Location = (mongoose.model('Location', LocationSchema));

export default Location;
