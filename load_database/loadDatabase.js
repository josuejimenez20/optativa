const { pause } = require('../helpers/pause');
const fs = require('fs');

const loadDatabase = async () => {


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

    });

    await pause()
}

module.exports = {
    loadDatabase
}