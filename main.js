import VirtualJoystick from "./src/virtual-joystick.js";

const stickContainer = document.querySelector('main');
document.body.appendChild(stickContainer);

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
    const joystickContainer = document.createElement('div');
    joystickContainer.style.position = 'absolute';
    joystickContainer.style.bottom = '20px';
    joystickContainer.style.left = '20px';
    stickContainer.appendChild(joystickContainer);
    const joystick = new VirtualJoystick(joystickContainer, {
    width: 150,
    height: 150,
    color: 'gray',
    handleColor: 'black',
    handleRadius: 60,
    onChange: function(delta) {
        pos = joystick.delta.x.toString()
        document.querySelector('p').innerhtml = "test2"
    console.log(delta);
    },
    });
}
else {
    document.querySelector('main').innerHTML = "PC";
}

