const mongoose = require('mongoose');

const repositorySchema = mongoose.Schema({
    name: String,
    owner: String,
    description: String,
    stars: Number,
    is_private: Boolean
},
{
    timestamps: true
});

module.exports = mongoose.model('repository', repositorySchema);

