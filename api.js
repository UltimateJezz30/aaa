let libros = [];

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
    const { titulo, autor } = req.body;
    
    // Buscamos el libro por ID
    const libroIndex = libros.findIndex(libro => libro.id === id);
    
    if (libroIndex === -1) {
        return res.status(404).json({ 
            mensaje: "Libro no encontrado",
            librosDisponibles: libros 
        });
    }
    
    // Actualizamos el libro específico
    libros[libroIndex] = {
        ...libros[libroIndex],
        titulo: titulo || libros[libroIndex].titulo,
        autor: autor || libros[libroIndex].autor
    };

    res.json({
        mensaje: "Libro actualizado correctamente",
        libroActualizado: libros[libroIndex],
        todosLosLibros: libros
    });
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