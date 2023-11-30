

const stickContainer = document.querySelector('main');
document.body.appendChild(stickContainer);

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
document.querySelector('main').innerHTML = "mobile";
}
else {
const joystickContainer = document.createElement('div');
joystickContainer.id = "joyDiv"
joystickContainer.style.position = 'absolute';
joystickContainer.style.top = '1500px';
joystickContainer.style.left = '20px';
joystickContainer.style.width = '400px';
joystickContainer.style.height = '400px';
stickContainer.appendChild(joystickContainer);
var joy = new JoyStick('joyDiv');
}

