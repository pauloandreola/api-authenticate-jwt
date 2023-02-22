# api-authenticate-jwt

APi authenticate with JWT, Typescript and TypeORM (Data Mapper).

1 - Execute yarn init -Y
2 - Install - yarn add typescript ts-node nodemon -D
3 - Execute npx tsc --init
4 - Install - yarn add express
5 - Install - yarn add @types/express -D
6 - Crete new script on package.json "dev"...
7 - Configure index and rotes files inside src folder
8 - Install yarn add typeorm reflect-metadata
9 - Install (Its not necessary) yarn add @types/node -D
10 - Install (PostgreSQL) yarn add pg
11 - Install yarn dotenv 
12 - Configure tsconfig... 
"emitDecoratorMetadata": true,
"experimentalDecorators": true,
13 - Create and config ormconfig file.... updated typeorm now is data-source file
14 - Configure no package.json - "typeorm": "typeorm-ts-node-commonjs", inside os scripts 
15 - Execute yarn typeorm migration:create ./src/database/migrations/CreateUserTable to create a new migration