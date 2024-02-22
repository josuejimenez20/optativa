const { conexion } = require('../../database/config');

function cicloEscolarMenorDesercionModel() {

    return new Promise((resolve, reject) => {
        conexion.query(
            `
            SELECT * 
            FROM estadistica 
            ORDER BY numero_desertores 
            ASC
            LIMIT 5;`,
            function (error, result, field) {
                if (error)
                    return reject(error);
                return resolve(result);
            })
    })
}

module.exports = {
    cicloEscolarMenorDesercionModel
}