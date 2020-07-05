var express = require("express");
var router = express.Router();
const connect = require('../db/db.connection');


//list spaces
router.get('/spaces', (req,res,next) => {
    try {
        connect( async (db) => {
          await db.collection('gameSpaces').find({}).toArray((err, result) => {
            if(err) throw err;
            console.log(result);
            res.send(result);
          });
        })
      } catch (error) {
        throw error;
      }
});

//list chance cards
router.get('/chance', (req,res,next) => {
    try {
        connect( async (db) => {
            await db.collection('cards').find({cardType:'chance'}).toArray((err, result) => {
            if(err) throw err;
            console.log(result);
            res.send(result);
            });
        })
        } catch (error) {
        throw error;
        }
});

    //list community chest
router.get('/chest', (req,res,next) => {
    try {
        connect( async (db) => {
            await db.collection('cards').find({cardType: 'community'}).toArray((err, result) => {
            if(err) throw err;
            console.log(result);
            res.send(result);
            });
        })
        } catch (error) {
        throw error;
        }
})
//select icon

module.exports = router;