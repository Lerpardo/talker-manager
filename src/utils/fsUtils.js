const fs = require('fs').promises;

const PATH_NAME = './src/data/talker.json';

async function readTalkers() {
    try {
        const talkersData = await fs.readFile(PATH_NAME, 'utf-8');
        const talkers = JSON.parse(talkersData);

        return talkers;
    } catch (e) {
        console.error(`Erro ao ler o arquivo: ${e.message}`);
    }
}

async function talkerById(id) {
    try {
        const talkers = await readTalkers();
        const filteredTalker = talkers.find((e) => e.id === Number(id));
        return filteredTalker;
    } catch (e) {
        console.error(`Erro ao ler o arquivo: ${e.message}`);
    }
}

const tokenGenerator = () => crypto.randomBytes(8).toString('hex');

async function addNewTalkers(talker) {
    try {
        const oldTalkers = await readTalkers();
        const newTalkerWithId = { id: oldTalkers.length + 1, ...talker };
        await fs.writeFile(PATH_NAME, JSON.stringify([...oldTalkers, newTalkerWithId]));
        return newTalkerWithId;
    } catch (e) {
        console.error(`Erro ao ler o arquivo: ${e.message}`);
    }
}

module.exports = {
    readTalkers,
    talkerById,
    tokenGenerator,
    addNewTalkers,
};