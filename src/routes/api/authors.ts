// src/routes/authors.ts
import { Router } from 'express';
import { getAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor } from '../../controllers/authors-api-controller';
import { authorValidator, validate } from '../../utils/validators';
import { getBooksByAuthor } from '../../controllers/books-api-controller';

const router = Router();

router.get('/', getAuthors);
router.get('/:id', getAuthorById);
router.get('/:id/books', getBooksByAuthor);
router.post('/', authorValidator, validate, createAuthor);
router.put('/:id', authorValidator, validate, updateAuthor);
router.delete('/:id', deleteAuthor);

export default router;
