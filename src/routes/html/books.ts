import { Router } from 'express';
import { getBookById } from '../../controllers/books-html-controller';

const router = Router();

router.get('/:id', getBookById);

export default router;