const app = document.getElementById ('type');

const type = new Typewriter(app, {
    loop:true,
    delay:75 /* Velocidad de las letras*/
});

type
    .typeString('Prueba de despliegue')
    .pauseFor(5000) /*Pausa antes de empezar de 200 ms */
    .start();    
