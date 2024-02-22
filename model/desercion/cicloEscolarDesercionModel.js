const { conexion } = require('../../database/config');

function cicloEscolarDesercionModel() {

    return new Promise((resolve, reject) => {
        conexion.query(
            `
            SELECT * 
            FROM estadistica 
            ORDER BY numero_desertores DESC;`,
            function (error, result, field) {
                if (error)
                    return reject(error);
                return resolve(result);
            })
    })
}

module.exports = {
    cicloEscolarDesercionModel
}