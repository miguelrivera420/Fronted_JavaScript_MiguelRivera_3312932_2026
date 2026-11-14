from flask import request, jsonify
from app import api, db
from models.producto import Producto
from sqlalchemy import exc


@api.route("/api/v1/productos/", methods=['POST'])
def crearProducto():
    try:
        datos = request.get_json(force=True)
        producto = Producto(**datos)
        db.session.add(producto)
        db.session.commit()
        status = 201
        return jsonify({"mensaje": 'Producto Agregado correctamente',
                        "Producto": producto.to_dict()}), status
    except exc.SQLAlchemyError as error:
        mensaje = str(error)
        status = 400
        return jsonify({"mensaje": mensaje}), status


@api.route("/api/v1/productos/", methods=['GET'])
def obtenerProductos():
    try:
        productos = Producto.query.all()
        listaProductos = []

        for p in productos:
            listaProductos.append(p.to_dict())
        status = 200

        return jsonify({"mensaje": 'Productos',
                        "Productos": listaProductos}), status
    except exc.SQLAlchemyError as error:
        mensaje = str(error)
        return jsonify({"mensaje": mensaje}), 500


@api.route("/api/v1/productos/<int:idProducto>", methods=['GET'])
def obtenerProductoPorID(idProducto):
    try:
        producto = Producto.query.get(idProducto)
        if producto is None:
            mensaje = "No existe producto con ese ID"
            status = 404
        else:
            producto = producto.to_dict()
            mensaje = "Producto encontrado"
            status = 200

        return jsonify({"mensaje": mensaje,
                        "Producto": producto}), status
    except exc.SQLAlchemyError as error:
        mensaje = str(error)
        status = 500
        return jsonify({"mensaje": mensaje}), status


@api.route("/api/v1/productos/<int:idProducto>", methods=['PUT'])
def actualizarProducto(idProducto):
    try:
        producto = Producto.query.get(idProducto)
        if producto is None:
            mensaje = "No existe producto con ese ID"
            status = 404
        else:
            datos = request.get_json(force=True)
            producto.proCodigo = datos['proCodigo']
            producto.proNombre = datos['proNombre']
            producto.proPrecio = datos['proPrecio']
            producto.proCategoria = datos['proCategoria']
            db.session.commit()
            status = 200

            mensaje = "Producto actualizado"
        return jsonify({"mensaje": mensaje,
                        "Producto": producto.to_dict()}), status
    except exc.SQLAlchemyError as error:
        mensaje = str(error)
        status = 500
        return jsonify({"mensaje": mensaje}), status


@api.route("/api/v1/productos/<int:idProducto>", methods=['DELETE'])
def eliminarProducto(idProducto):
    try:
        producto = Producto.query.get(idProducto)
        if producto is None:
            mensaje = "No existe producto con ese ID"
            status = 404
        else:
            db.session.delete(producto)
            db.session.commit()
            mensaje = "Producto Eliminado"
            status = 200
        return jsonify({"mensaje": mensaje}), status
    except exc.SQLAlchemyError as error:
        mensaje = str(error)
        status = 500
        return jsonify({"mensaje": mensaje}), 500