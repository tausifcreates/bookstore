import { Request, Response } from 'express';
import { db } from '../config/db';
import { Author } from '../models/author';
import { Book } from '../models/book';

export const getAuthors = async (req: Request, res: Response) => {
    try {
      const authors = await db<Author>('authors').select();
      res.render('authors', { authors });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch authors' });
    }
};
  
export const getAuthorById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const author = await db<Author>('authors').where('id', id).first();
      if (author) {
        const books = await db<Book>('books').where('author_id', id);
        res.render('author', { author, books });
      } else {
        res.status(404).json({ error: 'Author not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch author' });
    }
};