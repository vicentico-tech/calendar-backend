const { getEvento, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { Router } = require('express');
const router = Router();
const { validarJWT } = require('../middlewares/validar-jwt')
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');



router.use(validarJWT);

// Obtener eventos
router.get('/get', getEvento)

// Crear un nuevo evento
router.post(
    '/create',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalizacion es obligatoria').custom(isDate),
        validarCampos
    ],
    crearEvento)

// Actualizar evento
router.put('/update/:id', actualizarEvento)

// Borrar evento
router.delete('/delete/:id', eliminarEvento)


module.exports = router;
