
window.onload = function() {
  var socket = io.connect('http://localhost:7000');
  var username = document.getElementById("username").value;
  socket.emit('user',username);
  document.getElementById("logOut").onclick = function(){  
    socket.emit('userDisconnected',username);
  }

  document.getElementById("send").onclick = function(){        

	   socket.emit('chat message', username + ": " + document.getElementById("m").value);
	   document.getElementById("m").value = " ";
     return false;
  };
		
  document.getElementById("thumbsUp").onclick = function(){ 
    var img = "<img src='/images/thumbsUp.png' width='25px' height='25px'/>";
    socket.emit('chat message', username + ": " + img);
    document.getElementById("m").value = " ";
    return false;
  };
    
  socket.on('chat message', function(msg){
    var li = document.createElement('LI');
    li.innerHTML = msg;
    var messages = document.getElementById("messages");
    messages.appendChild(li);
  });

  socket.on('chat thumbsUp', function(msg){
    var li = document.createElement('LI');
    li.innerHTML = msg;
    var messages = document.getElementById("messages");
    messages.appendChild(li);
  });
}
  window.onbeforeunload = function(){
    var socket = io.connect('http://localhost:7000');
    var username = document.getElementById("username").value;
    socket.emit('userDisconnected',username);
  }