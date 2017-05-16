const user = require('./controllers/user');
const router = require('express').Router();

router.get('/user/:id', user.getById);

router.post('/user', user.postUser);

router.delete('/user/:id', user.deleteById);

module.exports = router;