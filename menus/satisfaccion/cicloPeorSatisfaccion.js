const { pause } = require('../../helpers/pause');
const { ciclosEscolarPeorSatisfaccionModel } = require('../../model/satisfaccion/cicloPeorSatisfaccionModel');

const ciclosEscolarPeorSatisfaccion = async () => {

    const result = await ciclosEscolarPeorSatisfaccionModel();

    console.log('\n\n');

    console.log(`${'CICLOS ESCOLARES CON PEOR SATISFACCION'.bgYellow}`);

    console.log('\n');

    for (let i = 0; i < result.length; i++) {

        console.log(`${'Nombre:'.red} ${result[i].ciclo_id}`);
        console.log(`${'Numero de desertores:'.yellow} ${result[i].numero_desertores}`);
        console.log(`${'Puntajes satisfaccion:'.yellow} ${result[i].puntaje_satisfaccion} \n`);
    }

    await pause()
}

module.exports = {
    ciclosEscolarPeorSatisfaccion
}