const http = require('http');
const PORT = 3001;
const characters = require('./utils/data')

http
    .createServer((req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        const { url } = req;
        if (url.includes("/rickandmorty/character")) {
            const id = Number(url.split('/').pop())
            const character = characters.find((char) => {
                return char.id === id
            })

            res.writeHead(200, { 'Content-type': 'application/json' });
            res.end(JSON.stringify(character))

        }
    })
    .listen(PORT, 'localhost')
