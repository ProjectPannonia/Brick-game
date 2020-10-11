let getHorizontalPos = function () {
    let sValue = window.getComputedStyle(document.getElementById("green")).marginLeft;
    return sValue.substr(0, sValue.length - 2);
};
let getVerticalPos = function () {
    let sValue = window.getComputedStyle(document.getElementById("green")).marginTop;
    return sValue.substr(0, sValue.length - 2);
};

let keycode = {
    upArrow: 'w',
    downArrow: 's',
    leftArrow: 'a',
    rightArrow: 'd'
}
let rectangle = {
    vertical: parseInt(getVerticalPos()),
    horizontal: parseInt(getHorizontalPos())
}
let maxVertical = 840;
console.log("Horizontal position: " + rectangle.horizontal);
console.log("Vertical position: " + rectangle.vertical);

let moveRight = function () {
    rectangle.horizontal += 20;
};
let moveLeft = function () {
    rectangle.horizontal -= 20;
};
let moveUp = function () {
    rectangle.vertical -= 20;
};
let moveDown = function () {
    rectangle.vertical += 20;
};


document.addEventListener('keypress', function (event) {

    let key = event.key;
    console.log(event.key);
    if(key === keycode.upArrow){
        console.log("UP");
        moveUp();
        document.getElementById("green").style.marginTop = `${rectangle.vertical}px`;
    } else if(key === keycode.downArrow){
        console.log("DOWN");
        moveDown();
        document.getElementById("green").style.marginTop = `${rectangle.vertical}px`;
    } else if(key === keycode.leftArrow) {
        console.log('LEFT');
        moveLeft();
        document.getElementById("green").style.marginLeft = `${rectangle.horizontal}px`;
    } else if(key === keycode.rightArrow) {
        console.log('RIGHT');
        moveRight();
        document.getElementById("green").style.marginLeft = `${rectangle.horizontal}px`;
    } else if(event.key === 'Enter') {
        console.log('Throw');
        document.getElementById("green").style.marginTop = `${maxVertical}px`;
    }
});