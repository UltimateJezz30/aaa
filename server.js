const express = require('express');
const libroRoutes = require('./routes/libroRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/libros', libroRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});