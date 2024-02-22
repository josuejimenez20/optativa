require('colors');
const { pause } = require('../../helpers/pause');
const { obtenerPeligroEnDesercionModelo } = require('../../model/desercion/desercionModel');

const obtenerPeligroEnDesercion = async () => {

    const result = await obtenerPeligroEnDesercionModelo();

    console.log('\n\n');
    
    console.log(`${'ALUMNOS CON MAYOR PROBABILIDAD DE DESERCION'.bgRed}`);
    
    console.log('\n');

    for (let i = 0; i < result.length; i++) {

        console.log(`${'Nombre:'.red} ${result[i].nombre + ' ' + result[i].apellido_paterno +
        ' ' + result[i].apellido_materno}`);
        console.log(`${'Probabilidad:'.yellow} ${result[i].probabilidad} \n`);
    }

    await pause()
}

module.exports = {
    obtenerPeligroEnDesercion
}