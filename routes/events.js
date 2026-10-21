const { getEvento, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { Router } = require('express');
const router = Router();
const { validarJWT } = require('../middlewares/validar-jwt')


router.use(validarJWT);

// Obtener eventos
router.get('/get', getEvento)

// Crear un nuevo evento
router.post('/create', crearEvento)

// Actualizar evento
router.put('/update/:id', actualizarEvento)

// Borrar evento
router.delete('/delete/:id', eliminarEvento)


module.exports = router;
