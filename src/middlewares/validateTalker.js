const validateToken = (req, res, next) => {
    const requiredProperties = ['authorization'];
    const { authorization } = req.headers;
    if (!requiredProperties.every((property) => property in req.headers)) {
        return res.status(401).send({ message: 'Token não encontrado' });
    }
    if (authorization.length !== 16 || typeof authorization !== 'string') {
        return res.status(401).send({ message: 'Token inválido' });
    }
    next();
};

const validateName = (req, res, next) => {
    const { name } = req.body;
    if (!name) return res.status(400).send({ message: 'O campo "name" é obrigatório' });
    if (name.length < 3) {
        return res.status(400).send({ message: 'O "name" deve ter pelo menos 3 caracteres' });
    }
    next();
};

const validateAge = (req, res, next) => {
    const { age } = req.body;
    if (!age) return res.status(400).send({ message: 'O campo "age" é obrigatório' });
    if (age < 18) {
        return res.status(400).send({ message: 'A pessoa palestrante deve ser maior de idade' });
    }
    next();
};

const validateTalk = (req, res, next) => {
    const { talk } = req.body;
    // const { watchedAt } = talk;
    if (typeof talk !== 'object' || talk === undefined) {
        return res.status(400).send({ message: 'O campo "talk" é obrigatório' });
    }
    // if (!watchedAt) return res.status(400).send({ message: 'O campo "watchedAt" é obrigatório' });
    next();
};

const validateWatchedAt = (req, res, next) => {
    const { talk } = req.body;
    const regexDate = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
    const { watchedAt } = talk;
    const watchVal = regexDate.test(watchedAt);
    if (!watchedAt) return res.status(400).send({ message: 'O campo "watchedAt" é obrigatório' });
    if (!watchVal) {
        return res.status(400).send({ 
            message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    }
    next();
};

const validateRate = (req, res, next) => {
    const { talk } = req.body;
    const { rate } = talk;
    if (rate === undefined) {
        return res.status(400).send({ message: 'O campo "rate" é obrigatório' });
    }
    if (rate < 1 || rate > 5 || !Number.isInteger(rate)) {
        return res.status(400).send({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }
    next();
};

module.exports = {
    validateToken,
    validateName,
    validateAge,
    validateTalk,
    validateWatchedAt,
    validateRate,
};