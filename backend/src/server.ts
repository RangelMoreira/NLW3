import express from 'express';
import path from 'path';
import cors from 'cors';

//deve vir depois da importação do express
import 'express-async-errors';

import './database/connection';

//deve vir depois da conexão com o banco de dados
import routes from './routes';

import errorHandler from './errors/handler';

const app = express();

app.use(cors());

app.use(express.json());

//deve vir depois do express.json
app.use(routes);

//permitindo o uso das imagens
app.use('/uploads', express.static(path.join(__dirname,'..','uploads')));

app.use(errorHandler);

app.listen(3333,()=>{console.log("aplicação rodando na porta 3333")});

