import { Router } from 'express';
const router = Router();

import { 
    getEntityById, 
    getEntitys,
    getEntityByName
} from '../controllers/entity.controller'

router.get("/getEntityByName/:name", getEntityByName);
router.get("/:id", getEntityById);
router.get("/", getEntitys);

export default router;
