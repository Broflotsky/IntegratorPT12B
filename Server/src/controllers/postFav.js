const { Favorite } = require('../DB_connection')

const postFav = async (req, res) => {
    try {
        const { id, name, origin, status, image, species, gender } = req.body

        if (!id || !name || !origin || !status || !image || !species || !gender) {
            return res.status(401).send('Faltan datos')
        }

        await Favorite.findOrCreate({
            where: { id, name, origin, status, image, species, gender }
        })

        const allFavorites = await Favorite.findAll()

        return res.json(allFavorites)

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = postFav;