const { User } = require('../DB_connection')

const login = async (req, res) => {
    try {
        const { email, password } = req.query

        if (!email || !password) {
            return res.status(400).send('Faltan datos')
        }

        const user = await User.findOne({
            where: { email: email }
        })

        if (!user) return res.status(404).send('Usuario no encontrado.')

        if (user.password === password) {
            return res.json({
                access: true
            })
        } else {
            return res.status(403).send('Contraseña incorrecta.')
        }

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = login;