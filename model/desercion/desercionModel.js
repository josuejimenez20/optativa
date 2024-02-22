const { conexion } = require('../../database/config');

function obtenerPeligroEnDesercionModelo() {

    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT a.nombre, a.apellido_paterno, 
                    a.apellido_materno, p.probabilidad
            FROM alumno a
            JOIN probabilidad p 
            ON a.id = p.id_alumno
            ORDER BY p.probabilidad DESC
            LIMIT 5;`,
            function (error, result, field) {
                if (error)
                    return reject(error);
                return resolve(result);
            })
    })
}

module.exports = {
    obtenerPeligroEnDesercionModelo
}