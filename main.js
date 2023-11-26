import VirtualJoystick from "./src/virtual-joystick.js";

const gameContainer = document.querySelector('main');
document.body.appendChild(gameContainer);

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
    const joystickContainer = document.createElement('div');
    joystickContainer.style.position = 'absolute';
    joystickContainer.style.bottom = '20px';
    joystickContainer.style.left = '20px';
    gameContainer.appendChild(joystickContainer);
    const joystick = new VirtualJoystick(joystickContainer, {
    width: 150,
    height: 150,
    color: 'gray',
    handleColor: 'black',
    handleRadius: 60,
    onChange: function(delta) {
        if (joystick.delta.x > 100) {
            document.querySelector("#test").style.display = "none"
        }
    console.log(delta);
    },
    });
}

const joystickContainer = document.createElement('div');
joystickContainer.style.position = 'absolute';
joystickContainer.style.bottom = '20px';
joystickContainer.style.left = '20px';
gameContainer.appendChild(joystickContainer);
const joystick = new VirtualJoystick(joystickContainer, {
    width: 150,
    height: 150,
    color: 'gray',
    handleColor: 'black',
    handleRadius: 38,
    onChange: function(delta) {
        if (joystick.delta.x > 100) {
            document.querySelector("#test").style.display = "none"
        }
    console.log(delta);
    },
    });
