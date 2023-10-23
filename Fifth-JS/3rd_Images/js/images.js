var myGamePiece;
function startGame(){
    myGamePiece = new component(30, 30, "./images/smiley.gif", 10, 120, "image");
    myGameArea.start;
}

// Defining myGameArea
var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function (){
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        setInterval(updateGameArea, 20);
    },
    clear: function(){
        this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
    },
};

function component(width,height,color,x,y,type){
    // Declaration of several variables part of the component object.
  this.type = type;
  if(type == "image"){
    this.image = new Image();
    this.image.src = color;
  }
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  //Declaration of update function
  this.update = function (){
    ctx = myGameArea.context;
    // Option to draw the component as an image or as a square with a color
    if (type == image){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }else{
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  };

  // Declaration of newPosition
  this.newPos = function(canvasWidth, canvasHeight){
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.type =="images"){
        if(this.x >= canvasWidth - this.width / 2 || this.x <= 0){
            this.speedX = -this.speedX;
        }
        if(this.y >= canvasHeight - this.height / 2 || this.y <= 0){
            this.speedY = -this.speedY;
        }
    }
  };
}

function updateGameArea(){
    myGameArea.clear();
    myGamePiece.newPos(myGameArea.canvas.width, myGameArea.canvas.height);
    myGamePiece.update();
}

//Declaration of controlers that´ll operate the movement of the object
function moveUp(){
    myGamePiece.speedY -= 1;
}

function moveDown(){
    myGamePiece.speedY += 1;
}

function moveLeft(){
    myGamePiece.speedX -= 1;
}

function moveRight(){
    myGamePiece.speedX += 1;
}



