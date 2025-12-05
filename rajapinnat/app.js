const express = require('express');
const app = express();
const port = 3000;

// Middleware JSON-pyynnöille
app.use(express.json());

// === Middleware-esimerkki ===
function logMiddleware(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
}

// Middleware otetaan käyttöön kaikilla reiteillä
app.use(logMiddleware);

// === GET-metodi ===
app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

// === GET yhdellä parametrilla ===
app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}!`);
});

// === GET kahdella parametrilla ===
app.get('/add/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    res.send(`Sum: ${num1 + num2}`);
});

// === POST-metodi ===
app.post('/data', (req, res) => {
    const data = req.body; // JSON body
    res.send({ message: "Received data!", received: data });
});

// Käynnistetään palvelin
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
