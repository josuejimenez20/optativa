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
                name: '1. Cargar archivo SVC'
            },
            {
                value: '2',
                name: '2. Visualizar alumnos con bajo rendimiento'
            },
            {
                value: '3',
                name: '3. Visualizar alumnos con peligro de descenso'
            },
            {
                value: '4',
                name: '4. Vistualizar alumnos en NO peligro de descenso'
            },
            {
                value: '5',
                name: '5. Descargar base de datos'
            },
            {
                value: '6',
                name: `6. ${'Salir'.red}`
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