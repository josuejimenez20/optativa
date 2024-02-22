const { conexion } = require('../../database/config');

function ciclosEscolarPeorSatisfaccionModel() {

    return new Promise((resolve, reject) => {
        conexion.query(
            `
            SELECT * 
            FROM estadistica
            ORDER BY puntaje_satisfaccion 
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
    ciclosEscolarPeorSatisfaccionModel
}