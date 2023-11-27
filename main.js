import VirtualJoystick from "./src/virtual-joystick.js";

const stickContainer = document.querySelector('main');
document.body.appendChild(stickContainer);

export function Start() {
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
    }
}

export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    // but you can adapt to make it append to the element you want.
    document.body.appendChild(img);
}
