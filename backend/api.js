const express = require('express');
let { MongoClient } = require(`mongodb`);
let database = new MongoClient(`REDACTED`);

/**
 * Connects to the database and checks if the required collections exist.
 * 
 * @param {string} db The database name.
 * @param {string[]} collection The required collection names. 
 * @returns {Promise<string>}
 */
function connect({ db, collection }) {
    return new Promise(async (resolve, reject) => {

        // Connect to database and catch errors.
        await database.connect().catch(() => reject('Error connecting to database!'));

        // Redecare database to the database name.
        database = database.db(db);

        // Check if data exists within the database.
        const collections = await database.listCollections().toArray((e, c) => c);
        if (!collections.length) return reject('No collections found, probably wrong database name!');

        // Check if all collections exist within the database, if they do then define them under 'database'.
        for (const set of collections) {
            if (!collection.includes(set.name)) return reject(`Collection ${set.name} not found!`);
            else database[set.name] = database.collection(set.name);
        }

        // Return a success message.
        resolve(`Connected to Database!`);

    });
}

// Connect to the database and give it the required collections.
connect({
    db: 'Vehicle',
    collection: ['battery', 'brakes', 'hvac', 'config']
})
    .then(console.log)
    .then(() => api())
    .catch(console.error);

function api() {
    express()
        .use(express.json())
        .get('/', (req, res) => {
            res.status(200).json({
                code: 200,
                status: 'Active',
            });
        })
        .get('/:id', async (req, res) => {
            let data = await database[req.params.id].findOne();
            res.status(200).json(data);
        })
        .listen(3000, () => console.log('Server running on port 3000'));
}