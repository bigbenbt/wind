
function convertToRadians(degrees) {
    return degrees * Math.PI / 180
}

function move(theta, image) {
    let radians = convertToRadians(theta)
    image.style.left = parseInt(image.style.left) + Math.cos(radians) * 30 + 'px'
    image.style.top = parseInt(image.style.top) + Math.sin(radians) * 30 + 'px'
}

function iterate() {
    for (i = 0; i < 10; i++) {
        console.log(i)
        move(70, testImage)
    }
}