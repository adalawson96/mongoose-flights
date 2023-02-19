const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

// shortcut var to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function() {
    console.log(`connected to mongoose ${db.name} at ${db.host}:${db.port}`);
});