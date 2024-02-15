require('colors');
const { inquirerMenu } = require('./menus/inquirer');
const {loadDatabase} = require('./load_database/loadDatabase');

const main = async () => {

    let opt = '';

        do {
            opt = await inquirerMenu();
                    
            if(opt.opcion === '1') {
                await loadDatabase();
            }
            
        } while (opt.opcion !== '6');

}

main();
