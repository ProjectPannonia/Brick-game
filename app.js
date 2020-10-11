
let getLeftMargin = function () {
    let sValue = window.getComputedStyle(document.getElementById("green")).marginLeft;
    return sValue.substr(0,sValue.length-2);
};
let increaseMargin = function () {
    marginValue = parseInt(getLeftMargin()) + 50;
};


let marginValue = parseInt(getLeftMargin());


document.querySelector(".myDiv").addEventListener('click', function () {
    increaseMargin();
    document.getElementById("green").style.marginLeft = `${marginValue}px`;
});