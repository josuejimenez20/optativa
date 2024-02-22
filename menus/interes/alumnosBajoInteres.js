require('colors')
const { pause } = require('../../helpers/pause');
const { alumnoBajoInteresModel } = require('../../model/interes/bajoInteresModel');

const alumnosBajoInteres = async () => {

    const result = await alumnoBajoInteresModel();

    console.log('\n\n');
    
    console.log(`${'ALUMNOS CON BAJO INTERES'.bgRed}`);
    
    console.log('\n');

    for (let i = 0; i < result.length; i++) {

        console.log(`${'Nombre:'.red} ${result[i].nombre + ' ' + result[i].apellido_paterno +
        ' ' + result[i].apellido_materno}`);
        console.log(`${'Grado de interes:'.yellow} ${result[i].grado_interes} \n`);
    }

    await pause()
}

module.exports = {
    alumnosBajoInteres
}
