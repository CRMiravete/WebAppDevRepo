function drawClock(){
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
}

function drawFace(ctx,radius){
    var grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
}

function drawNumbers(ctx,radius){
    var ang;
    var num = 1;
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#333";
    ctx.textAlign = "center";
    ang = (num * Math.PI) / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-ang);
}

function drawTime(ctx, radius){
   var now = new Date();
   var hour = now.getHours();
   var minute = now.getMinutes();
   var seconds = now.getSeconds();
   //Mark the hours
   hour = hour % 12;
   drawHand(ctx, hour, radius*0.5. radius*0.07);
   //Mark the minutes
   drawHand(ctx, minute, radius*0.8, radius*0.07);
   //Mark the seconds
   drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, lenght, width){
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -lenght);
    ctx.stroke();
    ctx.rotate(-pos);
}