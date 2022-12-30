const { Router } = require('express');
const { readTalkers, talkerById,tokenGenerator } = require('../utils/fsUtils')
const {validateLoginData } = require('../middlewares/validateLogin')

const router = Router();

const HTTP_OK_STATUS = 200;

router.get('/talker', async (_req, res) => {
    const talker = await readTalkers();
    return res.status(HTTP_OK_STATUS).json(talker);
});

router.get('/talker/:id', async (req, res) => {
    const { id } = req.params;
    const talkersData = await talkerById(id);

    if (talkersData === undefined) {
        return res.status(404).json({
            message: 'Pessoa palestrante não encontrada',
        });
    }
    res.status(HTTP_OK_STATUS).json(talkersData);
});

router.post('/login', validateLoginData, async (_req, res) => {
    const tokenGenerated = { token: tokenGenerator() };
    return res.status(HTTP_OK_STATUS).json(tokenGenerated);
});