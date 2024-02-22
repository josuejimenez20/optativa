let mysql = require('mysql');
let conexion = mysql.createConnection({
    host: 'localhost',
    database: 'optativa',
    user: 'root',
    password: 'johnwick2003',
});

const dbConnection = () => {
    conexion.connect(function (err) {
        if (err) {
            console.error('Error conection: ' + err.stack);
            return;
        }
        // console.log('Connect with thread:  ' + conexion.threadId);
    });
}

module.exports = {
    dbConnection,
    conexion
}