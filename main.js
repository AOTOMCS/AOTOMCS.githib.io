import VirtualJoystick from "./src/virtual-joystick.js";

const stickContainer = document.querySelector('main');
document.body.appendChild(stickContainer);

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
    document.querySelector('main').innerHTML = "mobile";
}
else {
    const joystickContainer = document.createElement('div');
    joystickContainer.style.position = 'absolute';
    joystickContainer.style.bottom = '20px';
    joystickContainer.style.left = '20px';
    stickContainer.appendChild(joystickContainer);
    const joystick = new VirtualJoystick(joystickContainer);
    const joystickMagnitude = Math.sqrt(joystick.delta.x ** 2 + joystick.delta.y ** 2);
    if (joystickMagnitude > 0) {
        document.getElementById("test").innerHTML = String(joystick.delta.x)
    }
}

