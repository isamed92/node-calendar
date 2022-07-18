/**
 *  Event Routes
 *  /api.events
 * */

const { Router } = require('express');
const { check } = require('express-validator');
const { isDate } = require('../helpers/isDate');
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/events');
const { fieldValidate } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

router.use(validateJWT); //asi hacemos que todas las peticiones despues de use, tengan el middleware validate token

router.get('/', getEvents);
router.post(
  '/',
  [
    check('title', 'El titulo es requerido').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom(isDate),
    check('end', 'Fecha de finalizacion es obligatoria').custom(isDate),
    fieldValidate,
  ],
  createEvent
);
router.put(
  '/:id',
  [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom(isDate),
    check('end', 'Fecha de finalización es obligatoria').custom(isDate),
    fieldValidate,
  ],
  updateEvent
);
router.delete('/:id', deleteEvent);

module.exports = router;
