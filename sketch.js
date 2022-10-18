//Array
let bubbles = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (let i = 0; i < 500; i++) {
		let x = random(width);
		let y = 100
		let r = random(5, 20);
		bubbles[i] = new Bubble(x, y, r);
	  }
}
	

function draw() {
	background(0);
	for (let i = 0; i < bubbles.length; i++) {
	  //use the method of move and show
	  bubbles[i].move();
	  bubbles[i].show();
	}

	//text
	textFont("Space Mono")
	textSize(20);
	textAlign(CENTER, CENTER);
	fill(255);
	text ("PRESS FOR NEW B.U.B.B.L.E.S.", width/2, 650);
  }
  
  
  // event function
  function mouseDragged() {
	let r = random(5, 50);
	let b = new Bubble(mouseX, mouseY, r);
	bubbles.push(b);
  }
  

  //class
  class Bubble {
	constructor(x, y, r) {
	  this.x = x;
	  this.y = y;
	  this.r = r;
	}
  
  //behaviour for the class
	move() {
	  this.x = this.x + random (-2, 2)
	  this.y = this.y + random (-10, 10)
	}
  
	show() {
	noStroke();
	fill(random(255), random(255), random(255));
	ellipse(this.x, this.y, this.r * 2);
	}
  }