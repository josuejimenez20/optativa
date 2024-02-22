const { conexion } = require('../../database/config');

function alumnoBajoInteresModel() {

    return new Promise((resolve, reject) => {
        conexion.query(
            `
            SELECT a.nombre, a.apellido_paterno, a.apellido_materno, re.grado_interes
            FROM alumno a
            JOIN resultado_encuesta re
            ON a.id=re.id_alumno 
            ORDER BY re.grado_interes ASC;`,
            function (error, result, field) {
                if (error)
                    return reject(error);
                return resolve(result);
            })
    })
}

module.exports = {
    alumnoBajoInteresModel
}