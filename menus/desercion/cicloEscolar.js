const { pause } = require('../../helpers/pause');
const { cicloEscolarDesercionModel } = require('../../model/desercion/cicloEscolarDesercionModel');

const cicloEscolarDesercion = async () => {

    const result = await cicloEscolarDesercionModel();

    console.log('\n\n');
    
    console.log(`${'CICLO ESCOLAR CON MAYOR NUMERO DE DESERTORES'.bgRed}`);
    
    console.log('\n');

    for (let i = 0; i < result.length; i++) {

        console.log(`${'Nombre:'.red} ${result[i].ciclo_id}`);
        console.log(`${'Numero de desertores:'.yellow} ${result[i].numero_desertores}`);
        console.log(`${'Puntajes satisfaccion:'.yellow} ${result[i].puntaje_satisfaccion} \n`);
    }

    await pause()
}

module.exports = {
    cicloEscolarDesercion
}