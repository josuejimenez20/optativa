require('colors');
const { inquirerMenu } = require('./menus/inquirer');
const { loadDatabase } = require('./load_database/loadDatabase');
const { dbConnection } = require('./database/config');
const { obtenerPeligroEnDesercion } = require('./menus/desercion/desercion');
const { cicloEscolarDesercion } = require('./menus/desercion/cicloEscolar');
const { cicloEscolarMenorDesercion } = require('./menus/desercion/cicloEscolarMenorDesertores');
const { ciclosEscolarPeorSatisfaccion } = require('./menus/satisfaccion/cicloPeorSatisfaccion');
const { alumnosBajoInteres } = require('./menus/interes/alumnosBajoInteres');

const main = async () => {

    dbConnection();

    let opt = '';

    do {
        opt = await inquirerMenu();

        switch (opt.opcion) {
            case '1':
                await loadDatabase();
                break;
            case '2':
                await obtenerPeligroEnDesercion();
                break;
            case '3':
                await cicloEscolarDesercion();
                break;
            case '4':
                await cicloEscolarMenorDesercion();
                break;
            case '5':
                await ciclosEscolarPeorSatisfaccion();
                break;
            case '6':
                await alumnosBajoInteres();
                break;
            default:
                break;
        }

    } while (opt.opcion !== '7');

}

main();
