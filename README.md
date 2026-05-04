🛠️ Tecnologías utilizadas
Framework: NestJS

Lenguaje: TypeScript

Gestor de paquetes: pnpm

Base de Datos: MySQL

ORM: TypeORM

📋 Requisitos Previos
Asegúrate de tener instalados los siguientes componentes:

Node.js (Versión 18 o superior)

pnpm (npm install -g pnpm)

MySQL Server corriendo localmente

⚙️ Configuración del Proyecto
1. Instalación de dependencias
Usa el gestor de paquetes pnpm para instalar todas las librerías necesarias:

Bash

pnpm install
2. Configuración de Variables de Entorno
Crea un archivo llamado .env en la raíz de la carpeta del backend y configura los siguientes valores con tus credenciales de MySQL:

Fragmento de código

PORT=3000

DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_de_tu_bd
JWT_CONSTANTS=Semilla_Secreta

3. Configuración de la Base de Datos
El archivo de respaldo (dump) de la base de datos se encuentra en la raíz del proyecto (archivo .sql). Para configurarla:

Crea una base de datos vacía en tu gestor de MySQL (ej. MySQL Workbench).

Importa el archivo .sql proporcionado para cargar la estructura y los datos iniciales.

🏃‍♂️ Ejecución del Proyecto
Para levantar el servidor en modo de desarrollo con recarga automática:

Bash

pnpm run start:dev
El servidor estará disponible en: http://localhost:3000 (o el puerto que hayas configurado).

📂 Estructura Principal
src/: Contiene la lógica del negocio, controladores y módulos.

src/main.ts: Punto de entrada de la aplicación.

*.sql: Archivo de base de datos para importación rápida.
