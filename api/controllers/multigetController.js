
const axios = require('axios');

exports.getMultiGet = (req, res, next) => {
    const apis = req.body.apis;
    const outputType = req.body.outputType;

    let promisesArray = [];
    for (let i = 0; i < apis.length; i++) {
        const api = apis[i];
        const apiPromise = axios.get(api).then(response => {
            return response.data;
        });

        promisesArray.push(apiPromise);
    }

    Promise.all(promisesArray).then((promisesArrayResponse) => {
        res.status(200).json({
            output: promisesArrayResponse
        });
    })
};