const User = require('../models/user')

exports.getAllUsers = async (req, res) => {
    let pagesize = 5
    let n = req.query.page ? req.query.page : 1
    await User.find({ role: { $eq: 2 } }).skip(pagesize * (n - 1)).limit(pagesize).select(['-hashed_password', '-salt']).then((users) => {
        if (!users) {
            return res.status(404).json({ error: 'Not found users' })
        }
        return res.status(200).json(users)

    })
        .catch(error => {
            console.log(error)
            return res.status(404).json(error.message)
        })
}
