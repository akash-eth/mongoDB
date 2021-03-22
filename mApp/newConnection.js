const {MongoClient} = require('mongodb');

const uri = "mongodb://localhost:27017";


async function connect() {

    const client = new MongoClient(uri)
    try {
        await client.connect();
        const db = client.db("mongoTube");
        console.log(`Connected to database ${db.databaseName}`);
        
        /* gives us all the collections available in mongoTube dB (i.e. students): 
        const collections = await db.collections();
        collections.forEach(c => {console.log(c.collectionName);});
        */
    }
    catch (ex) {
        console.log("ERROR", ex);
    }
    finally {
        client.close();
    }

}

connect();