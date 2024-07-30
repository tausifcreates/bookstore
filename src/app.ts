import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import authorsRoutes from './routes/authors';
import booksRoutes from './routes/books';

export const app = express();

app.set("trust proxy", true);

app.use(cors())
	.use(helmet())
	.use(express.text(), express.json())
	.use(express.urlencoded({ extended: true }))
	.use(morgan("tiny"))
	.use('/authors', authorsRoutes)
	.use('/books', booksRoutes);