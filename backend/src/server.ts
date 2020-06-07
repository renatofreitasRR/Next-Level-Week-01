import express from 'express';
import path from 'path';
import routes from './routes';
import cors from 'cors';
import { errors } from 'celebrate';
const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(errors());
app.listen(5555);

//Rota: url completa
//Recurso: /users = entidade acessada

//GET: buscar informações do back-end
//POST: criar uma nova informação no back-end
//PUT: atualizar informações no back-end
//DELETE: deletar informações no back-end

//Request Param: parametros que vem na própria rota que identificam um recurso
//Query Param: parametros opcionais da rota
//Request Body: parametros para criação/atualização de informações



// npm init -y
// npm install express
// npm install @types/express -D
// npm install ts-node -D
// npm install typescript -D
// npx tsc --init
// npm install ts-node-dev -D
// npx ts-node src/server.ts
// npm run dev