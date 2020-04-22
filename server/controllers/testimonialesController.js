const Testimonial = require('../models/Testimoniales');

exports.mostrarTestimoniales = async (req, res) =>{
    const testimoniales = await Testimonial.findAll()
    res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales
    })
}

exports.enviarTestimonial = async (req, res) => {
    let {nombre, correo, mensaje} = req.body;
    
    let errores = [];

    if(!nombre){
        errores.push({'mensaje': 'Agrega tu nombre'})
    }
    if(!correo){
        errores.push({'mensaje': 'Agrega tu correo'})
    }
    if(!mensaje){
        errores.push({'mensaje': 'Agrega tu mensaje'})
    }

    if(errores.length > 0){
        const testimoniales = await Testimonial.findAll()
        res.render('testimoniales', {
            errores: errores,
            nombre: nombre,
            correo: correo,
            mensaje: mensaje,
            pagina: 'Testimoniales',
            testimoniales
        })
    }else{
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
        .then(testimonial => res.redirect('/testimoniales'))
            .catch(error => console.log(error));
    }
}