const { pause } = require('../../helpers/pause');
const { cicloEscolarMenorDesercionModel } = require('../../model/desercion/cicloEstolarMenorDesercionModel');

const cicloEscolarMenorDesercion = async () => {

    const result = await cicloEscolarMenorDesercionModel();

   
    console.log('\n\n');
    
    console.log(`${'CICLO ESCOLAR CON MENOR NUMERO DE DESERTORES'.bgGreen}`);
    
    console.log('\n');

    for (let i = 0; i < result.length; i++) {

        console.log(`${'Nombre:'.red} ${result[i].ciclo_id}`);
        console.log(`${'Numero de desertores:'.yellow} ${result[i].numero_desertores}`);
        console.log(`${'Puntajes satisfaccion:'.yellow} ${result[i].puntaje_satisfaccion} \n`);
    }

    await pause()
}

module.exports = {
    cicloEscolarMenorDesercion
}