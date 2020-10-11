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
    horizontal: parseInt(getHorizontalPos()),
    moveRight: function () {
        if(this.horizontal < 1690) {
            this.horizontal += 20;
        }
    },
    moveLeft: function () {
        if(this.horizontal > 0) {
            this.horizontal -= 20;
        }
    },
    moveUp: function () {
        if (this.vertical > 0) {
            this.vertical -= 20;
        }
    },
    moveDown: function () {
        if(this.vertical < 840) {
            this.vertical += 20;
        }
    }
}

let maxVertical = 840;
console.log("Horizontal position: " + rectangle.horizontal);
console.log("Vertical position: " + rectangle.vertical);


document.addEventListener('keypress', function (event) {

    let key = event.key;
    console.log(event.key);
    if(key === keycode.upArrow){
        console.log("UP");
        rectangle.moveUp();

        document.getElementById("green").style.marginTop = `${rectangle.vertical}px`;
    } else if(key === keycode.downArrow){
        console.log("DOWN");

        rectangle.moveDown();
        document.getElementById("green").style.marginTop = `${rectangle.vertical}px`;
    } else if(key === keycode.leftArrow) {
        console.log('LEFT');

        rectangle.moveLeft();
        document.getElementById("green").style.marginLeft = `${rectangle.horizontal}px`;
    } else if(key === keycode.rightArrow) {
        console.log('RIGHT');

        rectangle.moveRight();
        document.getElementById("green").style.marginLeft = `${rectangle.horizontal}px`;
    } else if(event.key === 'Enter') {
        console.log('Throw');
        rectangle.vertical = maxVertical;
        document.getElementById("green").style.marginTop = `${rectangle.vertical}px`;
    }
});