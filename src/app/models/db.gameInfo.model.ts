/**
 * These are the mongoose schemas for the user_game_results collection
 * The two schemas currently in this collection are {@link UserGameStatisticsSchema} and {@link userGameStatisticss}
 * //todo at some point would like to remove these schemas as we already handle input validation with express-validator
 * //todo and the error throwing with mongoose is inconsistent and hard to work with
 * @module DbGameResultsModel
 */

import { Schema } from 'mongoose';
import * as mongoose from "mongoose";
import {userGameStatisticss} from "./interfaces";

// turns on debug mode so we can see results of successful requests
mongoose.set({ debug: true, autoCreate: true})

/**
 * This stores a user's game history and stats for each month
 * This is in the same collection as it will likely be updated immediately after a game ends
 * There could be a toggle in user preferences to disable/enable saving of games
 * User's total stats can be stored in a separate object or retrieved as needed.
 */
const UserGameStatisticsSchema = new Schema<userGameStatisticss>({
    userID: { type: String, required: true, unique: true },
    dateRange: { type: String, required: true }, // we will be storing users stats in batches of months.
    gamesPlayed: [{
        puzzle: { type: String, required: true },
        moves: [{
            puzzleCurrentState: { type: String, required: true, unique: false },
            puzzleCurrentNotesState: { type: String, required: true, unique: false }
        }],
        numTimesPlayed: { type: Number, required: true, default: 1 },
        initialSolveTime: { type: Number, required: true },
        fastestSolveTime: { type: Number, required: true },
        averageMoveTime: { type: Number, required: true },
        numHintsAskedFor: { type: Number, required: true },
        numWrongCellsPlayed: { type: Number, required: true },
        numWrongCellsPlayedPerStrategy: {
            NAKED_SINGLE: { type: Number, required: false },
            HIDDEN_SINGLE: { type: Number, required: false },
            NAKED_PAIR: { type: Number, required: false },
            NAKED_TRIPLET: { type: Number, required: false },
            NAKED_QUADRUPLET: { type: Number, required: false },
            NAKED_QUINTUPLET: { type: Number, required: false },
            NAKED_SEXTUPLET: { type: Number, required: false },
            NAKED_SEPTUPLET: { type: Number, required: false },
            NAKED_OCTUPLET: { type: Number, required: false },
            HIDDEN_PAIR: { type: Number, required: false },
            HIDDEN_TRIPLET: { type: Number, required: false },
            HIDDEN_QUADRUPLET: { type: Number, required: false },
            HIDDEN_QUINTUPLET: { type: Number, required: false },
            HIDDEN_SEXTUPLET: { type: Number, required: false },
            HIDDEN_SEPTUPLET: { type: Number, required: false },
            HIDDEN_OCTUPLET: { type: Number, required: false },
            POINTING_PAIR: { type: Number, required: false },
            POINTING_TRIPLET: { type: Number, required: false },
            BOX_LINE_REDUCTION: { type: Number, required: false },
            X_WING: { type: Number, required: false },
            SWORDFISH: { type: Number, required: false },
            SINGLES_CHAINING: { type: Number, required: false }
        }
    }],
    averageSolveTime: { type: Number, required: true },
    fastestSolveTime: { type: Number, required: true },
    numHintsAskedFor: { type: Number, required: true },
    numWrongCellsPlayed: { type: Number, required: true },
    numGamesPlayed: { type: Number, required: true, defualt: 1 },
    numGamedFailed: { type: Number, required: true },
    numWrongCellsPlayedPerStrategy: {
        NAKED_SINGLE: { type: Number, required: false },
        HIDDEN_SINGLE: { type: Number, required: false },
        NAKED_PAIR: { type: Number, required: false },
        NAKED_TRIPLET: { type: Number, required: false },
        NAKED_QUADRUPLET: { type: Number, required: false },
        NAKED_QUINTUPLET: { type: Number, required: false },
        NAKED_SEXTUPLET: { type: Number, required: false },
        NAKED_SEPTUPLET: { type: Number, required: false },
        NAKED_OCTUPLET: { type: Number, required: false },
        HIDDEN_PAIR: { type: Number, required: false },
        HIDDEN_TRIPLET: { type: Number, required: false },
        HIDDEN_QUADRUPLET: { type: Number, required: false },
        HIDDEN_QUINTUPLET: { type: Number, required: false },
        HIDDEN_SEXTUPLET: { type: Number, required: false },
        HIDDEN_SEPTUPLET: { type: Number, required: false },
        HIDDEN_OCTUPLET: { type: Number, required: false },
        POINTING_PAIR: { type: Number, required: false },
        POINTING_TRIPLET: { type: Number, required: false },
        BOX_LINE_REDUCTION: { type: Number, required: false },
        X_WING: { type: Number, required: false },
        SWORDFISH: { type: Number, required: false },
        SINGLES_CHAINING: { type: Number, required: false }
    }
});

export = mongoose.model("UserGameStatistics", UserGameStatisticsSchema, 'user_game_statistics');