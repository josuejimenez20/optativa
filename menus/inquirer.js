const inquirer = require('inquirer');
require('colors');


const questions = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer',
        choices: [
            {
                value: '1',
                name: '1. Informacion del software'
            },
            {
                value: '2',
                name: '2. Alumnos con mayor probabilidad de desertar'
            },
            {
                value: '3',
                name: '3. Ciclo con mayor numero de desertores'
            },
            {
                value: '4',
                name: '4. Ciclo con menor numero de desertores'
            },
            {
                value: '5',
                name: '5. Ciclo escolar con peor rate de satisfaccion'
            },
            {
                value: '6',
                name: '6. Alumnos con bajo interes '
            },
            {
                value: '7',
                name: `7. ${'Salir'.red}`
            },
        ]
    }

]


const inquirerMenu = async () => {

    console.clear();
    console.log("MENU");
    console.log(`${'==============================='.green}`);
    console.log("Seleccionar opcion");
    console.log(`${'==============================='.green}`);

    const opt = await inquirer.prompt(questions)
    console.clear();


    return opt;


}


module.exports = {
    inquirerMenu
}