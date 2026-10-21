const { response } = require("express")
const Evento = require("../models/Evento")


getEvento = (req, res = response) => {


    res.status(201).json({
        ok: true,
        msg: 'Obtener eventos'
    })
}

crearEvento = async (req, res = response) => {


    const evento = new Evento(req.body);

    try {
        evento.user = req.uid;

        const eventoGuardado = await evento.save();

        res.json({
            ok: true,
            evento: eventoGuardado
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Hable con el administrador"
        })


    }

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