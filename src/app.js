/**
 * Module imports
 */
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import sassMiddleware from 'node-sass-middleware';
import dotenv from 'dotenv';
import hbs from 'hbs';

/**
 * Router improts
 */
import indexRouter from 'routes/index';

/**
 * Dotenv config
 */
dotenv.config();

/**
 * Constants
 */
const env = process.env.NODE_ENV;
const app = express();

/**
 * View engine setup
 */
app.set('views', path.join(__dirname, 'views'));
app.set('partials', path.join(__dirname, 'views/partials'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.set('view options',
    {
        layout: 'layouts/main.hbs',
    }
);


/**
 * Middleware setip
 */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
    /* Options */
    src: path.join(__dirname, './'),
    dest: path.join(__dirname, '../public/'),
    debug: false,
    outputStyle: env === 'development' ? '' : 'compressed',
}));
app.use(express.static(path.join(__dirname, '../public')));

/**
 * Routers middlewares
 */
app.use('/', indexRouter);

/**
 * General Errors middleware
 */
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
    const status = error.status || 500;

    // error 404
    if (status === 404) {
        res.locals.error = {
            status: 404
        };
        res.status(404).render('pages/error_page.hbs', {
            title: 'Page not found!',
            message: 'Sorry this page is not available!',
            status: 404
        });
        return;
    }

    // all other errors
    res.locals = {};
    res.locals.title = 'Internal Server Error!';
    res.locals.message = env === 'development' ? error.message : '';
    res.locals.error = env === 'development' ? error : {
        status
    };

    // render the error page
    res.status(status).render('pages/error_page');
});


export default app;
