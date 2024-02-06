// m.js
const PI = 3.14159;

function getCircumference(radius) {
    return 2 * PI * radius;
}

function getArea(radius) {
    return PI * radius * radius;
}

function getVolume(radius) {
    return (3 / 4) * PI * radius * radius * radius;
}

module.exports = {
    PI,
    getCircumference,
    getArea,
    getVolume
};
