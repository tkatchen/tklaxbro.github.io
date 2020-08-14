let input = [[]]
let order = []
let fourierInst;

let canvas = document.getElementById("canvas")
console.log(document)
let button = document.getElementById("calculate")
let ctx = canvas.getContext("2d");
let mouseDown = false;
	
canvas.onmousedown = function(e) {
	mouseDown = true;
}
canvas.onmouseup = function(e) {
	mouseDown = false;
	console.log(input)
}
	
canvas.onmousemove = function(e) {
	if (mouseDown) {
		if(!input[e.x]) input[e.x] = []
        input[e.x][e.y] = 1
        order.push([e.x - X_WIDTH/2, e.y - Y_WIDTH/2])
		ctx.beginPath();
		ctx.moveTo(e.x, e.y);
		ctx.lineTo(e.x - e.movementX, e.y - e.movementY);
		ctx.stroke();
	}
}

button.onclick = (e) => {
    fourierInst = new Fourier(input, order)
}