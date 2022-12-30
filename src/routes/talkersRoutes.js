const { Router } = require('express');

const router = Router();

router.get('/talker', async (_req, res) => {
    const talker = await readTalkers();
    return res.status(HTTP_OK_STATUS).json(talker);
  });