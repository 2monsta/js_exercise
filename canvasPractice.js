// goand get the tag from the DOM with an ID of canvas(canvas tag);

var canvas = document.getElementById("canvas")
// console.dir(canvas)
// canvas by itself is just a something to draw on, in JS, we need a "context" which 
var context = canvas.getContext('2d');
// rect takes 4 args:
// 1. upper x
// 2. upper y
// 3. lower x
// 4. lower y
// context.rect(100,100,300,300); /* --set up the path */
// context.stroke(); 

// context.moveTo(100,100);
// context.lineTo(400,400);
// context.stroke();
// context.moveTo(200,200)
//

//A CONSTRUCTOR method to make new ball
function Ball(x,y){
	this.x = x;
	this.y = y;
	this.drawBall = this.drawBall.bind(this);
	this.updateBallPosition= this.updateBallPosition.bind(this);
	this.xDirection = 1;
	this.yDirection =1;
	this.randx = Math.ceil(Math.random() * 15);
	this.randy = Math.ceil(Math.random() * 10);
}
Ball.prototype.radius = 50;
Ball.prototype.drawBall= function(){
	context.beginPath();
	context.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
	context.fill();
}
Ball.prototype.updateBallPosition= function(){
	context.clearRect(0,0,500,500);
	this.drawBall();
	if(this.x >=500 - this.radius){
		this.xDirection =- this.xDirection ;
	}
	if(this.x <=0 + this.radius){
		this.xDirection =- this.xDirection ;
	}
	if(this.y >=500 -this.radius){
		this.yDirection =-this.yDirection;
	}
	if(this.y <=0 + this.radius){
		this.yDirection =-this.yDirection;
	}
	this.x +=this.randx * this.xDirection;
	this.y +=this.randy * this.yDirection;
}

theBall = new Ball(100,100);

var ballInterval = setInterval(theBall.updateBallPosition, 50);

canvas.addEventListener("click", function(event){
	console.log(event);
})
// function drawBall(){
// 	centerX+=10;
// 	centerY+=10;
// 	context.arc(centerX, centerY, 50, 0*Math.PI, 2*Math.PI)
// 	context.stroke();
// 	// just like pygame.screen.flip(), we have clearRect()
// 	context.clearRect(0,0,500,500);
// 	context.fill();
// }
// var ballInterval = setInterval(drawBall, 50);