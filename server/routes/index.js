const express = require('express');
const router = express.Router();

const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajeController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');

module.exports = function(){
    router.get('/', homeController.consultasHomepage);

    router.get('/nosotros', nosotrosController.infoNosotros);

    router.get('/viajes', viajeController.mostrarViajes);
    router.get('/viajes/:id', viajeController.mostrarViaje);

    router.get('/testimoniales', testimonialesController.mostrarTestimoniales);

    router.post('/testimoniales', testimonialesController.enviarTestimonial);
    return router;
}