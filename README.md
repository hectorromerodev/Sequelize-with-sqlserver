# Sequelize-with-sqlserver
This implementations just have sqlserver, to call modals 

### Se plantea usar mysql con orm sequelize para crear un servicio de APIs

1. Iniciamos nuestro proyect en gitHub y npm init
2. Instalar dependencias de desarrollo 
  nodemon autosave: npm i --save-dev nodemon
   variables de entorno: npm i --save-dev dotenv
  --> npm i --save-dev nodemon dotenv
3. Instalamos dependencias de produccion 
  ORM y express: npm i sequelize express
  Encriptar: npm i bcrypt
  body-parser: npm i body-parser
  cors para produccion online o trabajar de forma remota: npm i cors
  Json web token: npm i jsonwebtoken
  SQL server: npm i mssql
  Helmet ayuda a la seguridad de mi app: npm i helmet --save
  Compression para reducor el tamano de response: npm i compression --save
  Captura exepciones asincronas: npm i express-async-errors --save
  dependency injection:  npm i awilix
  Optimizar con cache: npm i memory-cache --save
  Swagger para documentacion: npm i swagger-ui-express 
  --> INSTALAR TODO 
    npm i sequelize express bcrypt body-parser cors dotenv jsonwebtoken mssql helmet compression express-async-errors awilix memory-cache swagger-ui-express --save
4. Agregamos variables de entorno de nuestra app en la carpeta raiz
  .env
5. Agregamos a .gitignore si tiene otro nombre
  *.env 
6. Creamos carpeta src y test
7. Creamos carpetas con su index.js 
    - [CARPETAS] config, controllers, models, routes, startup, src, middlewares, repositories, services, helpers
8. Creamos el archivo index en la carpeta root para inicializa nuestro servidor
  index.js
