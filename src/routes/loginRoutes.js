const { Router } = require('express');
const { tokenGenerator } = require('../utils/fsUtils')
const {validateLoginData } = require('../middlewares/validateLogin')


const router = Router();

const HTTP_OK_STATUS = 200;

router.post('/', validateLoginData, async (_req, res) => {
    const tokenGenerated = { token: tokenGenerator() };
    return res.status(HTTP_OK_STATUS).json(tokenGenerated);
});

module.exports = router ;