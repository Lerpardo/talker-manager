const fs = require('fs').promises;
const crypto = require('crypto');

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

async function editTalkerById(id, talkerEdited) {
    const oldsTalkers = await readTalkers();
    const updatedTalkerData = { id, ...talkerEdited };
    const retorno = oldsTalkers.reduce((a, c) => {
        if (c.id === updatedTalkerData.id) return [...a, updatedTalkerData];
        return [...a, c];
    }, []);

    try {
        await fs.writeFile(PATH_NAME, JSON.stringify(retorno));
        return updatedTalkerData;
    } catch (e) {
        console.error(`Erro ao ler o arquivo: ${e.message}`);
    }
}

async function deleteTalkerById(id) {
    const data = await readTalkers();
    const filteredTalkerData = data.filter((e) => e.id !== Number(id));
    try {
        await fs.writeFile(PATH_NAME, JSON.stringify(filteredTalkerData));
    } catch (e) {
        console.error(`Erro ao ler o arquivo: ${e.message}`);
    }
}

async function queryTalkers(query) {
    try {
        const data = await readTalkers();
        const queriedTalkers = data.filter((e) => (e.name).includes(query));
        return queriedTalkers;
    } catch (e) {
        console.error(`Erro ao ler o arquivo: ${e.message}`);
    }
}

module.exports = {
    readTalkers,
    talkerById,
    tokenGenerator,
    addNewTalkers,
    editTalkerById,
    deleteTalkerById,
    queryTalkers,
};