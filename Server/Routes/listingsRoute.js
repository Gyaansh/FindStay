import express from 'express' ;
import listings from '../Controllers/listings.js';
import newListing from '../Controllers/newListing.js'
import getListingByid from '../Controllers/getListingById.js';
import addReview from '../Controllers/addReview.js';
import wrapAsync from '../Utils/wrapAsync.js';
import {schemaValidator,reviewValidator,} from '../Models/Validator.js';
import isLoggedIn from '../Utils/isLoggedIn.js';
import updateListing from '../Controllers/updateListing.js';

const Router = express.Router();

Router.get('/',wrapAsync(listings));
Router.post('/newlisting',isLoggedIn,schemaValidator,wrapAsync(newListing));
// Handle specific listing routes
Router.get('/:id',wrapAsync(getListingByid));

// Route to add a review for a specific listing, with input validation
Router.post('/:id/reviews',isLoggedIn,reviewValidator, wrapAsync(addReview));

Router.put('/edit/:id',schemaValidator,isLoggedIn,wrapAsync(updateListing));

export default Router;
