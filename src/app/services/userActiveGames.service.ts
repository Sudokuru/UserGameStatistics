/**
 * This is the user active games service file
 * This file takes input from the controller and directs it to the db.service file
 * The five functions are {@link userGameStatisticsCreateService}, {@link userGameStatisticsSearchService},
 * {@link userGameStatisticsUpdateService}, {@link userGameStatisticsRemoveService}, and {@link filterInputQuery}
 * The main purpose of this service file is to perform the 'business' logic
 * Any errors will be caught by our try/catch block in our controller
 * @module
 */

import {CustomError, CustomErrorEnum} from "../models/error.model";
let dot = require('dot-object');

const dataBase = require ('./db.service');
const UserGameStatistics = require("../models/db.gameInfo.model");

/**
 * This function takes the Active Games JSON objects and sends them to the upload function
 * There is no need for any additional logic here
 * @param userGameStatistics This is an array of Active Games JSON objects puzzles
 */
async function userGameStatisticsCreateService(userGameStatistics) {
    return await dataBase.queryUpload(userGameStatistics, UserGameStatistics);
}

/**
 * This function takes in the input query and throws and error if no puzzles
 * are found to match the query
 * This function calls a helper function to create the inputQuery for the dataBase function
 * @param userGameStatistics this is a JSON object that stores the input query
 */
async function userGameStatisticsSearchService(userGameStatistics) {
    let res = await dataBase.querySearchAND(filterInputQuery(userGameStatistics), UserGameStatistics);

    if (res.length == 0){
        throw new CustomError(CustomErrorEnum.USER_GAME_STATISTICS_NOT_FOUND, 404);
    }
    return res;
}

/**
 * This function takes in bodyData and queryData and updates all user active games
 * that match the queryData with the bodyData
 * This function calls a helper function to create the inputQuery for the database function
 * @param bodyData this stores a JSON object with values to be updated
 * @param queryData this stores a JSON object with values used to retrieve puzzles to be updated
 */
async function userGameStatisticsUpdateService(bodyData, queryData) {
    return await dataBase.queryUpdate(filterInputQuery(queryData), bodyData, UserGameStatistics);
}

/**
 * This function takes in the input query and deletes any user active games that match the query
 * We do not throw an error here to stay aligned with standard practice.
 * A delete request is successful even if the object did not exist.
 * @param userGameStatistics this stores a JSON object that stores the query
 */
async function userGameStatisticsRemoveService(userGameStatistics) {
    return await dataBase.queryDeleteAND(filterInputQuery(userGameStatistics), UserGameStatistics);
}

/**
 * This function is a helper function that ensures we
 * are using the correct logic for locating puzzles
 * @param userActiveGames this is a JSON object that stores our raw query
 */
function filterInputQuery(userActiveGames){
    const filterValues = [];
    // if the inputQuery is blank, we return all user active games
    if (Object.keys(userActiveGames).length === 0){
        filterValues.push({});
    }
    else{
        // This is for finding a document that contains a move array value with the two provided puzzleCurrentState and puzzleCurrentNotesState values
        if (userActiveGames.moves !== undefined && 'puzzleCurrentState' in userActiveGames.moves && 'puzzleCurrentNotesState' in userActiveGames.moves){
            filterValues.push({ moves: { $elemMatch: { puzzleCurrentState: userActiveGames.moves.puzzleCurrentState, puzzleCurrentNotesState: userActiveGames.moves.puzzleCurrentNotesState } } });
            delete userActiveGames.moves;
        }

        // The dot notation is important to be able to retrieve all activeUserGames with a given numWrongCellsPlayedPerStrategy value
        // Because we don't want to search for an exact mach of that object. We want to do an OR type operation for numWrongCellsPlayedPerStrategy
        // not an AND type operation
        // The reason we cannot use dot notation in the request is because express-validator converts it away from dot notation into JSON
        // I cannot figure out a way to disable that functionality provided by express-validator
        if (Object.keys(userActiveGames).length !== 0){
            filterValues.push(dot.dot(userActiveGames));
        }
    }

    return filterValues;
}

export = { createUserActiveGames: userGameStatisticsCreateService, searchUserGameStatistics: userGameStatisticsSearchService, updateUserGameStatistics: userGameStatisticsUpdateService, removeUserGameStatistics: userGameStatisticsRemoveService };

