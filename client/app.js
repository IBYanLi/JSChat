var socket = io();

$('form').on('submit',function () {
    var text = $('#m').val();
    socket.emit('message', text);
    $('#m').val('');
    return false;
});

socket.on('message', function (msg) {
    $('<li>').text(msg).appendTo('#history');
});