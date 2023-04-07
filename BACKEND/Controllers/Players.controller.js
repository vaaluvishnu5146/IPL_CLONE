/**
 * PLAYERS CONTROLLER
 * COLLECTION OF ALL THE METHODS FOR PLAYERS API
 * METHODS: GET, POST, PUT, DELETE
 * FUNCTIONALITIES: CREATE PLAYER, UPDATE PLAYER, DELETE PLAYER, GET ALL PLAYERS, GET PLAYER BY ID, GET PLAYERS OF A TEAM
 */

const PlayerModel = require("../Model/Player.model");
const { response } = require("../app");

const router = require("express").Router();

/**
 * METHOD: POST
 * REQUEST - PLAYER DETAILS
 * RESPONSE - PLAYER RECORD FROM DATABASE
 * PATH = '/createPlayer'
 */

router.post("/createPlayer", (req, res, next) => {
  const {
    playerName = "",
    jerseyNumber = 0,
    jerseySize = "",
    teamPlaying = "",
    primarySkill = "",
    actualSkills = [],
    battingDetails = {},
    bowlingDetails = [],
  } = req.body;
  /**
   * CREATING THE INSTANCE OF PLAYER MODEL AND SAVING THE MODEL GENERATE DATA
   */
  const Player = new PlayerModel({
    playerName: playerName,
    jerseyNumber: jerseyNumber,
    jerseySize: jerseySize,
    teamPlaying: teamPlaying,
    primarySkill: primarySkill,
    actualSkills: actualSkills,
    battingDetails: battingDetails,
    bowlingDetails: bowlingDetails,
  });

  /**
   * TRIGGERING SAVE() REQUEST
   */
  Player.save()
    .then((response) => {
      if (response._id) {
        return res.status(200).json({
          message: "Player created successfully",
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

/**
 * METHOD - GET
 * REQUEST - NULL
 * RESPONSE - LIST OF PLAYERS IN DATABASE
 * PATH = '/'
 */

router.get("/", (req, res, next) => {
  PlayerModel.find()
    .then((response) => {
      if (response.length > 0) {
        return res.status(200).json({
          message: "Players fetched successfully",
          count: response.length,
          pageNumber: 1,
          response: response,
        });
      } else {
        return res.status(200).json({
          message: "No players found",
          data: [],
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

/**
 * METHOD = POST
 * PATH = '/:id'
 * REQUEST = Player data to update
 * RESPONSE - Updated Player data
 */

/**
 * UPDATE THE IPL TEAM
 * INPUT - TEAM DATA TO UPDATE
 * OUTPUT - UPDATED TEAM DATA
 * PATH - '/:id'
 */
router.put("/:id", (req, res, next) => {
  const { id } = req.params;
  PlayerModel.findByIdAndUpdate(id, req.body, { new: true })
    .then((response) => {
      if (response) {
        return res.status(200).json({
          message: "Player updated successfully",
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

// exports.listBySearch = (req, res) => {
//   let order = req.body.order ? req.body.order : "desc";
//   let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
//   let limit = req.body.limit ? parseInt(req.body.limit) : 100;
//   let skip = parseInt(req.body.skip);
//   let findArgs = {};

//   // console.log(order, sortBy, limit, skip, req.body.filters);
//   // console.log("findArgs", findArgs);

//   for (let key in req.body.filters) {
//     if (req.body.filters[key].length > 0) {
//       if (key === "price") {
//         // gte -  greater than price [0-10]
//         // lte - less than
//         findArgs[key] = {
//           $gte: req.body.filters[key][0],
//           $lte: req.body.filters[key][1],
//         };
//       } else {
//         findArgs[key] = req.body.filters[key];
//       }
//     }
//   }

//   Product.find(findArgs)
//     .select("-photo")
//     .populate("category")
//     .sort([[sortBy, order]])
//     .skip(skip)
//     .limit(limit)
//     .exec((err, data) => {
//       if (err) {
//         return res.status(400).json({
//           error: "Products not found",
//         });
//       }
//       res.json({
//         size: data.length,
//         data,
//       });
//     });
// };
