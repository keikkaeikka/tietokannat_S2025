const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');

async function main() {
    // Yhteys MySQL:ään
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'eikka',
        password: 'eikka',
        database: 'arvioinnit'
    });

    // Käyttäjädata
    const users = [
        { username: 'ensio', password: 'salasana123' },
        { username: 'einari', password: 'securepass' }
    ];

    for (const user of users) {
        // Kryptataan salasana
        const hashedPassword = await bcrypt.hash(user.password, 10);

        // Lisätään tietokantaan
        await connection.execute(
            'INSERT INTO user (username, password) VALUES (?, ?)',
            [user.username, hashedPassword]
        );
    }

    // Näytetään user-taulun sisältö
    const [rows] = await connection.execute('SELECT * FROM user');
    console.log(rows);

    await connection.end();
}

main().catch(err => console.error(err));
