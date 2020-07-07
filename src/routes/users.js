var express = require("express");
var router = express.Router();
const {createNewUser, getUserByName, getAllUsers} = require('../db/db.userServices');
const { createNewWallet, getWalletByName } = require('../db/db.walletServices');

/**
 * new user requires a name in the request body and should return a json response with a set of wallet ids
 */
router.post("/new", async function ({body:{ name }}, res, next) {
  const user = await createNewUser(name);
  const wallet = await createNewWallet(user);
  res.send({
    user,
    wallet,
  })
});

router.get("/list", async (req, res, next) => {
  const users = await getAllUsers();
  res.send(users)
});

router.post('/info', async ({body: {name} }, res, next) => {
  const user = await getUserByName(name);
  const wallet = await getWalletByName(user)
  res.send({user,wallet})
})

module.exports = router;
