var socket = io();

// on: escucha eventos
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Se perdió la conexión con el servidor');
});

// Enviar información
// emit: emite eventos
socket.emit('enviarMensaje', {
    usuario: 'Appiani',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Mensaje del servidor: ', mensaje);
});