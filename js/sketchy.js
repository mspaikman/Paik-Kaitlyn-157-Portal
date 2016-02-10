console.log("reading from js");

var c1=0.0; //starting point for Crystal1
var c2=2.0; //starting point for Crystal2
var s=0.02; //animation speed

function setup(){
    var myCanvas=createCanvas(800,250);
    myCanvas.parent("mySketch");
    //link to id mySketch from header tag
    myCanvas.parent("mySketch");
    smooth();
    noStroke ();
    noCursor();
}

function draw(){
      background(mouseX/2 + mouseY/2, 200, 200);
  translate (width/2, height/2);

  //timers, c1 is always increasing...
  c1=c1+s;
  //...until it reaches 16
  if (c1>=4) {
    c1=0;
  }

  //c2 is also always increasing...
  c2=c2+s;
  //...until it reaches 16
  if (c2>=8) {
    c2=0;
  }


  //--------------------------------------scale crystal 1
  if (c1>=0) {
    scale (c1);

    fill (255, 255, 255);

    //original triangle 

    triangle (25, 0, 0, 50, -25, 0);
    fill (96, 229, 255, 50);
    triangle (25, 0, 0, 125, -25, 0);
    fill (96, 229, 255, 100);
    triangle (25, 0, 0, 125, 50, 100);
    triangle (-50, 100, 0, 125, -25, 0);
    fill (255, 255, 255);
    triangle (-60, 125, 0, 125, 0, 175);
    triangle (60, 125, 0, 125, 0, 175 );
    fill (96, 229, 255, 50);
    triangle (-30, 125, 30, 125, 0, 250);

    //rotate 1

    rotate (PI/3.0);
    fill (255, 255, 255);
    triangle (25, 0, 0, 50, -25, 0);
    fill (96, 229, 255, 50);
    triangle (25, 0, 0, 125, -25, 0);
    fill (96, 229, 255, 100);
    triangle (25, 0, 0, 125, 50, 100);
    triangle (-50, 100, 0, 125, -25, 0);
    fill (255, 255, 255);
    triangle (-60, 125, 0, 125, 0, 175);
    triangle (60, 125, 0, 125, 0, 175 );
    fill (96, 229, 255, 50);
    triangle (-30, 125, 30, 125, 0, 250);

    //rotate 2

    rotate (PI/3.0);
    fill (255, 255, 255);
    triangle (25, 0, 0, 50, -25, 0);
    fill (96, 229, 255, 50);
    triangle (25, 0, 0, 125, -25, 0);
    fill (96, 229, 255, 100);
    triangle (25, 0, 0, 125, 50, 100);
    triangle (-50, 100, 0, 125, -25, 0);
    fill (255, 255, 255);
    triangle (-60, 125, 0, 125, 0, 175);
    triangle (60, 125, 0, 125, 0, 175 );
    fill (96, 229, 255, 50);
    triangle (-30, 125, 30, 125, 0, 250);

    //rotate 3

    rotate (PI/3.0);
    fill (255, 255, 255);
    triangle (25, 0, 0, 50, -25, 0);
    fill (96, 229, 255, 50);
    triangle (25, 0, 0, 125, -25, 0);
    fill (96, 229, 255, 100);
    triangle (25, 0, 0, 125, 50, 100);
    triangle (-50, 100, 0, 125, -25, 0);
    fill (255, 255, 255);
    triangle (-60, 125, 0, 125, 0, 175);
    triangle (60, 125, 0, 125, 0, 175 );
    fill (96, 229, 255, 50);
    triangle (-30, 125, 30, 125, 0, 250);

    //rotate 4

    rotate (PI/3.0);
    fill (255, 255, 255);
    triangle (25, 0, 0, 50, -25, 0);
    fill (96, 229, 255, 50);
    triangle (25, 0, 0, 125, -25, 0);
    fill (96, 229, 255, 100);
    triangle (25, 0, 0, 125, 50, 100);
    triangle (-50, 100, 0, 125, -25, 0);
    fill (255, 255, 255);
    triangle (-60, 125, 0, 125, 0, 175);
    triangle (60, 125, 0, 125, 0, 175 );
    fill (96, 229, 255, 50);
    triangle (-30, 125, 30, 125, 0, 250);

    //rotate 5
    rotate (PI/3.0);
    fill (255, 255, 255);
    triangle (25, 0, 0, 50, -25, 0);
    fill (96, 229, 255, 50);
    triangle (25, 0, 0, 125, -25, 0);
    fill (96, 229, 255, 100);
    triangle (25, 0, 0, 125, 50, 100);
    triangle (-50, 100, 0, 125, -25, 0);
    fill (255, 255, 255);
    triangle (-60, 125, 0, 125, 0, 175);
    triangle (60, 125, 0, 125, 0, 175 );
    fill (96, 229, 255, 50);
    triangle (-30, 125, 30, 125, 0, 250);

    //rotate 6

    rotate (PI/3.0);
    fill (255, 255, 255);
    triangle (25, 0, 0, 50, -25, 0);
    fill (96, 229, 255, 50);
    triangle (25, 0, 0, 125, -25, 0);
    fill (96, 229, 255, 100);
    triangle (25, 0, 0, 125, 50, 100);
    triangle (-50, 100, 0, 125, -25, 0);
    fill (255, 255, 255);
    triangle (-60, 125, 0, 125, 0, 175);
    triangle (60, 125, 0, 125, 0, 175 );
    fill (96, 229, 255, 50);
    triangle (-30, 125, 30, 125, 0, 250);
  }

  //--------------------------------------scale crystal 2
  if (c2>=0) {
    scale (c2);
   
  
    fill (96, 229, 255, 50);
    triangle (25, 0, 0, 125, -25, 0);
    fill (96, 229, 255, 100);
    triangle (25, 0, 0, 125, 50, 100);
    triangle (-50, 100, 0, 125, -25, 0);
    fill (0, 0, 0);
    triangle (-60, 125, 0, 125, 0, 175);
    triangle (60, 125, 0, 125, 0, 175 );
    fill (96, 229, 255, 50);
    triangle (-30, 125, 30, 125, 0, 250);
    fill (0, 0, 0);
    triangle (25, 0, 0, 50, -25, 0);

    //rotate1
    rotate (PI/3.0);
    fill (96, 229, 255, 50);
    triangle (25, 0, 0, 125, -25, 0);
    fill (96, 229, 255, 100);
    triangle (25, 0, 0, 125, 50, 100);
    triangle (-50, 100, 0, 125, -25, 0);
    fill (0, 0, 0);
    triangle (-60, 125, 0, 125, 0, 175);
    triangle (60, 125, 0, 125, 0, 175 );
    fill (96, 229, 255, 50);
    triangle (-30, 125, 30, 125, 0, 250);
    fill (0, 0, 0);
    triangle (25, 0, 0, 50, -25, 0);

    //rotate2
    rotate (PI/3.0);
    fill (96, 229, 255, 50);
    triangle (25, 0, 0, 125, -25, 0);
    fill (96, 229, 255, 100);
    triangle (25, 0, 0, 125, 50, 100);
    triangle (-50, 100, 0, 125, -25, 0);
    fill (0, 0, 0);
    triangle (-60, 125, 0, 125, 0, 175);
    triangle (60, 125, 0, 125, 0, 175 );
    fill (96, 229, 255, 50);
    triangle (-30, 125, 30, 125, 0, 250);
    fill (0, 0, 0);
    triangle (25, 0, 0, 50, -25, 0);

    //rotate3
    rotate (PI/3.0);
    fill (96, 229, 255, 50);
    triangle (25, 0, 0, 125, -25, 0);
    fill (96, 229, 255, 100);
    triangle (25, 0, 0, 125, 50, 100);
    triangle (-50, 100, 0, 125, -25, 0);
    fill (0, 0, 0);
    triangle (-60, 125, 0, 125, 0, 175);
    triangle (60, 125, 0, 125, 0, 175 );
    fill (96, 229, 255, 50);
    triangle (-30, 125, 30, 125, 0, 250);
    fill (0, 0, 0);
    triangle (25, 0, 0, 50, -25, 0);

    //rotate 4
    rotate (PI/3.0);
    fill (96, 229, 255, 50);
    triangle (25, 0, 0, 125, -25, 0);
    fill (96, 229, 255, 100);
    triangle (25, 0, 0, 125, 50, 100);
    triangle (-50, 100, 0, 125, -25, 0);
    fill (0, 0, 0);
    triangle (-60, 125, 0, 125, 0, 175);
    triangle (60, 125, 0, 125, 0, 175 );
    fill (96, 229, 255, 50);
    triangle (-30, 125, 30, 125, 0, 250);
    fill (0, 0, 0);
    triangle (25, 0, 0, 50, -25, 0);

    //rotate5
    rotate (PI/3.0);
    fill (96, 229, 255, 50);
    triangle (25, 0, 0, 125, -25, 0);
    fill (96, 229, 255, 100);
    triangle (25, 0, 0, 125, 50, 100);
    triangle (-50, 100, 0, 125, -25, 0);
    fill (0, 0, 0);
    triangle (-60, 125, 0, 125, 0, 175);
    triangle (60, 125, 0, 125, 0, 175 );
    fill (96, 229, 255, 50);
    triangle (-30, 125, 30, 125, 0, 250);
    fill (0, 0, 0);
    triangle (25, 0, 0, 50, -25, 0);
      
    
}