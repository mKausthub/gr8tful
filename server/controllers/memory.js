const Memory = require('./../models/memory');

const getAll = async (req, res) => {
    try {
        const memories = await Memory.find({});
        res.send({
            error: false,
            memories,
            message: 'Memory fecthed.'
        })
    } catch (e) {
        console.log('------message----', e);
        res.status(500).send({
            error: true,
            message: 'Failed to get all memories'
        })
    }
}

const postMemory = async (req, res) => {
    try {
        req.body.ip_address = (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress;
        const newMemory = new Memory({
            ...req.body,
            created_at: new Date(),
            updated_at: new Date()
        });
        const memory = await newMemory.save()

        res.send({
            error: false,
            memory,
            message: 'Memory posted successfully.'
        })
    } catch (e) {
        console.log('------message----', e);

        res.status(500).send({
            error: true,
            message: 'Failed to add memories'
        })
    }
}

const getRandomQuestion = async (req, res) => {
    try {
        const question = await Memory.find({});
        let randomQuestion = [];

        // @TODO add random logic to get random question here
        for (let idx = 0; idx < question.length; idx++) {
            for (let idy = 0; idy < question[idx].questions.length; idy++) {
                randomQuestion.push(question[idx].questions[idy]);
                break;
            }
        }

        res.send({
            error: false,
            question: randomQuestion,
            message: 'Random question!'
        })
    } catch (e) {
        console.log('e: ', e);
        res.status(500).send({
            error: true,
            message: 'Failed to get random question'
        })
    }
}

const getMemoryCount = async (req, res) => {
    try {
        const ip_address = (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress;
        const count = await Memory.find({
            ip_address
        }).countDocuments();
        res.send({
            error: false,
            count
        })
    } catch (e) {
        res.status(500).send({
            error: true,
            message: 'Failed to get count.'
        })
    }
}

const getMyMemories = async (req, res) => {
    try {
        const ip_address = (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress;
        const memories = await Memory.find({
            ip_address
        });
        res.send({
            error: false,
            memories
        })
    } catch (e) {
        res.status(500).send({
            error: true,
            message: 'Failed to get my memoories.'
        })
    }
}
module.exports = {
    getAll,
    postMemory,
    getRandomQuestion,
    getMemoryCount,
    getMyMemories
}
