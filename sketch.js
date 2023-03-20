var xss=[];
var yss=[];
var curly=[];
var spinny=[];
var colour=[];
var shape=[];


function setup(){
  createCanvas(720,480);
    for(var i=0;i<600;i++){
        xss.push(random(width));
        yss.push(random(height));
        curly[i]=random(-10,10);
        spinny[i]=random(10,20);
        colour[i]=colourPlease();
        shape[i]=shapePlease();
        console.log(shape[i]);
    }
    noStroke();

}


function colourPlease(){
    var ourColours=["white","pink","yellow","blue","violet","iridium"];
    var randomNumber=random(ourColours.length-1);
    randomNumber=randomNumber.toFixed(0);
    return ourColours[randomNumber];
}

function shapePlease(){
    var shapes=["circle","square","triangle"];
    var randomNumber=random(shapes.length-1);
    randomNumber=randomNumber.toFixed(0);
    console.log(shapes[randomNumber]);
    return shapes[randomNumber];
}

let value=0;
function draw(){
    background("SkyBlue");
    for(var i=0;i<xss.length;i++){
        yss[i]+=random(2);
        if(yss[i]>height){
            yss[i]=-10;
        }
        push();
        translate(xss[i],yss[i]);
        rotate(frameCount/spinny[i]);
        fill(colour[i]);
        
        if(shape[i]==="square"){
            square(curly[i],curly[i],10,10);
        }
        if(shape[i]==="circle"){
            ellipse(curly[i],curly[i],10,10);
        }
        if(shape[i]==="triangle"){
            triangle(0,-5,-5,5,5,5);
        }

        pop();
    }
    fill(value);
    rect(300,200, 50, 150);
    describe('green 50-by-50 rect turns yellow with mouse doubleClick/press.');

    fill(value);
    rect(300,150, 150, 150);
    describe('green 50-by-50 rect turns yellow with mouse doubleClick/press.');

// reference for doubleclicked(): https://p5js.org/reference/#/p5/doubleClicked
//also referenced from class
//The shaking with the shapes in the background is accidental with the changing of the background
}

function doubleClicked() {
    if (value === 0) {
      value = 255;
    } else {
      value = 0;
    }
  }
// with the doubleClicked(), 
// the letter P was completed made by accident since I was messing around with
// with the example P5 provided

function mousePressed(){
    saveCanvas("P5ArraysProject","jpg");
    //link used for reference: https://p5js.org/reference/#/p5/saveCanvas
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    //link used for reference:https://p5js.org/reference/#/p5/windowResized
  }