# **💪 HW5 | Express - Integration**

## **🕒 DURACIÓN ESTIMADA**

XX minutos

<br />

---

<div align="center">

## **💻 RICK AND MORTY APP 💻**

</div>

## **📝 INTRODUCCIÓN**

En esta homework crearemos un servidor con la librería de express. A su vez crearemos distintas rutas, y también simularemos una base de datos apra nuestros personajes favoritos.

Esta vez las rutas que crearemos son:

-  **`GET getCharById`**: esta ruta obtendrá personajes de la API mediante su **id**.
-  **`GET login`**: esta ruta es la que le dará o no acceso al usuario para usar la aplicación.
-  **`POST postFav`**: esta ruta guardará en nuestro servidor a nuestros personajes favoritos.
-  **`DELETE deleteFav`**: esta ruta eliminará a un personaje de nuestros favoritos.

<br />

---

## **📋 INSTRUCCIONES**

### **👩‍💻 EJERCICIO 1 | Servidor**

Instala la librería **`express`**. Luego dirígete al archivo **`index.js`** y elimina todo su contenido. Ahora crearemos el servidor con esta librería.

1. Dentro del archivo **index.js** importa **`express`** e inicializa un nuevo servidor en el puerto 3001. Esta sería una forma de seguir buenas prácticas:

```js
const express = require('express');
const server = express();
const PORT = 3001;

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});
```

¡Acabas de crear tu servidor con Express! 😎

<br />

---

### **👩‍💻 EJERCICIO 2 | GET getCharById**

En este ejercicio construiremos la nueva versión de este controlador para que nos sirva con **express**. Dirígete al archivo **`getCharById.js`** y elimina todo el contenido que hay dentro de él.

1. Crea una constante llamada **`URL`** y guarda lo siguiente: "**https://rickandmortyapi.com/api/character/**".

2. Crea una función con el nombre **`getCharById`** y expórtala. Recibe por parámetro a los objetos **`req`** y **`res`**.

3. Dentro de la función haz una petición a la API a partir del **id** que recibes por **`Params`**.

> [**NOTA**]: no olvides importar **`axios`**.

4. En el caso de que todo salga OK y se encuentre a un personaje, devuelve un JSON con las propiedades: **id**, **status**, **name**, **species**, **origin**, **image** y **gender**.

5. En el caso de que todo salga OK pero no se encuentre a un personaje, devuelve un mensaje con **status 404** que diga _Not fount_.

6. Si hay un error debes responder con un status 500, y un texto con la propiedad **`message`** de **error**.

</br>

---

### **👩‍💻 EJERCICIO 3 | GET login**

En este ejercicio construiremos un controlador que validará que el usuario que se está logeando tenga permiso. Para definir quienes tendrán permisos ve a tu carpeta **utils** y crea un archivo llamado **`users.js`**. Aquí solo deberas exportar un arrgelo con un solo objeto. Este objeto debe tener esta estructura:

```js
module.exports = [{email: /*Tu email*/, password: /*Tu password*/}];
```

1. Dentro de tu carpeta **controllers** crea un archivo llamado **`login.js`**. Dentro de este deberás crear y exportar una función que recibirá por parámetro a los objetos **`req`** y **`res`**.

2. Deberás obtener los datos **email** y **password** que recibes mediante **`Query`**. Una vez hecho esto, importa tu arreglo de usuarios y verifica si dentro de ese arreglo hay un usuario que coincida tanto su email y su contraseña con los que recibes por **`Query`**.

3. En el caso de que haya un usuario que cumpla esa condición, entonces debes devolver una respuesta con **status 200**, y, en formato JSON, un objeto con una propiedad **access: `true`**. Caso contrario devuelve lo mismo pero con la propiedad **access: `false`**.

<br />

---

### **👩‍💻 EJERCICIO 4 | POST & DELETE favorites**

Dentro de tu carpeta **controllers** crea un archivo con el nombre **`handleFavorites.js`**. Dentro de este archivo deberás declarar un **arreglo vacío** llamado **`myFavorites`**.

> [**NOTA**]: es importante que **NO** declares este arreglo como constante ya que lo modificaremos.

1. Crea una función llamada **`postFav`** que reciba por parámetro los objetos **`req`** y **`res`**.

2. Agrega en tu arreglo de favoritos el personaje que estarás recibiendo por **`Body`**.

3. Finalmente devuelve tu arreglo de favoritos en formato JSON.

4. Crea una función llamada **`deleteFav`** que reciba por parámetro los objetos **`req`** y **`res`**.

5. Filtra a tus personajes favoritos de manera que elimines aquel que tiene el mismo **id** que recibes por **`Params`**.

6. Finalmente devuelve tu arreglo de favoritos en formato JSON.

7. Exporta ambas funciones.

<br />

---

### **👩‍💻 EJERCICIO 5 | Rutas**

Dirígete a la carpeta **routes** y crea un archivo con el nombre **`index.js`**. Dentro de este deberás importar todos tus controladores. También deberás importar las función **`Router`** de **express**. Crea una ruta para cada controlador con los siguientes paths:

-  GET **`getCharById`**: "/character/:id"
-  GET **`login`**: "/login"
-  POST **`postFav`**: "/fav"
-  DELETE **`deleteFav`**: "/fav/:id"

Finalmente exporta tu router.

<br />

---

### **👩‍💻 EJERCICIO 6 | Middlewares**

Dirígete al archivo **`index.js`** en el que tienes tu servidor. Aquí deberás:

1. Importar tu router.

2. Copia este middleware en tu servidor:

   ```js
   server.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Credentials', 'true');
      res.header(
         'Access-Control-Allow-Headers',
         'Origin, X-Requested-With, Content-Type, Accept'
      );
      res.header(
         'Access-Control-Allow-Methods',
         'GET, POST, OPTIONS, PUT, DELETE'
      );
      next();
   });
   ```

3. Crea un middleware que ejecute a **`express.json()`**.

4. Crea un middleware que agregue el string "**`/rickandmorty`**" antes de cada una de tus rutas.

<br />

---

### **👩‍💻 EJERCICIO 7 | Back & Front**

Llegó el momento para conectar nuestro nuevo servidor con nuestro Front-End. Para este ejercicio simplemente tendrás que reemplazar código de tu Front-End por los distintos snippets que te presentaremos a continuación. Para esto dirígete a tu carpeta **Client**.

1. Dirígete a tu archivo **`App.js`** y busca tu función **`login`**. Elimina por completo esta función, ya que la reemplazaremos con esta:

   ```js
   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }
   ```

2. Ahora conectaremos nuestra ruta **postFav**. Para esto dirígete a tu archivo **`actions.js`** y reemplaza tu función addFav. Luego dirígete a tu **`reducer`** y reemplaza tu caso "ADD_FAV".

   ```js
   import axios from "axios";

   // ACTION | addFav
   export const addFav = (character) => {
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
      return (dispatch) => {
         axios.post(endpoint, character).then(({ data }) => {
            return dispatch({
               type: 'ADD_FAV',
               payload: data,
            });
         });
      };
   };

   // REDUCER | ADD_FAV
   case 'ADD_FAV':
         return { ...state, myFavorites: payload, allCharacters: payload };
   ```

> [**NOTA**]: debes importar **axios**.

3. Por último nos queda conectar nuestra ruta **deleteFav**. Para esto dirígete a tu archivo **`actions.js`** y reemplaza tu función removeFav. Luego dirígete a tu **`reducer`** y reemplaza tu caso "REMOVE_FAV".

   ```js
   // ACTION | removeFav
   export const removeFav = (id) => {
      const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
      return (dispatch) => {
         axios.delete(endpoint).then(({ data }) => {
            return dispatch({
               type: 'REMOVE_FAV',
               payload: data,
         });
         });
      };
   };

   // REDUCER | REMOVE_FAV
   case 'REMOVE_FAV':
         return { ...state, myFavorites: payload };
   ```
