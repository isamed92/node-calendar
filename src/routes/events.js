// todas tienen que pasar por la validacion JWT
// obtener eventos

const { Router } = require('express');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

router.get('/', [validateJWT], getEvents);
router.post('/', [validateJWT], createEvent);
router.put('/:id', [validateJWT], updateEvent);
router.delete('/:id', [validateJWT], deleteEvent);

module.exports = router;
