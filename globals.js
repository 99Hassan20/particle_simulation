const canvas = document.querySelector(".myCanvas");
canvas.width = (window.innerWidth * 90) / 100;
canvas.height = (window.innerHeight * 90) / 100;
const ctx = canvas.getContext("2d");

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function getColor(r, g, b, a)
{
    return "rgb(" + r + "," + g + "," + b + "," + a + ")";
}

function distance(x, y, x2, y2)
{
    const deltaX = x2 - x;
    const deltaY = y2 - y;
    const deltaXSquare = Math.pow(deltaX, 2);
    const deltaYSquare = Math.pow(deltaY, 2);
    return Math.sqrt(deltaXSquare + deltaYSquare);
}