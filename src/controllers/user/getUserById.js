const users = require('../../data/users');

exports.getUserById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!id) {
        return res.status(400).json({ error: 'Incorrect ID' });
    }

    let user = users.filter(user => user.id === id)[0];
    if (!user) {
        return res.status(404).json({ error: 'Unknown user' });
    }

    console.log(req.method)
    console.log(req.headers['user-agent'])
    res.json(user);
};