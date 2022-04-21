//great websites
gitignore.io

//instalar
editorconfig
ESLint
extension chrome: JSON viewer

//instalar dependencias de desarrollo
npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D //Dependencias para entorno de desarrollo

//luego de la instación, vamos a probar entornos de desaroolo y produccion
npm run dev //desarrollo
npm run start //produccion


//instalar libreria para generar data fake
npm i faker@5.5.3 -S

//manejo de errores
npm i @hapi/boom

//validacion de datos con Joi
npm i Joi

//acpatar solicitudes a backend desde otros fronts CORS(Control de acceso HTTP (CORS))
npm i cors


//********************
DESPLIEGUE EN HEROKU
https://devcenter.heroku.com/articles/deploying-nodejs
https://dashboard.heroku.com/
https://lit-mesa-83065.herokuapp.com/api/v1/products //el app listo :)



//Docker installation
https://platzi.com/clases/2282-nestjs-typeorm/37289-configuracion-de-postgres-en-docker/
https://platzi.com/tutoriales/2507-backend-nodejs-postgres/12355-activar-hyper-v-en-windows-home-para-docker/

//Docker commands
//enel directorio raiz del proyecto
docker-compose up -d postgres //crea un contenedor de postgres
docker-compose up -d pgadmin
docker-compose ps //lista los contenedores activos
docker-compose down //detiene el servicio
docker-compose up //levanta el servicio

docker ps //muestra ID del contenedor
docker inspect 01489e150def //detalle del contenedor por ID


//Levantar pgadmin
http://localhost:5050/login?next=%2F


//Conectar Node con Postgress
https://node-postgres.com/


//Instalar libreria para leer archivo .env
npm i dotenv
