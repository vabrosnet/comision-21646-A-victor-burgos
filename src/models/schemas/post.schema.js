import { body } from "express-validator";

export const createPostSchema = [
    body('title')
        .isString().withMessage('Must be string')
        .notEmpty().withMessage('It should not be empty'),
    body('content')
        .isString().withMessage('Must be string')
        .notEmpty().withMessage('It should not be empty'),
    body('link')
        .isURL().withMessage('Enter a valid url')
        .notEmpty().withMessage('It should not be empty'),
]

export const editPostSchema = [
    body('title')
        .optional()
        .isString().withMessage('Must be string')
        .notEmpty().withMessage('It should not be empty'),
    body('content')
        .optional()
        .isString().withMessage('Must be string')
        .notEmpty().withMessage('It should not be empty'),
    body('link')
        .optional()
        .isURL().withMessage('Enter a valid url')
        .notEmpty().withMessage('It should not be empty'),
]