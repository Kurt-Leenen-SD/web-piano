document.onkeydown = function(e) {
  var key_press = e.key;
  var key_code = key_press.charCodeAt(0);
  document.getElementById('kp').innerHTML = key_press;
  document.getElementById('kc').innerHTML = key_code;
  var status = document.getElementById('status');
  status.innerHTML = 'Down Event Fired For: ' + key_press; 
  if (key_press == 'a') {
    console.log("a has been pressed")
    var key = document.getElementById('a')
    key.classList.add("Key_Down")
  }
}
document.onkeyup = function(e) {
  var key_press = e.key;
  var status = document.getElementById('status');
  status.innerHTML = 'Up Event Fired For: ' + key_press;
  if (key_press == 'a') {
    console.log("a has been released")
    var key = document.getElementById('a')
    key.classList.remove("Key_Down")
  }
}

