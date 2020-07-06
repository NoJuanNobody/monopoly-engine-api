const MongoClient = require("mongodb").MongoClient;


const uri = "mongodb+srv://root:root@cluster0-piu6x.mongodb.net/<dbname>?retryWrites=true&w=majority";
const dbName = "monopoly";

  
function connect(){
  try {
  return new Promise(async (resolve, reject)=>{
      await MongoClient.connect(
        uri, 
        { useUnifiedTopology: true }
        , async (err, client) => 
      {
        if(err) reject(err);
        console.log("Connected successfully to server");
        const db = await client.db(dbName);
        await resolve(db);
      });
  
    });
  } catch (error) {
        throw error;
    }
}

module.exports = connect;