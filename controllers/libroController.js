let libros = [
    { id: 1, titulo: "Don Quijote", autor: "Miguel de Cervantes" },
    { id: 2, titulo: "Cien años de soledad", autor: "Gabriel García Márquez" }
];

const obtenerLibros = (req, res) => {
    res.json(libros);
};

const crearLibro = (req, res) => {
    const nuevoLibro = {
        id: libros.length + 1,
        titulo: req.body.titulo,
        autor: req.body.autor
    };
    
    libros.push(nuevoLibro);
    res.status(201).json(nuevoLibro);
};

const actualizarLibro = (req, res) => {
    const id = parseInt(req.params.id);
    const index = libros.findIndex(libro => libro.id === id);
    
    if (index === -1) {
        return res.status(404).json({ mensaje: "Libro no encontrado" });
    }
    
    libros[index] = {
        id: id,
        titulo: req.body.titulo,
        autor: req.body.autor
    };
    
    res.json(libros[index]);
};

const eliminarLibro = (req, res) => {
    const id = parseInt(req.params.id);
    const index = libros.findIndex(libro => libro.id === id);
    
    if (index === -1) {
        return res.status(404).json({ mensaje: "Libro no encontrado" });
    }
    
    libros = libros.filter(libro => libro.id !== id);
    res.json({ mensaje: "Libro eliminado correctamente" });
};

module.exports = {
    obtenerLibros,
    crearLibro,
    actualizarLibro,
    eliminarLibro
}; 