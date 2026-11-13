class UsuariosController {
  constructor(db) {
    this.db = db;
  }

  guardar = (req, res) => {
    const { nombre, apellido, direccion, telefono } = req.body;
    const sql = 'INSERT INTO usuarios (nombre, apellido, direccion, telefono) VALUES (?, ?, ?, ?)';
    this.db.query(sql, [nombre, apellido, direccion, telefono], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ mensaje: 'Usuario registrado', id: result.insertId });
    });
  };

  traer = (req, res) => {
    this.db.query('SELECT * FROM usuarios', (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    });
  };

  buscar = (req, res) => {
    this.db.query('SELECT * FROM usuarios WHERE id = ?', [req.params.id], (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      if (rows.length === 0) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      res.json(rows[0]);
    });
  };

  actualizar = (req, res) => {
    const { nombre, apellido, direccion, telefono } = req.body;
    const sql = 'UPDATE usuarios SET nombre = ?, apellido = ?, direccion = ?, telefono = ? WHERE id = ?';
    this.db.query(sql, [nombre, apellido, direccion, telefono, req.params.id], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.affectedRows === 0) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      res.json({ mensaje: 'Usuario actualizado' });
    });
  };

  eliminar = (req, res) => {
    this.db.query('DELETE FROM usuarios WHERE id = ?', [req.params.id], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.affectedRows === 0) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      res.json({ mensaje: 'Usuario eliminado' });
    });
  };
}

module.exports = UsuariosController;