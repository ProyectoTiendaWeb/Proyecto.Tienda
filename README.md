# Proyecto Tienda

Este proyecto es una aplicación de tienda que consta de un **frontend** desarrollado con React y Webpack, y un **backend** desarrollado con Express. Sigue las instrucciones para configurar el entorno y comenzar a trabajar.

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos en tu sistema:

- **Node.js**: versión 16.x o superior
- **npm**: viene incluido con Node.js
- **MySQL**: para gestionar la base de datos

---

## Configuración del Proyecto

### 1. Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/proyecto-tienda.git
cd proyecto-tienda
```

### 2. Configurar el Backend

#### 1. Ve a la carpeta del backend:
```bash
cd backend
```

#### 2. Instalar las dependencias:
```bash
npm install
```

#### 3. Crea un archivo .env en la carpeta backend con las siguientes variables de entorno:
```text
DB_HOST=127.0.0.1
DB_USER=laravel
DB_PASSWORD=Laravel2021
DB_NAME=tienda
DB_PORT=3306
```

#### 4. Inicia el servidor:
```bash
node app.js
```

El backend estará disponible en http://localhost:4000 (o el puerto configurado en node).

### 5. Crear las tablas en la base de datos:
```sql
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) UNIQUE NOT NULL,
    edad INT NOT NULL,
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 6. Prueba la API con curls:
```bash
# Obtener todos los usuarios
curl -X GET http://localhost:4000/api/usuarios
# Obtener un usuario por ID
curl -X GET http://localhost:3000/api/usuarios/1
# Crear un nuevo usuario
curl -X POST http://localhost:3000/api/usuarios \
-H "Content-Type: application/json" \
-d '{
  "nombre": "Juan Pérez",
  "correo": "juan@example.com",
  "edad": 30
}'
# Actualizar un usuario
curl -X PUT http://localhost:3000/api/usuarios/1 \
-H "Content-Type: application/json" \
-d '{
  "nombre": "Juan Actualizado",
  "correo": "juan_updated@example.com",
  "edad": 31
}'
```

### 3. Configurar el Frontend

#### 1. Ve a la carpeta del frontend:   
```bash
cd frontend
```

#### 2. Instala las dependencias:
```bash
npm install
```

#### 3. Inicia el servidor de desarrollo:
```bash
npm start
```

El frontend estará disponible en http://localhost:3000 (o el puerto configurado en Webpack).

___

## Estructura del Proyecto
```text
proyecto-tienda/
├── backend/      # Código del servidor con Express
│   ├── app.js    # Archivo principal del servidor
│   ├── routes    # Rutas de la API
│   ├── config/   # Configuración de base de datos y otros
│   └── routes/   # Rutas de la API
├── frontend/     # Código del cliente con React
│   ├── src/      # Código fuente de React
│   ├── public/   # Archivos estáticos
└── README.md     # Este archivo
```






