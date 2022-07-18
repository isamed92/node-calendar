/* rutas de usuario / Auth
    host + /api/auth
*/
const { Router } = require('express');
const { check } = require('express-validator');
const {
  createUser,
  loginUser,
  revalidateToken,
} = require('../controllers/auth');
const { fieldValidate } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

//endpoints
// las rutas reciben como parametros el path
//y el controlador, que es una funcion que se encarga de decidir que hacer
router.post(
  '/new',
  [
    //middlewares
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de ser de 6 caracteres').isLength({
      min: 6,
    }),
    fieldValidate
  ],
  createUser
);

router.post('/', [
    check('email', 'El email es obligatorio.').isEmail(),
    check('password', 'El password es obligatorio. Y debe tener 6 caracteres').isLength({min: 6}),
    fieldValidate
], loginUser);

router.get('/renew', validateJWT, revalidateToken);

module.exports = router;
