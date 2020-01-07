import express from 'express';
import createError from 'http-errors';

/**
 * Initiate router
 */
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.render('pages/index_page', {
        title: 'Home',
    });
});

/**
 * Error handler example
 */
router.get('/error-handler', (req, res, next) => {
    next(createError(501, 'This is the error title!'));
});

router.get('*', (req, res, next) => {
    next(createError(404, 'File not found!'));
});

export default router;
