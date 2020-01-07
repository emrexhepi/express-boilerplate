import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.render('pages/index_page', {
        title: 'Home',
    });
});

export default router;
