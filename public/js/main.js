
$(function () {
    const socket = io();
    $('form').submit(function(err) {
        err.preventDefault();   //prevent page reloading
        socket.emit('chat-message', $('#msg').val());
        $('#msg').val('');
        return false;
    });
    socket.on('chat-message', function(msg) {
        $('#messages').append($('<li>').text(msg));
    });
});
    

