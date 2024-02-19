const { pause } = require('../helpers/pause');
const fs = require('fs');
const { getPracticeQuery } = require('../model/practice');

const loadDatabase = async () => {

    const result = await getPracticeQuery();


    const rutaArchivo = 'C:/Users/Buku/Documents/archivo.txt';

    // Utiliza fs.readFile para leer el contenido del archivo
    fs.readFile(rutaArchivo, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al buscar el archivo');
            return;
        }

        // El contenido del archivo estará en la variable 'data'
        console.log('\n\n\n\n\n\n\n');
        console.log('Contenido del archivo:', data);
        console.log('Contenido del Query:', result);

    });

    await pause()
}

module.exports = {
    loadDatabase
}