import VirtualJoystick from "./src/virtual-joystick.js";

const gameContainer = document.querySelector('main');
document.body.appendChild(gameContainer);

const joystickContainer = document.createElement('div');
joystickContainer.style.position = 'absolute';
joystickContainer.style.bottom = '20px';
joystickContainer.style.left = '20px';
gameContainer.appendChild(joystickContainer);
const joystick = new VirtualJoystick(joystickContainer);