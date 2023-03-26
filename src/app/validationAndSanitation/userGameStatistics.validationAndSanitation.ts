/**
 * This file contains several sets of settings for validating request queries and bodies
 * This file is for the user active games endpoint
 * We have three exports here that are used in the routing file
 * The purpose of this file is to sanitize and validate our input to make sure
 * there is no foul play about
 * @module UserActiveGamesValidationAndSanitation
 */

import {body, query} from "express-validator";

/**
 * This array stores the validation for our POST puzzle requests
 * This validation only applies for the body field
 * //todo add more validation and sanitization
 * The astricks are required because we are accessing values from an array
 */
exports.validateUserGameStatisticsBodyPOST = [
    body().isArray().withMessage('body is not an array'),
    body('*.userID', 'userID did not match correct format').isString().isLength({ min: 1 }),
    body('*.dateRange', 'calendar date is not a date').isDate({ strictMode: true, format: "YYYY-MM-DD" }),
    body('*.gamesPlayed.*.puzzle', 'puzzle did not match whitelist').optional().whitelist("0123456789"),
    body('*.gamesPlayed.*.puzzle', 'puzzle is not of correct length').optional().isLength({ min: 81, max: 81 }),
    body('*.gamesPlayed.*.solveTime', 'currentTime is not an integer').optional().isInt(),
    body('*.gamesPlayed.*.score', 'score is not an integer').optional().isInt(),
    body('*.gamesPlayed.*.moves.*.puzzleCurrentState', 'puzzle current state did not match whitelist').optional().whitelist("0123456789"),
    body('*.gamesPlayed.*.moves.*.puzzleCurrentState', 'puzzle current state is not of correct length').optional().isLength({ min: 81, max: 81 }),
    body('*.gamesPlayed.*.moves.*.puzzleCurrentNotesState', 'puzzle current notes state state did not match whitelist').optional().whitelist("01"),
    body('*.gamesPlayed.*.moves.*.puzzleCurrentNotesState', 'puzzle current notes state state is not of correct length').optional().isLength({ min: 729, max: 729 }),
    body('*.gamesPlayed.*.numHintsAskedFor', 'numHintsAskedFor is not an integer').optional().isInt(),
    body('*.gamesPlayed.*.numWrongCellsPlayed', 'numWrongCellsPlayed is not an integer').optional().isInt(),

    body('*.gamesPlayed.*.numWrongCellsPlayedPerStrategy.NAKED_SINGLE', 'numWrongCellsPlayed for NAKED_SINGLE is not an integer').optional().isInt(),
    body('*.gamesPlayed.*.numWrongCellsPlayedPerStrategy.HIDDEN_SINGLE', 'numWrongCellsPlayed for HIDDEN_SINGLE is not an integer').optional().isInt(),
    body('*.gamesPlayed.*.numWrongCellsPlayedPerStrategy.NAKED_PAIR', 'numWrongCellsPlayed for NAKED_PAIR is not an integer').optional().isInt(),
    body('*.gamesPlayed.*.numWrongCellsPlayedPerStrategy.NAKED_TRIPLET', 'numWrongCellsPlayed for NAKED_TRIPLET is not an integer').optional().isInt(),
    body('*.gamesPlayed.*.numWrongCellsPlayedPerStrategy.NAKED_QUADRUPLET', 'numWrongCellsPlayed for NAKED_QUADRUPLET is not an integer').optional().isInt(),
    body('*.gamesPlayed.*.numWrongCellsPlayedPerStrategy.NAKED_QUINTUPLET', 'numWrongCellsPlayed for NAKED_QUINTUPLET is not an integer').optional().isInt(),
    body('*.gamesPlayed.*.numWrongCellsPlayedPerStrategy.NAKED_SEXTUPLET', 'numWrongCellsPlayed for NAKED_SEXTUPLET is not an integer').optional().isInt(),
    body('*.gamesPlayed.*.numWrongCellsPlayedPerStrategy.NAKED_SEPTUPLET', 'numWrongCellsPlayed for NAKED_SEPTUPLET is not an integer').optional().isInt(),
    body('*.gamesPlayed.*.numWrongCellsPlayedPerStrategy.NAKED_OCTUPLET', 'numWrongCellsPlayed for NAKED_OCTUPLET is not an integer').optional().isInt(),
    body('*.gamesPlayed.*.numWrongCellsPlayedPerStrategy.HIDDEN_PAIR', 'numWrongCellsPlayed for HIDDEN_PAIR is not an integer').optional().isInt(),
    body('*.gamesPlayed.*.numWrongCellsPlayedPerStrategy.HIDDEN_TRIPLET', 'numWrongCellsPlayed for HIDDEN_TRIPLET is not an integer').optional().isInt(),
    body('*.gamesPlayed.*.numWrongCellsPlayedPerStrategy.HIDDEN_QUADRUPLET', 'numWrongCellsPlayed for HIDDEN_QUADRUPLET is not an integer').optional().isInt(),
    body('*.gamesPlayed.*.numWrongCellsPlayedPerStrategy.HIDDEN_QUINTUPLET', 'numWrongCellsPlayed for HIDDEN_QUINTUPLET is not an integer').optional().isInt(),
    body('*.gamesPlayed.*.numWrongCellsPlayedPerStrategy.HIDDEN_SEXTUPLET', 'numWrongCellsPlayed for HIDDEN_SEXTUPLET is not an integer').optional().isInt(),
    body('*.gamesPlayed.*.numWrongCellsPlayedPerStrategy.HIDDEN_SEPTUPLET', 'numWrongCellsPlayed for HIDDEN_SEPTUPLET is not an integer').optional().isInt(),
    body('*.gamesPlayed.*.numWrongCellsPlayedPerStrategy.HIDDEN_OCTUPLET', 'numWrongCellsPlayed for HIDDEN_OCTUPLET is not an integer').optional().isInt(),
    body('*.gamesPlayed.*.numWrongCellsPlayedPerStrategy.POINTING_PAIR', 'numWrongCellsPlayed for POINTING_PAIR is not an integer').optional().isInt(),
    body('*.gamesPlayed.*.numWrongCellsPlayedPerStrategy.POINTING_TRIPLET', 'numWrongCellsPlayed for POINTING_TRIPLET is not an integer').optional().isInt(),
    body('*.gamesPlayed.*.numWrongCellsPlayedPerStrategy.BOX_LINE_REDUCTION', 'numWrongCellsPlayed for BOX_LINE_REDUCTION is not an integer').optional().isInt(),
    body('*.gamesPlayed.*.numWrongCellsPlayedPerStrategy.X_WING', 'numWrongCellsPlayed for X_WING is not an integer').optional().isInt(),
    body('*.gamesPlayed.*.numWrongCellsPlayedPerStrategy.SWORDFISH', 'numWrongCellsPlayed for SWORDFISH is not an integer').optional().isInt(),
    body('*.gamesPlayed.*.numWrongCellsPlayedPerStrategy.SINGLES_CHAINING', 'numWrongCellsPlayed for SINGLES_CHAINING is not an integer').optional().isInt(),

    body('*.score', 'score is not an integer').isInt(),
    body('*.strategiesLearned', 'Strategies learned array is not valid').optional().isArray().isIn(
        ["NAKED_SINGLE", "HIDDEN_SINGLE", "NAKED_PAIR", "NAKED_TRIPLET", "NAKED_QUADRUPLET", "NAKED_QUINTUPLET",
            "NAKED_SEXTUPLET", "NAKED_SEPTUPLET", "NAKED_OCTUPLET", "HIDDEN_PAIR", "HIDDEN_TRIPLET", "HIDDEN_QUADRUPLET",
            "HIDDEN_QUINTUPLET", "HIDDEN_SEXTUPLET", "HIDDEN_SEPTUPLET", "HIDDEN_OCTUPLET", "POINTING_PAIR", "POINTING_TRIPLET",
            "BOX_LINE_REDUCTION", "X_WING", "SWORDFISH", "SINGLES_CHAINING"]),
    body('*.averageSolveTime', 'average solve time is not an integer').isInt(),
    body('*.fastestSolveTime', 'fastest solve time is not an integer').isInt(),
    body('*.totalSolveTime', 'total solve time is not an integer').isInt(),
    body('*.numHintsAskedFor', 'numHintsAskedFor is not an integer').isInt(),
    body('*.numWrongCellsPlayed', 'numWrongCellsPlayed is not an integer').isInt(),

    body('*.numWrongCellsPlayedPerStrategy.NAKED_SINGLE', 'numWrongCellsPlayed for NAKED_SINGLE is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.HIDDEN_SINGLE', 'numWrongCellsPlayed for HIDDEN_SINGLE is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.NAKED_PAIR', 'numWrongCellsPlayed for NAKED_PAIR is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.NAKED_TRIPLET', 'numWrongCellsPlayed for NAKED_TRIPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.NAKED_QUADRUPLET', 'numWrongCellsPlayed for NAKED_QUADRUPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.NAKED_QUINTUPLET', 'numWrongCellsPlayed for NAKED_QUINTUPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.NAKED_SEXTUPLET', 'numWrongCellsPlayed for NAKED_SEXTUPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.NAKED_SEPTUPLET', 'numWrongCellsPlayed for NAKED_SEPTUPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.NAKED_OCTUPLET', 'numWrongCellsPlayed for NAKED_OCTUPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.HIDDEN_PAIR', 'numWrongCellsPlayed for HIDDEN_PAIR is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.HIDDEN_TRIPLET', 'numWrongCellsPlayed for HIDDEN_TRIPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.HIDDEN_QUADRUPLET', 'numWrongCellsPlayed for HIDDEN_QUADRUPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.HIDDEN_QUINTUPLET', 'numWrongCellsPlayed for HIDDEN_QUINTUPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.HIDDEN_SEXTUPLET', 'numWrongCellsPlayed for HIDDEN_SEXTUPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.HIDDEN_SEPTUPLET', 'numWrongCellsPlayed for HIDDEN_SEPTUPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.HIDDEN_OCTUPLET', 'numWrongCellsPlayed for HIDDEN_OCTUPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.POINTING_PAIR', 'numWrongCellsPlayed for POINTING_PAIR is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.POINTING_TRIPLET', 'numWrongCellsPlayed for POINTING_TRIPLET is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.BOX_LINE_REDUCTION', 'numWrongCellsPlayed for BOX_LINE_REDUCTION is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.X_WING', 'numWrongCellsPlayed for X_WING is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.SWORDFISH', 'numWrongCellsPlayed for SWORDFISH is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayedPerStrategy.SINGLES_CHAINING', 'numWrongCellsPlayed for SINGLES_CHAINING is not an integer').optional().isInt(),
];

/**
 * This array stores the validation for our PATCH, GET, and DELETE requests
 * This validation only applies for the query fields
 * //todo add more validation and sanitization
 */
exports.validateUserGameStatisticsParameters = [
    query('userID', 'userID did not match correct format').isString().isLength({ min: 1 }),
    query('dateRange', 'calendar date is not a date').isDate({ strictMode: true, format: "YYYY-MM-DD" }),

    query('score', 'score is not an integer').isInt(),
    query('strategiesLearned', 'Strategies learned array is not valid').optional().isArray().isIn(
        ["NAKED_SINGLE", "HIDDEN_SINGLE", "NAKED_PAIR", "NAKED_TRIPLET", "NAKED_QUADRUPLET", "NAKED_QUINTUPLET",
            "NAKED_SEXTUPLET", "NAKED_SEPTUPLET", "NAKED_OCTUPLET", "HIDDEN_PAIR", "HIDDEN_TRIPLET", "HIDDEN_QUADRUPLET",
            "HIDDEN_QUINTUPLET", "HIDDEN_SEXTUPLET", "HIDDEN_SEPTUPLET", "HIDDEN_OCTUPLET", "POINTING_PAIR", "POINTING_TRIPLET",
            "BOX_LINE_REDUCTION", "X_WING", "SWORDFISH", "SINGLES_CHAINING"]),
    query('averageSolveTime', 'average solve time is not an integer').isInt(),
    query('fastestSolveTime', 'fastest solve time is not an integer').isInt(),
    query('totalSolveTime', 'total solve time is not an integer').isInt(),
    query('numHintsAskedFor', 'numHintsAskedFor is not an integer').isInt(),
    query('numWrongCellsPlayed', 'numWrongCellsPlayed is not an integer').isInt(),

    query('numWrongCellsPlayedPerStrategy.NAKED_SINGLE', 'numWrongCellsPlayed for NAKED_SINGLE is not an integer').optional().isInt(),
    query('numWrongCellsPlayedPerStrategy.HIDDEN_SINGLE', 'numWrongCellsPlayed for HIDDEN_SINGLE is not an integer').optional().isInt(),
    query('numWrongCellsPlayedPerStrategy.NAKED_PAIR', 'numWrongCellsPlayed for NAKED_PAIR is not an integer').optional().isInt(),
    query('numWrongCellsPlayedPerStrategy.NAKED_TRIPLET', 'numWrongCellsPlayed for NAKED_TRIPLET is not an integer').optional().isInt(),
    query('numWrongCellsPlayedPerStrategy.NAKED_QUADRUPLET', 'numWrongCellsPlayed for NAKED_QUADRUPLET is not an integer').optional().isInt(),
    query('numWrongCellsPlayedPerStrategy.NAKED_QUINTUPLET', 'numWrongCellsPlayed for NAKED_QUINTUPLET is not an integer').optional().isInt(),
    query('numWrongCellsPlayedPerStrategy.NAKED_SEXTUPLET', 'numWrongCellsPlayed for NAKED_SEXTUPLET is not an integer').optional().isInt(),
    query('numWrongCellsPlayedPerStrategy.NAKED_SEPTUPLET', 'numWrongCellsPlayed for NAKED_SEPTUPLET is not an integer').optional().isInt(),
    query('numWrongCellsPlayedPerStrategy.NAKED_OCTUPLET', 'numWrongCellsPlayed for NAKED_OCTUPLET is not an integer').optional().isInt(),
    query('numWrongCellsPlayedPerStrategy.HIDDEN_PAIR', 'numWrongCellsPlayed for HIDDEN_PAIR is not an integer').optional().isInt(),
    query('numWrongCellsPlayedPerStrategy.HIDDEN_TRIPLET', 'numWrongCellsPlayed for HIDDEN_TRIPLET is not an integer').optional().isInt(),
    query('numWrongCellsPlayedPerStrategy.HIDDEN_QUADRUPLET', 'numWrongCellsPlayed for HIDDEN_QUADRUPLET is not an integer').optional().isInt(),
    query('numWrongCellsPlayedPerStrategy.HIDDEN_QUINTUPLET', 'numWrongCellsPlayed for HIDDEN_QUINTUPLET is not an integer').optional().isInt(),
    query('numWrongCellsPlayedPerStrategy.HIDDEN_SEXTUPLET', 'numWrongCellsPlayed for HIDDEN_SEXTUPLET is not an integer').optional().isInt(),
    query('numWrongCellsPlayedPerStrategy.HIDDEN_SEPTUPLET', 'numWrongCellsPlayed for HIDDEN_SEPTUPLET is not an integer').optional().isInt(),
    query('numWrongCellsPlayedPerStrategy.HIDDEN_OCTUPLET', 'numWrongCellsPlayed for HIDDEN_OCTUPLET is not an integer').optional().isInt(),
    query('numWrongCellsPlayedPerStrategy.POINTING_PAIR', 'numWrongCellsPlayed for POINTING_PAIR is not an integer').optional().isInt(),
    query('numWrongCellsPlayedPerStrategy.POINTING_TRIPLET', 'numWrongCellsPlayed for POINTING_TRIPLET is not an integer').optional().isInt(),
    query('numWrongCellsPlayedPerStrategy.BOX_LINE_REDUCTION', 'numWrongCellsPlayed for BOX_LINE_REDUCTION is not an integer').optional().isInt(),
    query('numWrongCellsPlayedPerStrategy.X_WING', 'numWrongCellsPlayed for X_WING is not an integer').optional().isInt(),
    query('numWrongCellsPlayedPerStrategy.SWORDFISH', 'numWrongCellsPlayed for SWORDFISH is not an integer').optional().isInt(),
    query('numWrongCellsPlayedPerStrategy.SINGLES_CHAINING', 'numWrongCellsPlayed for SINGLES_CHAINING is not an integer').optional().isInt()
];

/**
 * This array stores the validation for our PATCH requests
 * This validation only applies for the body field
 * //todo add more validation and sanitization
 * the Astricks are not needed here because in this instance we are not storing our values in an array
 * We also leave out the userID and puzzle fields because we do not want to replace those during a PATCH operation
 */
exports.validateUserGameStatisticsPATCH = [
    body('score', 'score is not an integer').isInt(),
    body('strategiesLearned', 'Strategies learned array is not valid').optional().isArray().isIn(
        ["NAKED_SINGLE", "HIDDEN_SINGLE", "NAKED_PAIR", "NAKED_TRIPLET", "NAKED_QUADRUPLET", "NAKED_QUINTUPLET",
            "NAKED_SEXTUPLET", "NAKED_SEPTUPLET", "NAKED_OCTUPLET", "HIDDEN_PAIR", "HIDDEN_TRIPLET", "HIDDEN_QUADRUPLET",
            "HIDDEN_QUINTUPLET", "HIDDEN_SEXTUPLET", "HIDDEN_SEPTUPLET", "HIDDEN_OCTUPLET", "POINTING_PAIR", "POINTING_TRIPLET",
            "BOX_LINE_REDUCTION", "X_WING", "SWORDFISH", "SINGLES_CHAINING"]),
    body('averageSolveTime', 'average solve time is not an integer').isInt(),
    body('fastestSolveTime', 'fastest solve time is not an integer').isInt(),
    body('totalSolveTime', 'total solve time is not an integer').isInt(),
    body('numHintsAskedFor', 'numHintsAskedFor is not an integer').isInt(),
    body('numWrongCellsPlayed', 'numWrongCellsPlayed is not an integer').isInt(),

    body('numWrongCellsPlayedPerStrategy.NAKED_SINGLE', 'numWrongCellsPlayed for NAKED_SINGLE is not an integer').optional().isInt(),
    body('numWrongCellsPlayedPerStrategy.HIDDEN_SINGLE', 'numWrongCellsPlayed for HIDDEN_SINGLE is not an integer').optional().isInt(),
    body('numWrongCellsPlayedPerStrategy.NAKED_PAIR', 'numWrongCellsPlayed for NAKED_PAIR is not an integer').optional().isInt(),
    body('numWrongCellsPlayedPerStrategy.NAKED_TRIPLET', 'numWrongCellsPlayed for NAKED_TRIPLET is not an integer').optional().isInt(),
    body('numWrongCellsPlayedPerStrategy.NAKED_QUADRUPLET', 'numWrongCellsPlayed for NAKED_QUADRUPLET is not an integer').optional().isInt(),
    body('numWrongCellsPlayedPerStrategy.NAKED_QUINTUPLET', 'numWrongCellsPlayed for NAKED_QUINTUPLET is not an integer').optional().isInt(),
    body('numWrongCellsPlayedPerStrategy.NAKED_SEXTUPLET', 'numWrongCellsPlayed for NAKED_SEXTUPLET is not an integer').optional().isInt(),
    body('numWrongCellsPlayedPerStrategy.NAKED_SEPTUPLET', 'numWrongCellsPlayed for NAKED_SEPTUPLET is not an integer').optional().isInt(),
    body('numWrongCellsPlayedPerStrategy.NAKED_OCTUPLET', 'numWrongCellsPlayed for NAKED_OCTUPLET is not an integer').optional().isInt(),
    body('numWrongCellsPlayedPerStrategy.HIDDEN_PAIR', 'numWrongCellsPlayed for HIDDEN_PAIR is not an integer').optional().isInt(),
    body('numWrongCellsPlayedPerStrategy.HIDDEN_TRIPLET', 'numWrongCellsPlayed for HIDDEN_TRIPLET is not an integer').optional().isInt(),
    body('numWrongCellsPlayedPerStrategy.HIDDEN_QUADRUPLET', 'numWrongCellsPlayed for HIDDEN_QUADRUPLET is not an integer').optional().isInt(),
    body('numWrongCellsPlayedPerStrategy.HIDDEN_QUINTUPLET', 'numWrongCellsPlayed for HIDDEN_QUINTUPLET is not an integer').optional().isInt(),
    body('numWrongCellsPlayedPerStrategy.HIDDEN_SEXTUPLET', 'numWrongCellsPlayed for HIDDEN_SEXTUPLET is not an integer').optional().isInt(),
    body('numWrongCellsPlayedPerStrategy.HIDDEN_SEPTUPLET', 'numWrongCellsPlayed for HIDDEN_SEPTUPLET is not an integer').optional().isInt(),
    body('numWrongCellsPlayedPerStrategy.HIDDEN_OCTUPLET', 'numWrongCellsPlayed for HIDDEN_OCTUPLET is not an integer').optional().isInt(),
    body('numWrongCellsPlayedPerStrategy.POINTING_PAIR', 'numWrongCellsPlayed for POINTING_PAIR is not an integer').optional().isInt(),
    body('numWrongCellsPlayedPerStrategy.POINTING_TRIPLET', 'numWrongCellsPlayed for POINTING_TRIPLET is not an integer').optional().isInt(),
    body('numWrongCellsPlayedPerStrategy.BOX_LINE_REDUCTION', 'numWrongCellsPlayed for BOX_LINE_REDUCTION is not an integer').optional().isInt(),
    body('numWrongCellsPlayedPerStrategy.X_WING', 'numWrongCellsPlayed for X_WING is not an integer').optional().isInt(),
    body('numWrongCellsPlayedPerStrategy.SWORDFISH', 'numWrongCellsPlayed for SWORDFISH is not an integer').optional().isInt(),
    body('numWrongCellsPlayedPerStrategy.SINGLES_CHAINING', 'numWrongCellsPlayed for SINGLES_CHAINING is not an integer').optional().isInt(),
];