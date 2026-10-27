// gets the keys from the simple Keys.json

let Keys = [];

async function GetKeys() {
    const response = await fetch('./js/Keys.json');
    const KeysData= await response.json();
    console.log(KeysData);
    Keys = KeysData;
}
GetKeys();

// plays new audio Tone

const synth = new Tone.Synth().toDestination();

// const piano_sound = new Audio('../audio/A1_C_100bpm.wav');


// detects user input

document.onkeydown = function (e) {
    var key_press = e.key;
    var key_code = key_press.charCodeAt(0);
    document.getElementById('kp').innerHTML = key_press;
    document.getElementById('kc').innerHTML = key_code;
    var status = document.getElementById('status');
    status.innerHTML = 'Down Event Fired For: ' + key_press;
    for (let i = 0; i < Keys.length; i++) {
        if (key_press == Keys[i]["button"]) {
            // let old_note = Keys[i]
            console.log(Keys[i]["button"])
            var key = document.getElementById(i+1)
            key.classList.add("Key_Down")
            synth.triggerAttackRelease(String(Keys[i]["key"] + 4), 1)
        }
    }
}

document.onkeyup = function (e) {
    var key_press = e.key;
    var status = document.getElementById('status');
    status.innerHTML = 'Up Event Fired For: ' + key_press;
    for (let i = 0; i < Keys.length; i++) {
        if (key_press == Keys[i]["button"]) {
            var key = document.getElementById(i+1)
            key.classList.remove("Key_Down")
        }
    }
}