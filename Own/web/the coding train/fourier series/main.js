let time = 0;
let wave = [];

let slider;

function setup() {
	createCanvas(800, 400);
    slider = createSlider(1, 30);
    text(1)
}

function draw() {
	background(0);
	translate(150, 200);
	let x = 0;
	let y = 0;

	for (let n = 1; n <= slider.value(); n+=2) {
		let prevX = x;
		let prevY = y;

		let radius = (75 * 4) / (n * PI);
		x += radius * cos(n * time);
		y += radius * sin(n * time);

		stroke(255, 100);
		noFill();
		ellipse(prevX, prevY, radius * 2);

		stroke(255);
		line(prevX, prevY, x, y);
	}

	wave.unshift(y);
	translate(150, 0);
	line(x - 150, y, 0, wave[0]);

	beginShape();
	noFill();
	for (let i = 0; i < wave.length; i++) {
		vertex(i, wave[i]);
	}
	endShape();

	time += 0.05;

	if (wave.length > 450) {
		wave.pop();
	}
}