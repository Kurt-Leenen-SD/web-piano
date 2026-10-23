document.onkeydown = function(e) {
  var key_press = e.key;
  var key_code = key_press.charCodeAt(0);
  document.getElementById('kp').innerHTML = key_press;
  document.getElementById('kc').innerHTML = key_code;
  var status = document.getElementById('status');
  status.innerHTML = 'Down Event Fired For: ' + key_press; 
}
document.onkeyup = function(e) {
  var key_press = e.key;
  var status = document.getElementById('status');
  status.innerHTML = 'Up Event Fired For: ' + key_press; 
}