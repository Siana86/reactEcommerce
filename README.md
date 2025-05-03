
# 🛍️ E-commerce React App

Esta es una aplicación de tienda online desarrollada con **React**, que permite visualizar productos, filtrarlos por categorías, ver sus detalles, agregarlos al carrito y finalizar una orden de compra con formulario de usuario. 

---

## 📌 Descripción del Proyecto

El proyecto simula el comportamiento de una tienda online, permitiendo:

- Navegar entre productos disponibles.
- Filtrar productos por categoría.
- Ver el detalle individual de cada producto.
- Agregar productos al carrito de compras.
- Visualizar y modificar el contenido del carrito.
- Finalizar la compra mediante un formulario de orden.
- Confirmar la orden con una visualización final.

Incluye navegación con rutas, manejo de estado global a través de `Context API`, y persistencia de órdenes utilizando **Firebase Firestore**.

---

## ⚙️ Herramientas y Tecnologías Utilizadas

- **React** (v18+)
- **Context API** para gestión de estado global (carrito, productos)
- **Firebase Firestore** para almacenar órdenes de compra
- **Tailwind CSS / CSS tradicional** para estilos
- **Cloudinary** para imágenes estáticas
- **React Icons** (`react-icons/io5`) para iconografía de carrito

---


## Funcionalidades claves
Son funcionalidades requeridas para un optimo comportamiento del proyecto: 

-Routing Dinámico: Rutas parametrizadas como /detalle/:id y /categoria/:categoria.

-Carrito de Compras: Agregar, eliminar, y calcular total en tiempo real.

-Formulario de Orden: Captura de datos y envío a Firebase.

-Carga Condicional: Indicador de carga (Loader) mientras se procesan datos.

-Imágenes de confirmación y error: Vía Cloudinary.



## Deployment
Descarga el proyecto y ejecuta

```bash
  npm run deploy
```

