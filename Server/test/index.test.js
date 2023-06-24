const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS', () => {
    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        })

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = (await agent.get('/rickandmorty/character/1')).body;
            expect(response).toHaveProperty('id')
            expect(response).toHaveProperty('name')
            expect(response).toHaveProperty('species')
            expect(response).toHaveProperty('gender')
            expect(response).toHaveProperty('status')
            expect(response).toHaveProperty('origin')
            expect(response).toHaveProperty('image')
        })

        it('Si hay un error responde con status: 500', async () => {
            await agent.get('/rickandmorty/character/9999999').expect(500);
        })
    })

    describe('GET /rickandmorty/login', () => {
        it('Ruta de login retorna access true', async () => {
            const response = (await agent.get('/rickandmorty/login?email=ireyes@soyhenry.com&password=PT12B4EVER')).body;
            expect(response.access).toEqual(true)
        })

        it('Ruta de login retorna access false', async () => {
            const response = (await agent.get('/rickandmorty/login?email=ireyesom&password=PEVER')).body;
            expect(response.access).toEqual(false)
        })
    })

    describe('POST /rickandmorty/fav', () => {
        const character1 = { id: '1', name: 'NOMBRE 1' }
        const character2 = { id: '2', name: 'NOMBRE 2' }

        it('Devuelve el arreglo enviado por body', async () => {
            const response = (await agent.post('/rickandmorty/fav').send(character1)).body;
            expect(response).toContainEqual(character1)
        })

        it('Devuelve el arreglo enviado por body con los 2 personajes.', async () => {
            const response = (await agent.post('/rickandmorty/fav').send(character2)).body;
            expect(response).toContainEqual(character1)
            expect(response).toContainEqual(character2)
        })
    })

    describe('DELETE /rickandmorty/fav/:id', () => {
        const character1 = { id: '1', name: 'NOMBRE 1' }
        const character2 = { id: '2', name: 'NOMBRE 2' }

        it('Devuelve los personajes existentes luego de ID invalido.', async () => {
            const response = (await agent.delete('/rickandmorty/fav/99999')).body;
            expect(response).toContainEqual(character1)
            expect(response).toContainEqual(character2)
        })

        it('Se elimina un personaje de favoritos exitosamente', async () => {
            const response = (await agent.delete('/rickandmorty/fav/1')).body;
            expect(response).not.toContainEqual(character1);
        })
    })
})