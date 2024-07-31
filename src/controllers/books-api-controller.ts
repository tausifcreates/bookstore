// src/controllers/booksController.ts
import { Request, Response } from 'express';
import { db } from '../config/db';
import { Book } from '../models/book';

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await db<Book>('books').select();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch books' });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const book = await db<Book>('books').where('id', id).first();
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch book' });
  }
};

export const createBook = async (req: Request, res: Response) => {
  const { title, description, published_date, author_id } = req.body;
  try {
    const data = await db<Book>('books').insert({ title, description, published_date, author_id }).returning('id');
    const id = data[0].id;
    res.status(201).json({ id, title, description, published_date, author_id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create book' });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, published_date, author_id } = req.body;
  try {
    const updated = await db<Book>('books').where('id', id).update({ title, description, published_date, author_id });
    if (updated) {
      res.json({ id, title, description, published_date, author_id });
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update book' });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deleted = await db<Book>('books').where('id', id).del();
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete book' });
  }
};

export const getBooksByAuthor = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const books = await db<Book>('books').where('author_id', id);
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch books for author' });
  }
};
