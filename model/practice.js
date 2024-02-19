const { conexion } = require('../database/config');

function getPracticeQuery() {

    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT * FROM services; `,
            function (error, result, field) {
                if (error)
                    return reject(error);
                return resolve(result);
            })
    })
}

module.exports = {
    getPracticeQuery
}