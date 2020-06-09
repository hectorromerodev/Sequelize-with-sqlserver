# Sequelize-with-sqlserver
This implementations just have sqlserver, to call modals 

### Se plantea usar mssql con orm sequelize para crear un servicio de APIs solo para la consulta de datos.

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
9. Creamos nuestra base de un crud en repositories (para no repetir tanto codigo)
  base-crud.repository.js
10. Create nuestro servicio base de un crud (para manerar errores y objetos inexistentes en la bd)
  base-crud.service.js
11. Create in startup
  container.js

####REST API con awilix
##Con este patron de diseno de software nos encontramos con la sigiente funcionalidad
1. Primero se ejecuta index.js del root, (iniciamos nuestra base de datos)
2. Ejecutamos en el startup index.js (iniciamos nuestro servidor)
3. Se ejecuta el container el config las rutas
4. Al hacer una peticion
	4.1 Se ejecuta el router
	4.2 Se ejecuta el controller (manda a llamar al servido y espera respuesta)
	4.3 Se ejecuta el servicio (manda a llamar al repositorio y espera respuesta)
	4.4 Se ejecuta el repositorio y corre la peticion mandada ( retorna respuesta a servicio)
	4.5 Recibe servicio la respuesta del repositorio (retorna respuesta a controller)
	4.6 Recibe controller la respuesta del servicio (envia la respuesta al usuario final)