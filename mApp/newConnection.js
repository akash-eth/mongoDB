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
        
        //------------------------------------------------------------------
        // find() in dB:

        const student = db.collection("students");
        const searchCursor = await student.find();
        // const searchCursor = await student.find({"name": "Akash"});  // to have a more specific search !!
        
        const result = await searchCursor.toArray();
        console.table(result);
        // result.forEach(r => {console.log(r);})
        /*
        while (await searchCursor.hasNext()) {
            console.log(await searchCursor.next());
        }
        */

        //------------------------------------------------------------------
        // insert() in dB: it is tested and working well !!

        // const insertCursor = await student.insertMany([
        //     {
        //         name: "Amit",
        //         isVerified: true
        //     },
        //     {
        //         name: "Aman",
        //         isVerified: true
        //     }
        // ])
        // console.log(insertCursor.insertedCount); 


        //------------------------------------------------------------------
        // update() in dB: it is tested and working fine !!
        /*
        const updateCursor = await student.updateMany({isVerified: true}, {
            $set :{courseCount: 4}
        })
        console.log(updateCursor.modifiedCount);
        */

        //------------------------------------------------------------------
        // delete() in dB: it is tested and working fine !!
        /*
        const deleteCursor = await student.deleteMany({isVerified: true})
        console.log(deleteCursor.deletedCount);
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