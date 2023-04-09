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

    body('*.score', 'score is not an integer').optional().isInt(),
    body('*.strategiesLearned', 'Strategies learned array is not valid').optional().isArray().isIn(
        ["AMEND_NOTES", "NAKED_SINGLE", "HIDDEN_SINGLE", "NAKED_SET",
            "HIDDEN_SET", "POINTING_PAIR", "POINTING_TRIPLET",
            "BOX_LINE_REDUCTION", "X_WING", "SWORDFISH", "SINGLES_CHAINING"]),
    body('*.averageSolveTime', 'average solve time is not an integer').optional().isInt(),
    body('*.fastestSolveTime', 'fastest solve time is not an integer').optional().isInt(),
    body('*.totalSolveTime', 'total solve time is not an integer').optional().isInt(),
    body('*.numHintsUsed', 'numHintsAskedFor is not an integer').optional().isInt(),
    body('*.numWrongCellsPlayed', 'numWrongCellsPlayed is not an integer').optional().isInt(),
    body('*.numGamesPlayed', 'numGamesPlayed is not an integer').optional().isInt(),

    body('*.numHintsUsedPerStrategy.NAKED_SINGLE', 'numWrongCellsPlayed for NAKED_SINGLE is not an integer').optional().isInt(),
    body('*.numHintsUsedPerStrategy.HIDDEN_SINGLE', 'numWrongCellsPlayed for HIDDEN_SINGLE is not an integer').optional().isInt(),
    body('*.numHintsUsedPerStrategy.NAKED_PAIR', 'numWrongCellsPlayed for NAKED_PAIR is not an integer').optional().isInt(),
    body('*.numHintsUsedPerStrategy.NAKED_TRIPLET', 'numWrongCellsPlayed for NAKED_TRIPLET is not an integer').optional().isInt(),
    body('*.numHintsUsedPerStrategy.NAKED_QUADRUPLET', 'numWrongCellsPlayed for NAKED_QUADRUPLET is not an integer').optional().isInt(),
    body('*.numHintsUsedPerStrategy.NAKED_QUINTUPLET', 'numWrongCellsPlayed for NAKED_QUINTUPLET is not an integer').optional().isInt(),
    body('*.numHintsUsedPerStrategy.NAKED_SEXTUPLET', 'numWrongCellsPlayed for NAKED_SEXTUPLET is not an integer').optional().isInt(),
    body('*.numHintsUsedPerStrategy.NAKED_SEPTUPLET', 'numWrongCellsPlayed for NAKED_SEPTUPLET is not an integer').optional().isInt(),
    body('*.numHintsUsedPerStrategy.NAKED_OCTUPLET', 'numWrongCellsPlayed for NAKED_OCTUPLET is not an integer').optional().isInt(),
    body('*.numHintsUsedPerStrategy.HIDDEN_PAIR', 'numWrongCellsPlayed for HIDDEN_PAIR is not an integer').optional().isInt(),
    body('*.numHintsUsedPerStrategy.HIDDEN_TRIPLET', 'numWrongCellsPlayed for HIDDEN_TRIPLET is not an integer').optional().isInt(),
    body('*.numHintsUsedPerStrategy.HIDDEN_QUADRUPLET', 'numWrongCellsPlayed for HIDDEN_QUADRUPLET is not an integer').optional().isInt(),
    body('*.numHintsUsedPerStrategy.HIDDEN_QUINTUPLET', 'numWrongCellsPlayed for HIDDEN_QUINTUPLET is not an integer').optional().isInt(),
    body('*.numHintsUsedPerStrategy.HIDDEN_SEXTUPLET', 'numWrongCellsPlayed for HIDDEN_SEXTUPLET is not an integer').optional().isInt(),
    body('*.numHintsUsedPerStrategy.HIDDEN_SEPTUPLET', 'numWrongCellsPlayed for HIDDEN_SEPTUPLET is not an integer').optional().isInt(),
    body('*.numHintsUsedPerStrategy.HIDDEN_OCTUPLET', 'numWrongCellsPlayed for HIDDEN_OCTUPLET is not an integer').optional().isInt(),
    body('*.numHintsUsedPerStrategy.POINTING_PAIR', 'numWrongCellsPlayed for POINTING_PAIR is not an integer').optional().isInt(),
    body('*.numHintsUsedPerStrategy.POINTING_TRIPLET', 'numWrongCellsPlayed for POINTING_TRIPLET is not an integer').optional().isInt(),
    body('*.numHintsUsedPerStrategy.BOX_LINE_REDUCTION', 'numWrongCellsPlayed for BOX_LINE_REDUCTION is not an integer').optional().isInt(),
    body('*.numHintsUsedPerStrategy.X_WING', 'numWrongCellsPlayed for X_WING is not an integer').optional().isInt(),
    body('*.numHintsUsedPerStrategy.SWORDFISH', 'numWrongCellsPlayed for SWORDFISH is not an integer').optional().isInt(),
    body('*.numHintsUsedPerStrategy.SINGLES_CHAINING', 'numWrongCellsPlayed for SINGLES_CHAINING is not an integer').optional().isInt(),
];

/**
 * This array stores the validation for our PATCH, GET, and DELETE requests
 * This validation only applies for the query fields
 * //todo add more validation and sanitization
 */
exports.validateUserGameStatisticsParameters = [
    query('userID', 'userID did not match correct format').optional().isString().isLength({ min: 1 }),
    query('dateRange', 'calendar date is not a date').optional().isDate({ strictMode: true, format: "YYYY-MM-DD" }),

    query('score', 'score is not an integer').optional().isInt(),
    query('strategiesLearned', 'Strategies learned array is not valid').optional().isArray().isIn(
        ["AMEND_NOTES", "NAKED_SINGLE", "HIDDEN_SINGLE", "NAKED_SET",
            "HIDDEN_SET", "POINTING_PAIR", "POINTING_TRIPLET",
            "BOX_LINE_REDUCTION", "X_WING", "SWORDFISH", "SINGLES_CHAINING"]),
    query('averageSolveTime', 'average solve time is not an integer').optional().isInt(),
    query('fastestSolveTime', 'fastest solve time is not an integer').optional().isInt(),
    query('totalSolveTime', 'total solve time is not an integer').optional().isInt(),
    query('numHintsUsed', 'numHintsAskedFor is not an integer').optional().isInt(),
    query('numWrongCellsPlayed', 'numWrongCellsPlayed is not an integer').optional().isInt(),
    query('*.numGamesPlayed', 'numGamesPlayed is not an integer').optional().isInt(),

    query('numHintsUsedPerStrategy.NAKED_SINGLE', 'numWrongCellsPlayed for NAKED_SINGLE is not an integer').optional().isInt(),
    query('numHintsUsedPerStrategy.HIDDEN_SINGLE', 'numWrongCellsPlayed for HIDDEN_SINGLE is not an integer').optional().isInt(),
    query('numHintsUsedPerStrategy.NAKED_PAIR', 'numWrongCellsPlayed for NAKED_PAIR is not an integer').optional().isInt(),
    query('numHintsUsedPerStrategy.NAKED_TRIPLET', 'numWrongCellsPlayed for NAKED_TRIPLET is not an integer').optional().isInt(),
    query('numHintsUsedPerStrategy.NAKED_QUADRUPLET', 'numWrongCellsPlayed for NAKED_QUADRUPLET is not an integer').optional().isInt(),
    query('numHintsUsedPerStrategy.NAKED_QUINTUPLET', 'numWrongCellsPlayed for NAKED_QUINTUPLET is not an integer').optional().isInt(),
    query('numHintsUsedPerStrategy.NAKED_SEXTUPLET', 'numWrongCellsPlayed for NAKED_SEXTUPLET is not an integer').optional().isInt(),
    query('numHintsUsedPerStrategy.NAKED_SEPTUPLET', 'numWrongCellsPlayed for NAKED_SEPTUPLET is not an integer').optional().isInt(),
    query('numHintsUsedPerStrategy.NAKED_OCTUPLET', 'numWrongCellsPlayed for NAKED_OCTUPLET is not an integer').optional().isInt(),
    query('numHintsUsedPerStrategy.HIDDEN_PAIR', 'numWrongCellsPlayed for HIDDEN_PAIR is not an integer').optional().isInt(),
    query('numHintsUsedPerStrategy.HIDDEN_TRIPLET', 'numWrongCellsPlayed for HIDDEN_TRIPLET is not an integer').optional().isInt(),
    query('numHintsUsedPerStrategy.HIDDEN_QUADRUPLET', 'numWrongCellsPlayed for HIDDEN_QUADRUPLET is not an integer').optional().isInt(),
    query('numHintsUsedPerStrategy.HIDDEN_QUINTUPLET', 'numWrongCellsPlayed for HIDDEN_QUINTUPLET is not an integer').optional().isInt(),
    query('numHintsUsedPerStrategy.HIDDEN_SEXTUPLET', 'numWrongCellsPlayed for HIDDEN_SEXTUPLET is not an integer').optional().isInt(),
    query('numHintsUsedPerStrategy.HIDDEN_SEPTUPLET', 'numWrongCellsPlayed for HIDDEN_SEPTUPLET is not an integer').optional().isInt(),
    query('numHintsUsedPerStrategy.HIDDEN_OCTUPLET', 'numWrongCellsPlayed for HIDDEN_OCTUPLET is not an integer').optional().isInt(),
    query('numHintsUsedPerStrategy.POINTING_PAIR', 'numWrongCellsPlayed for POINTING_PAIR is not an integer').optional().isInt(),
    query('numHintsUsedPerStrategy.POINTING_TRIPLET', 'numWrongCellsPlayed for POINTING_TRIPLET is not an integer').optional().isInt(),
    query('numHintsUsedPerStrategy.BOX_LINE_REDUCTION', 'numWrongCellsPlayed for BOX_LINE_REDUCTION is not an integer').optional().isInt(),
    query('numHintsUsedPerStrategy.X_WING', 'numWrongCellsPlayed for X_WING is not an integer').optional().isInt(),
    query('numHintsUsedPerStrategy.SWORDFISH', 'numWrongCellsPlayed for SWORDFISH is not an integer').optional().isInt(),
    query('numHintsUsedPerStrategy.SINGLES_CHAINING', 'numWrongCellsPlayed for SINGLES_CHAINING is not an integer').optional().isInt()
];

/**
 * This array stores the validation for our PATCH requests
 * This validation only applies for the body field
 * //todo add more validation and sanitization
 * the Astricks are not needed here because in this instance we are not storing our values in an array
 * We also leave out the userID and puzzle fields because we do not want to replace those during a PATCH operation
 */
exports.validateUserGameStatisticsPATCH = [
    body('score', 'score is not an integer').optional().isInt(),
    body('strategiesLearned', 'Strategies learned array is not valid').optional().isArray().isIn(
        ["AMEND_NOTES", "NAKED_SINGLE", "HIDDEN_SINGLE", "NAKED_SET",
            "HIDDEN_SET", "POINTING_PAIR", "POINTING_TRIPLET",
            "BOX_LINE_REDUCTION", "X_WING", "SWORDFISH", "SINGLES_CHAINING"]),
    body('averageSolveTime', 'average solve time is not an integer').optional().isInt(),
    body('fastestSolveTime', 'fastest solve time is not an integer').optional().isInt(),
    body('totalSolveTime', 'total solve time is not an integer').optional().isInt(),
    body('numHintsUsed', 'numHintsAskedFor is not an integer').optional().isInt(),
    body('numWrongCellsPlayed', 'numWrongCellsPlayed is not an integer').optional().isInt(),
    body('*.numGamesPlayed', 'numGamesPlayed is not an integer').optional().isInt(),

    body('numHintsUsedPerStrategy.NAKED_SINGLE', 'numWrongCellsPlayed for NAKED_SINGLE is not an integer').optional().isInt(),
    body('numHintsUsedPerStrategy.HIDDEN_SINGLE', 'numWrongCellsPlayed for HIDDEN_SINGLE is not an integer').optional().isInt(),
    body('numHintsUsedPerStrategy.NAKED_PAIR', 'numWrongCellsPlayed for NAKED_PAIR is not an integer').optional().isInt(),
    body('numHintsUsedPerStrategy.NAKED_TRIPLET', 'numWrongCellsPlayed for NAKED_TRIPLET is not an integer').optional().isInt(),
    body('numHintsUsedPerStrategy.NAKED_QUADRUPLET', 'numWrongCellsPlayed for NAKED_QUADRUPLET is not an integer').optional().isInt(),
    body('numHintsUsedPerStrategy.NAKED_QUINTUPLET', 'numWrongCellsPlayed for NAKED_QUINTUPLET is not an integer').optional().isInt(),
    body('numHintsUsedPerStrategy.NAKED_SEXTUPLET', 'numWrongCellsPlayed for NAKED_SEXTUPLET is not an integer').optional().isInt(),
    body('numHintsUsedPerStrategy.NAKED_SEPTUPLET', 'numWrongCellsPlayed for NAKED_SEPTUPLET is not an integer').optional().isInt(),
    body('numHintsUsedPerStrategy.NAKED_OCTUPLET', 'numWrongCellsPlayed for NAKED_OCTUPLET is not an integer').optional().isInt(),
    body('numHintsUsedPerStrategy.HIDDEN_PAIR', 'numWrongCellsPlayed for HIDDEN_PAIR is not an integer').optional().isInt(),
    body('numHintsUsedPerStrategy.HIDDEN_TRIPLET', 'numWrongCellsPlayed for HIDDEN_TRIPLET is not an integer').optional().isInt(),
    body('numHintsUsedPerStrategy.HIDDEN_QUADRUPLET', 'numWrongCellsPlayed for HIDDEN_QUADRUPLET is not an integer').optional().isInt(),
    body('numHintsUsedPerStrategy.HIDDEN_QUINTUPLET', 'numWrongCellsPlayed for HIDDEN_QUINTUPLET is not an integer').optional().isInt(),
    body('numHintsUsedPerStrategy.HIDDEN_SEXTUPLET', 'numWrongCellsPlayed for HIDDEN_SEXTUPLET is not an integer').optional().isInt(),
    body('numHintsUsedPerStrategy.HIDDEN_SEPTUPLET', 'numWrongCellsPlayed for HIDDEN_SEPTUPLET is not an integer').optional().isInt(),
    body('numHintsUsedPerStrategy.HIDDEN_OCTUPLET', 'numWrongCellsPlayed for HIDDEN_OCTUPLET is not an integer').optional().isInt(),
    body('numHintsUsedPerStrategy.POINTING_PAIR', 'numWrongCellsPlayed for POINTING_PAIR is not an integer').optional().isInt(),
    body('numHintsUsedPerStrategy.POINTING_TRIPLET', 'numWrongCellsPlayed for POINTING_TRIPLET is not an integer').optional().isInt(),
    body('numHintsUsedPerStrategy.BOX_LINE_REDUCTION', 'numWrongCellsPlayed for BOX_LINE_REDUCTION is not an integer').optional().isInt(),
    body('numHintsUsedPerStrategy.X_WING', 'numWrongCellsPlayed for X_WING is not an integer').optional().isInt(),
    body('numHintsUsedPerStrategy.SWORDFISH', 'numWrongCellsPlayed for SWORDFISH is not an integer').optional().isInt(),
    body('numHintsUsedPerStrategy.SINGLES_CHAINING', 'numWrongCellsPlayed for SINGLES_CHAINING is not an integer').optional().isInt(),
];