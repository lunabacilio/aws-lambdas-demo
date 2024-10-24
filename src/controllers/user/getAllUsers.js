const users = require('../../data/users');

exports.getAllUsers = (req, res) => {
    console.log(req.method)
    console.log(req.headers['user-agent'])
    res.json(users);
};
