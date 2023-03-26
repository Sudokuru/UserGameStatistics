/**
 * This is the controller file for the puzzle endpoint
 * This file is called by the router file and calls the service file
 * There are four main functions {@link createUserGameStatistics}, {@link searchUserGameStatistics},
 * {@link updateUserGameStatistics}, and {@link removeUserGameStatistics}
 * The main purpose of the controller is to make sure that only validated and sanitized data
 * moves on to the service function
 * @module UserGameStatisticsController
 */

import {matchedData} from "express-validator";
const userActiveGamesService = require('../services/userActiveGames.service');

/**
 * Returns 201 if userActiveGameService is successful
 * Otherwise catches error and sends to our errorHandler
 * Takes sanitized input and sends it to userActiveGamesService
 * @param req This is the request object
 * @param res This is the response object
 * @param next This takes us to the errorHandler if request fails
 */
async function createUserGameStatistics(req, res, next) {

    const allData = Object.values(matchedData(req, { locations: ['body'] }));
    allData.pop();

    try {
        // override successful completion code of 200 to 201 for successful object creation
        res.status(201).json(await userActiveGamesService.createUserActiveGames(allData));
    } catch(err) {
        next(err);
    }
}

/**
 * Returns 200 if userActiveGameService is successful
 * Otherwise catches error and sends to our errorHandler
 * Takes sanitized input and sends it to userActiveGamesService
 * @param req This is the request object
 * @param res This is the response object
 * @param next This takes us to the errorHandler if request fails
 */
async function searchUserGameStatistics(req, res, next) {

    const allData = matchedData(req, { locations: ['query'] });

    try {
        res.json(await userActiveGamesService.searchUserGameStatistics(allData));
    } catch(err) {
        next(err);
    }
}

/**
 * Returns 200 if userActiveGamesService is successful
 * Otherwise catches error and sends to our errorHandler
 * Takes sanitized input and sends it to userActiveGamesService
 * @param req This is the request object
 * @param res This is the response object
 * @param next This takes us to the errorHandler if request fails
 */
async function updateUserGameStatistics(req, res, next) {

    const queryData = matchedData(req, { locations: ['query'] });
    const bodyData = matchedData(req, { locations: ['body'] });
    try {
        res.json(await userActiveGamesService.updateUserGameStatistics(bodyData, queryData));
    } catch(err) {
        next(err);
    }
}

/**
 * Returns 200 if userGameStatisticsService is successful
 * Otherwise catches error and sends to our errorHandler
 * Takes sanitized input and sends it to userGameStatisticsService
 * @param req This is the request object
 * @param res This is the response object
 * @param next This takes us to the errorHandler if request fails
 */
async function removeUserGameStatistics(req, res, next) {

    const allData = matchedData(req, { locations: ['query'] });
    try {
        res.json(await userActiveGamesService.removeUserGameStatistics(allData));
    } catch(err) {
        next(err);
    }
}

export = {create: createUserGameStatistics, search: searchUserGameStatistics, update: updateUserGameStatistics, remove: removeUserGameStatistics }