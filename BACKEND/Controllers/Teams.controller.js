/**
 * TEAM CONTROLLER
 * COLLECTION OF ALL THE METHODS FOR TEAMS API
 * METHODS: GET, POST, PUT, DELETE
 * BASE URL: 'https://www.domain.com/${controllerPath}/${subRouterPath}'
 * FUNCTIONALITIES: CREATE TEAM, UPDATE TEAM, DELETE TEAM, GET ALL TEAMS, GET TEAM BY ID
 */
/**
 * CREATING SUB ROUTER / EXPRESS ROUTER
 * WHICH REGITERS ALL THE FUNCTIONALITIES
 */
const router = require("express").Router();
const TeamModel = require("../Model/Team.model");

/**
 * METHOD - GET
 * INPUT - REQUEST
 * OUTPUT - RESPONSE
 * PATH = '/test'
 */
router.get("/test", (req, res, next) => {
  return res.status(200).json({
    message: "Test request successfull",
  });
});

/**
 * METHOD - GET
 * INPUT - REQUEST
 * OUTPUT - RESPONSE
 * PATH = '/'
 */
router.get("/", (req, res, next) => {
  TeamModel.find()
    .then((response) => {
      if (response.length > 0) {
        return res.status(200).json({
          message: "Teams fetched successfully!!",
          response,
        });
      } else {
        return res.status(200).json({
          message: "Alas!! No Teams found",
          response,
        });
      }
    })
    .catch((error) => {
      return res.status(400).json({
        error: error,
      });
    });
});

/**
 * METHOD - GET
 * INPUT - REQUEST PARAMS{id}
 * OUTPUT - RESPONSE
 * PATH = '/'
 */
router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  TeamModel.findById(id)
    .then((response) => {
      console.log(response);
      if (response) {
        return res.status(200).json({
          message: "Team fetched successfully!!",
          response,
        });
      } else {
        return res.status(200).json({
          message: "Alas!! No Teams found",
          response: {},
        });
      }
    })
    .catch((error) => {
      return res.status(400).json({
        error: error,
      });
    });
});

/**
 * METHOD - POST
 * INPUT - REQUEST
 * OUTPUT - RESPONSE
 * PATH = '/createTeam'
 */
router.post("/createTeam", (req, res, next) => {
  const {
    teamName = "",
    teamShortName = "",
    teamLogo = "",
    teamBanner = "",
    colorCode = "",
    totalPlayers = 0,
    totalSubstitutes = 0,
    totalHelpers = 0,
    state = "",
    teamOwner = "",
    teamCaptain = "",
    teamCoach = "",
    teamCup = 0,
  } = req.body;
  const Team = new TeamModel({
    teamName,
    teamShortName,
    teamLogo,
    teamBanner,
    colorCode,
    totalPlayers,
    totalSubstitutes,
    totalHelpers,
    state,
    teamOwner,
    teamCoach,
    teamCaptain,
    teamCup,
  });
  Team.save()
    .then((response) => {
      if (response._id) {
        return res.status(200).json({
          message: "Team created succcessfully!!!",
          data: response,
        });
      }
    })
    .catch((error) =>
      res.status(400).json({
        error: error,
      })
    );
});

/**
 * UPDATE THE IPL TEAM
 * INPUT - TEAM DATA TO UPDATE
 * OUTPUT - UPDATED TEAM DATA
 * PATH - '/:id'
 */
router.put("/:id", (req, res, next) => {
  const { id } = req.params;
  TeamModel.findByIdAndUpdate(id, req.body, { new: true })
    .then((response) => {
      if (response) {
        return res.status(200).json({
          message: "Team updated successfully",
          data: response,
        });
      }
    })
    .catch((error) => {
      if (error.message) {
        return res.status(400).json({
          error: error.message,
        });
      }
    });
});

module.exports = router;
