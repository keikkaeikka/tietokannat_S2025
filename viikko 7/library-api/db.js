const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'eikka',     // ENTER-TÄMÄ: sama käyttäjänimi jolla kirjaudut MySQL Consoleen
    password: 'eikka',     // ENTER-TÄMÄ: sama salasana jolla kirjaudut MySQL Consoleen
    database: 'library', // tietokanta jonka loit Consolessa
    port: 3306        // yleensä tämä, ellet ole vaihtanut
});

module.exports = pool.promise();
