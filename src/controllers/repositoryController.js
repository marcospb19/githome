const repoSchema = require('../schemas/RepositorySchema');

function createRepository(req, res) {
    const body = req.body;

    const payload = {
        name: body.name,
        owner: body.owner,
        description: body.description,
        stars: 0,
        is_private: body.is_private
    };

    repoSchema.insert('repository', payload);

    res.status(500);
}

async function listAllRepositories(req, res) {
    const repoList = await repoSchema.find({});
    res.json(repoList);
}

module.exports = {createRepository, listAllRepositories};
