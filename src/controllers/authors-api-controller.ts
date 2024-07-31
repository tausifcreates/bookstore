// src/controllers/authorsController.ts
import { Request, Response } from 'express';
import { db } from '../config/db';
import { Author } from '../models/author';

export const getAuthors = async (req: Request, res: Response) => {
  try {
    const authors = await db<Author>('authors').select();
    res.json(authors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch authors' });
  }
};

export const getAuthorById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const author = await db<Author>('authors').where('id', id).first();
    if (author) {
      res.json(author);
    } else {
      res.status(404).json({ error: 'Author not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch author' });
  }
};

export const createAuthor = async (req: Request, res: Response) => {
  const { name, bio, birthdate } = req.body;
  try {
    const data = await db<Author>('authors').insert({ name, bio, birthdate }).returning('id');
    const id = data[0].id;
    res.status(201).json({ id, name, bio, birthdate });
  } catch (error) {
    console.log(error);
    console.error(error);
    res.status(500).json({ error: 'Failed to create author' });
  }
};

export const updateAuthor = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, bio, birthdate } = req.body;
  try {
    const updated = await db<Author>('authors').where('id', id).update({ name, bio, birthdate });
    if (updated) {
      res.json({ id, name, bio, birthdate });
    } else {
      res.status(404).json({ error: 'Author not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update author' });
  }
};

export const deleteAuthor = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deleted = await db<Author>('authors').where('id', id).del();
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Author not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete author' });
  }
};
