const express = require('express');
const app = express();

app.use(express.json());

const bookRoutes = require('./routes/bookRoutes');
const borrowerRoutes = require('./routes/borrowerRoutes');

app.use('/api/book', bookRoutes);
app.use('/api/borrower', borrowerRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

