# **💪 HW6 | Async Await - Integration**

## **🕒 DURACIÓN ESTIMADA**

XX minutos

<br />

---

<div align="center">

## **💻 RICK AND MORTY APP 💻**

</div>

## **📝 INTRODUCCIÓN**

En esta homework vamos a transformar todas nuestras funciones asincrónicas que utilizan promesas a **`async await`**.

🤓 ¿Preparad@? 🤓

<br />

---

<div align="center">

## **📋 INSTRUCCIONES 📋**

</div>

## **🚀 PARTE 1 | Server 🚀**

<br />

### **👩‍💻 EJERCICIO 1 | GET getCharById**

Dirígete a tu carpeta **`controllers`** y modifica la función **`getCharById`** de modo tal que utilices **async/await** y no promesas.

2. Para manejar correctamente el error envuelve el contenido de esta función en un **try-catch**.

<br />

---

## **🚀 PARTE 2 | Client 🚀**

<br />

### **👩‍💻 EJERCICIO 2 | APP**

Dirígete a tu archivo **`App.js`** y modifica:

1. La función **`onSearch`** de modo tal que utilices **async/await** y no promesas.

2. La función **`login`** de modo tal que utilices **async/await** y no promesas.

3. Para manejar correctamente el error envuelve el contenido de ambas funciones en un **try-catch**.

<br />

---

### **👩‍💻 EJERCICIO 3 | ACTIONS**

Dirígete a tu archivo **`/redux/actions.js`** y modifica:

1. La función **`addFav`** de modo tal que utilices **async/await** y no promesas.

2. La función **`removeFav`** de modo tal que utilices **async/await** y no promesas.

3. Para manejar correctamente el error envuelve el contenido de ambas funciones en un **try-catch**.

<br />

---

<br />

> [**NOTA**]: no modificaremos el archivo **`Detail.jsx`** porque suele ser más conveniente utilizar promesas en los **useEffect** que utilizar async/await.

<br />

---

### **👀 COMPROBEMOS...**

Levanta el servidor y tu proyecto Front-End. Revisa que todo aún funcione correctamente:

1. Que puedas traer cualquier personaje por su **id** desde la Search Bar.
2. Que puedas ingresar al detalle de cualquier personaje que hayas encontrado.
3. Que puedas agregar todos los personajes que quieras a tus favoritos.
4. Que puedas eliminar a todos los personajes que quieras de tus favoritos.
