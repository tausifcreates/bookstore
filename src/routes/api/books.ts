// src/routes/books.ts
import { Router } from 'express';
import { getBooks, getBookById, createBook, updateBook, deleteBook, getBooksByAuthor } from '../../controllers/books-api-controller';
import { bookValidator, validate } from './../../utils/validators';

const router = Router();

router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/', bookValidator, validate, createBook);
router.put('/:id', bookValidator, validate, updateBook);
router.delete('/:id', deleteBook);
router.get('/author/:id', getBooksByAuthor);

export default router;
