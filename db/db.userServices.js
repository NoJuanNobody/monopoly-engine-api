const connect = require('./db.connection');
const { User } = require('../game-utils/buisnessObjects/index');
//get user by name
async function getUserByName(name, args, callback){
    let resp;
    connect(async (db) => {
        try {
            db.collection('users').findOne({name},(err, user) => {
                if(err) throw err;
                callback({user, ...args});
            }
            )
        } catch (error) {
            //user not created 
            console.err('the user was not created yet');
        }
    });
}
async function getAllUsers(callback){
    let resp;
    connect(async (db) => {
        try {
            await db.collection('users').find({}).toArray(async(err, users) => {
                if(err) throw err;
                await callback(users)
            })
        } catch (error) {
            //user not created 
            throw error
        }
    });
}

async function updateUserPosition({name,newPosition}, args, callback){
    try {
        connect(async (db) => {
            await db.collection('users').updateOne({name}, {$set: {position: newPosition}}, async (err) => {
                if(err) throw err
                await callback(args)
            })
        })
        
    } catch (error) {
        throw err;
    }
}

async function createNewUser(name){
    const newUser = new User(name);
    try{
        return await connect()
            .then(async (client) => {
                const db = await client.db('monopoly');
                return await db.collection('users').insertOne(newUser)
                    .then(
                        async (client) => {
                        const user = await db.collection('users')
                        .findOne({'_id': client.insertedId} );
                        console.log(resp);
                        return user;
                        });
            });
        } catch (error) {
            throw error;
        }
    // return newUser;
}

//update user position

module.exports = {
    getUserByName, 
    createNewUser,
    getAllUsers
}