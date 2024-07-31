import { Router } from 'express';
import { getAuthors, getAuthorById } from '../../controllers/authors-html-controller';

const router = Router();

router.get('/', getAuthors);
router.get('/:id', getAuthorById);

export default router;