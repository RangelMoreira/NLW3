//módulo de rotas do express
import {Router} from 'express';

import multer from 'multer';

import uploadConfig from './config/upload';

import OrphanagesController from './controllers/OrphanagesController';

import {getRepository} from 'typeorm';
import Orphanage from './model/Orphanage'

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index );
routes.get('/orphanages/:id', OrphanagesController.show );

routes.post('/orphanages', upload.array('images'),OrphanagesController.create );


export default routes;
  