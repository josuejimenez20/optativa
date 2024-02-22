require('colors')
const { pause } = require('../helpers/pause');

const loadDatabase = async () => {

    console.log(`Esto es un ${'sistema experto'.green} creado para combatir la desercion
teniendo en cuenta varios factores que inflyen en el rendimiento academico, al igual 
poder ver el nivel de ${'satisfaccion'.green} de los diferentes ciclos escolar, poder
ver su indice de desercion y poder crear planes para evitar el ${'abandono escolar'.red}. \n`)

    await pause()
}

module.exports = {
    loadDatabase
}