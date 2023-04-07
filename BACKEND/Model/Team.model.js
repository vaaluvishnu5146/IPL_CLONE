/**
 * MONGOOSE IS AN NPM PACKAGE
 * ITS A ORM - OBJECT RELATIONSHIP MANAGER
 * what will it do?
 *   1. Help us to create a data schema and understanding what TEAM data will look like
 *   2. Provide us necessary functions that help us to store / retreive
 */
const mongoose = require("mongoose");

const TeamSchema = mongoose.Schema({
  teamName: {
    type: String,
    required: true,
  },
  teamShortName: {
    type: String,
    required: false,
  },
  teamLogo: {
    type: String,
    required: false,
  },
  teamBanner: {
    type: String,
    required: false,
  },
  colorCode: {
    type: String,
    required: true,
  },
  totalPlayers: {
    type: Number,
    default: 0,
  },
  totalSubstitutes: {
    type: Number,
    default: 0,
  },
  totalHelpers: {
    type: Number,
    default: 0,
  },
  state: {
    type: String,
    required: true,
  },
  teamOwner: {
    type: String,
    required: true,
  },
  teamCaptain: {
    type: String,
    required: false,
  },
  teamCoach: {
    type: String,
    required: true,
  },
  teamCup: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Teams", TeamSchema);
