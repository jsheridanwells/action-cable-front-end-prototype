// import actioncable
var ActionCable = require('./action_cable');

//create connection to socket
var cable = ActionCable.createConsumer('ws://localhost:3000/cable')

//create subscription to message_channel
//when messagaes are received via socket, append to #main
cable.subscriptions.create('MessageChannel', {
  received: (data) => {
    console.log(data);
    $('#main').append(`<p>${data.message}</p>`);
  }
});

//when send button is clicked
//post to messages table
//message will be transmitted via websocket to dom
$('#send-button').click(() => {
  $.ajax({
    method: 'post',
    url: 'http://localhost:3000/messages',
    data: JSON.stringify({ "message" : {"content" : $('#message-box').val()}}),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
  });
});
