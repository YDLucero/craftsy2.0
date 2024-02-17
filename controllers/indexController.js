const db = require('../database/models')

const { leerJSON } = require("../data");

module.exports = {
    index :  function(req, res) {
        
        const productos = leerJSON('productos');
        const tutoriales = leerJSON('tutoriales');
        const banner = leerJSON('banner');

        return res.render('index', { 
            productos,
            tutoriales,
            banner,
        });
      },
      detail : (req,res) => {

        const {id} = req.params;

        const productos = leerJSON('productos')

        const producto = productos.find((producto) => producto.id === +id)
        
        const productosRelacionados = productos.filter(item => item.categoria === producto.categoria)


        return res.render('productDetail', {
         ...producto,
         productosRelacionados
        })
      }
}