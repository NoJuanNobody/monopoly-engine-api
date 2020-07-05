var express = require("express");
var router = express.Router();
const {createNewUser, getUserByName, getAllUsers} = require('../db/db.userServices');
const { createNewWallet } = require('../db/db.walletServices');
const { Wallet, User } = require('../game-utils/buisnessObjects');
const connect = require('../db/db.connection');

/**
 * new user requires a name in the request body and should return a json response with a set of wallet ids
 */
router.post("/new", async function ({body:{ name }}, res, next) {
  // await createNewUser(
  //   name, null,
  //   (name, args) => createNewWallet(
  //     name,args,
  //     (name,response) => res.send(response))
  // )
  const resp = await createNewUser(name).then(async user=>res.send(user));
});

router.get("/list", (req, res, next) => {
  getAllUsers((users) => res.send(users))
});

router.post('/info', ({body: {name} }, res, next) => {
  getUserByName(
    name,null,(resp) => res.send(resp));

})

module.exports = router;
