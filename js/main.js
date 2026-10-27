let Keys = [];

async function GetKeys() {
    const response = await fetch('./js/Keys.json');
    const KeysData= await response.json();
    console.log(KeysData);
    Keys = KeysData;
}
GetKeys();

const piano_sound = new Audio('../audio/A1_C_100bpm.wav');

document.onkeydown = function (e) {
    var key_press = e.key;
    var key_code = key_press.charCodeAt(0);
    document.getElementById('kp').innerHTML = key_press;
    document.getElementById('kc').innerHTML = key_code;
    var status = document.getElementById('status');
    status.innerHTML = 'Down Event Fired For: ' + key_press;
    for (let i = 0; i < Keys.length; i++) {
        if (key_press == Keys[i]["key"]) {
            // let old_note = Keys[i]
            console.log(Keys[i]["key"])
            var key = document.getElementById(i+1)
            key.classList.add("Key_Down")
            piano_sound.play()
            // if (key != old_note) {
            //     piano_sound.pause()
            // }
        }
    }
}

document.onkeyup = function (e) {
    var key_press = e.key;
    var status = document.getElementById('status');
    status.innerHTML = 'Up Event Fired For: ' + key_press;
    for (let i = 0; i < Keys.length; i++) {
        if (key_press == Keys[i]["key"]) {
            var key = document.getElementById(i+1)
            key.classList.remove("Key_Down")
        }
    }
}