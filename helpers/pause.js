const pause = async () => {
    return new Promise(resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readLine.question('Enter para salir al menu', (opt) => {
            readLine.close();
            console.clear();
            resolve()
        })
    })
}

module.exports = {
    pause
}