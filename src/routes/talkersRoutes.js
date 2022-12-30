const { Router } = require('express');
const { readTalkers, talkerById, addNewTalkers,editTalkerById } = require('../utils/fsUtils')
const {
    validateToken,
    validateName,
    validateAge,
    validateTalk,
    validateWatchedAt,
    validateRate,
} = require('../middlewares/validateTalker')

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

router.post('/talker', validateToken,
    validateName, validateAge, validateTalk, validateWatchedAt, validateRate, async (req, res) => {
        const talkerData = req.body;
        const talkers = await addNewTalkers(talkerData);
        return res.status(201).json(talkers);
    });


router.put('/talker/:id', validateToken,
    validateName, validateAge, validateTalk, validateWatchedAt, validateRate, async (req, res) => {
        const { id } = req.params;
        const newUpTalker = req.body;
        const newUpData = await editTalkerById(Number(id), newUpTalker);
        return res.status(200).json(newUpData);
    });
