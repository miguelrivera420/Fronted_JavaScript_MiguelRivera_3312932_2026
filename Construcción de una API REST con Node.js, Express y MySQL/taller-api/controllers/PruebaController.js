class PruebaController {
  bienvenida = (req, res) => {
    res.json({ mensaje: 'Bienvenido a la API' });
  };

  verificar = (req, res) => {
    res.json({ mensaje: 'El servidor funciona', estado: true });
  };

  recibir = (req, res) => {
    const { nombre, edad } = req.body;
    res.json({ nombre, edad });
  };

  sumar = (req, res) => {
    const { numero1, numero2 } = req.body;
    res.json({ resultado: Number(numero1) + Number(numero2) });
  };
}

module.exports = PruebaController;