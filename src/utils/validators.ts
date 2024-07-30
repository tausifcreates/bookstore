import { body, validationResult } from 'express-validator';

export const authorValidator = [
  body('name').isString().notEmpty(),
  body('birthdate').isDate(),
];

export const bookValidator = [
  body('title').isString().notEmpty(),
  body('published_date').isDate(),
  body('author_id').isInt().notEmpty(),
];

export const validate = (req: any, res: any, next: any) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};