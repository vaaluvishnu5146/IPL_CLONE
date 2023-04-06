/**
 * MONGOOSE IS AN NPM PACKAGE
 * ITS A ORM - OBJECT RELATIONSHIP MANAGER
 * what will it do?
 *   1. Help us to create a data schema and understanding what TEAM data will look like
 *   2. Provide us necessary functions that help us to store / retreive
 */
const mongoose = require("mongoose");

const BattingDetailsSchema = mongoose.Schema({
  battingStyle: {
    type: String,
    default: "right-hand",
  },
  avgStrikeRate: {
    type: String,
    required: 0,
  },
});

const BowlingDetailsSchema = mongoose.Schema({
  bowlingStyle: {
    type: String,
    default: "right-hand",
  },
  bowlingType: {
    type: String,
    default: "medium",
  },
  avgBowlingRate: {
    type: String,
    default: 0,
  },
});

const PlayerSchema = mongoose.Schema({
  playerName: {
    type: String,
    required: true,
  },
  playerProfilePicture: {
    type: String,
    required: false,
  },
  jerseyNumber: {
    type: String,
    required: true,
  },
  jerseySize: {
    type: String,
    required: true,
  },
  teamPlaying: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  primarySkill: {
    type: String,
    required: true,
  },
  actualSkills: {
    type: Array,
    default: ["fielding"],
  },
  battingDetails: {
    type: BattingDetailsSchema,
    required: false,
  },
  bowlerDetails: {
    type: BowlingDetailsSchema,
    required: false,
  },
});

module.exports = mongoose.model("Player", PlayerSchema);
