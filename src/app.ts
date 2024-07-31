import path from 'path';
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import authorsApiRoutes from './routes/api/authors';
import booksApiRoutes from './routes/api/books';
import authorsHtmlRoutes from './routes/html/authors'
import booksHtmlRoutes from './routes/html/books'

export const app = express();

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.set("trust proxy", true);

app.use(cors())
	.use(helmet())
	.use(express.text(), express.json())
	.use(express.urlencoded({ extended: true }))
	.use(morgan("tiny"))
	.use('/authors', authorsHtmlRoutes)
	.use('/books', booksHtmlRoutes)
	.use('/api/authors', authorsApiRoutes)
	.use('/api/books', booksApiRoutes);