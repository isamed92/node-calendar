/* rutas de usuario / Auth
    host + /api/auth
*/
const {Router} = require('express')
const { createUser, loginUser, revalidateToken } = require('../controllers/auth')

const router = Router()


//endpoints
// las rutas reciben como parametros el path 
//y el controlador, que es una funcion que se encarga de decidir que hacer
router.post('/new', createUser)
router.post('/', loginUser)
router.get('/', revalidateToken)



module.exports = router