import { Request, Response } from 'express';
import { db } from '../config/db';
import { Author } from '../models/author';
import { Book } from '../models/book';
  
export const getBookById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const book = await db<Book>('books').where('id', id).first();
      if (book) {
        const author = await db<Author>('authors').where({ id: book.author_id }).first();
        res.render('book', { book, author });
      } else {
        res.status(404).json({ error: 'Book not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch book' });
    }
};