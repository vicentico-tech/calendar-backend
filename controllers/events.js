const { response } = require("express")


getEvento = (req, res = response) => {


     res.status(201).json({
        ok: true,
        msg: 'Obtener eventos'
    })
}

crearEvento = (req, res = response) => {


     res.status(201).json({
        ok: true,
        msg: 'Crear eventos'
    })
}

actualizarEvento = (req, res = response) => {

     res.status(201).json({
        ok: true,
        msg: 'Actualizar eventos'
    })
}

eliminarEvento = (req, res = response) => {

     res.status(201).json({
        ok: true,
        msg: 'Eliminar eventos'
    })
}


module.exports = {
    getEvento,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}