/**
 * Below are the routes for the entire app
 * All requests with the valid base path will enter from app.ts to here
 * The requests will then go to the validators, the validation error handler, and then the controller
 * Each endpoint will have a post, get, patch, and delete options
 * @module Routes
 */

const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');
const express = require("express");
const routes = express.Router();
require('dotenv').config();

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: `https://` + process.env.AUTH0_BASE_URL + '/',
});

const { validationErrorHandler } = require('../validationAndSanitation/errorValidation');
const userGameStatisticsController = require ('../controllers/userGameStatistics.controller');

const { validateUserGameStatisticsBodyPOST, validateUserGameStatisticsParameters, validateUserGameStatisticsPATCH } = require("../validationAndSanitation/userGameStatistics.validationAndSanitation");

routes.post("/user/gameStatistics", checkJwt, validateUserGameStatisticsBodyPOST,  validationErrorHandler, userGameStatisticsController.create);
routes.get("/user/gameStatistics", checkJwt, validateUserGameStatisticsParameters, validationErrorHandler, userGameStatisticsController.search);
routes.patch("/user/gameStatistics", checkJwt, validateUserGameStatisticsParameters, validateUserGameStatisticsPATCH, validationErrorHandler, userGameStatisticsController.update);
routes.delete("/user/gameStatistics", checkJwt, validateUserGameStatisticsParameters, validationErrorHandler, userGameStatisticsController.remove);

export = routes;

