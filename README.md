# Population Management System

## Technologies Used
* NodeJS
* Express
* MongoDB
* Mongoose
* Babel


## Installation
1.  Git clone this repository `https://github.com/nosisky/pms.git`
2.  Change your directory `cd pms`
3.  Install all dependencies `npm install`
4.  Create .env file which will be used to load environment variables see sample in `.env.example` file in the project
7.  Start the app `npm run start` for development 
8.  Navigate to `localhost:3000` on postman to test the endpoints


## Endpoints
* [POST] /api/v1/locations - To create a new location
* [GET] /api/v1/locations - To Get all locations
* [GET] /api/v1/locations/:locationId - To Get a single location data
* [PUT] /api/v1/locations/:locationId - To Update location
* [DELETE] /api/v1/locations/:locationId - To delete location
