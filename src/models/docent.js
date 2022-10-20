const mongoose = require('mongoose');
const campus = require('./campus');

const DocentSchema = new mongoose.Schema({
    voornaam: {type: String},
    achternaam: {type: String},
    campussen: [{type: mongoose.Schema.Types.ObjectId, ref: campus}],
}, {
    collection: 'docent'
});

module.exports = mongoose.model('docent', DocentSchema);