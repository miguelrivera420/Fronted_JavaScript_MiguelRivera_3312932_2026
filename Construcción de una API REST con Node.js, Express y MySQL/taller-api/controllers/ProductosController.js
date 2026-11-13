class ProductosController {
  constructor(db) {
    this.db = db;
  }

  guardar = (req, res) => {
    const { nombre, descripcion, precio, stock } = req.body;
    const sql = 'INSERT INTO productos (nombre, descripcion, precio, stock) VALUES (?, ?, ?, ?)';
    this.db.query(sql, [nombre, descripcion, precio, stock], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ mensaje: 'Producto registrado', id: result.insertId });
    });
  };

  traer = (req, res) => {
    this.db.query('SELECT * FROM productos', (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    });
  };

  buscar = (req, res) => {
    this.db.query('SELECT * FROM productos WHERE id = ?', [req.params.id], (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      if (rows.length === 0) return res.status(404).json({ mensaje: 'Producto no encontrado' });
      res.json(rows[0]);
    });
  };

  actualizar = (req, res) => {
    const { nombre, descripcion, precio, stock } = req.body;
    const sql = 'UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, stock = ? WHERE id = ?';
    this.db.query(sql, [nombre, descripcion, precio, stock, req.params.id], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.affectedRows === 0) return res.status(404).json({ mensaje: 'Producto no encontrado' });
      res.json({ mensaje: 'Producto actualizado' });
    });
  };

  eliminar = (req, res) => {
    this.db.query('DELETE FROM productos WHERE id = ?', [req.params.id], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.affectedRows === 0) return res.status(404).json({ mensaje: 'Producto no encontrado' });
      res.json({ mensaje: 'Producto eliminado' });
    });
  };

  agotados = (req, res) => {
    this.db.query('SELECT * FROM productos WHERE stock = 0', (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    });
  };

  bajoStock = (req, res) => {
    this.db.query('SELECT * FROM productos WHERE stock < 5', (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    });
  };
}

module.exports = ProductosController;