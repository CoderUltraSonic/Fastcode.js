//USERS MAY COPY THE SOURCE CODE
//CREATOR: ROYALCODER1234
//NOT FOR PUBLIC USAGE
let fastcode = true;

//FIRST SET OF FUNCTIONS
if (fastcode) {
  function debug(input) {
    console.log(input);
  }function help() {
    console.log('FastCode.js is made to make programming, well, faster. It is built on p5.js. Please check the documentation page. It should hold all the new functions fastcode.js has introduced. If you are unsure of how some functions work, then also consult the documentation page. Sometimes the code might get too hard, and I understand. Just comment on me and we can talk about what to change. I sometimes will do monthly updates, depending on the amount of requests I get. Thank you reading this!');
  }function sign(x) {
    alert(x);
  } function canvas(x, y) {
    let cnv = createCanvas(x, y);
    return cnv;
  }
  //FIRST SET OF VARIABLES
  const white = 255;
  const black = 0;
  const red = [255, 0, 0];
  const green = [0, 255, 0];
  const blue = [0, 0, 255];
  //2SET-F
  function circleFill(x, y, color, dm) {
    noStroke();
    fill(color);
    ellipse(x, y, dm, dm);
  } function circleStroke(x, y, color, dm) {
    noFill();
    stroke(color);
    ellipse(x, y, dm, dm);
  } function space() {
    createP('');
  } function docBg(color) {
    document.body.style.backgroundColor = color;
  } function bg(color) {
    background(color);
  } 
  //3SET-F
  function equal(input1, input2) {
    in2 = random(1);
    if (in2 == 1) {
      in2 = floor(input1);
    } else {
      in2 = floor(input2);
    }
    return in2;
  } function mean(in1, in2) {
    let sum = in1 + in2;
    let mean1 = sum / 2;
    input1 = floor(mean1);
    input2 = floor(mean1);
    return floor(mean1);
  } function canvas(width, height) {
    createCanvas(width, height);
  } function btn(input, variable) {
    variable = createButton(input);
  }
  //1SET-O
  function RealObject(x, y, sizeX, sizeY, color, vel, gravity) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.vel = vel;
    this.gravity = gravity;
    this.size = [sizeX, sizeY];
    this.draw = function() {
      fill(color);
      rect(x, y, sizeX, sizeY);
    }
    this.update = function() {
      this.velocity += this.gravity;
      this.velocity *= 0.09;
      this.y += this.velocity;
    }
    this.constrain = function() {
      if (this.y + sizeY > height || this.y < 0) {
        if (this.y + sizeY > height) {
          this.y = height;
        } else {
          this.y = 0;
        }
      } else if (this.x + sizeX > width || this.x < 0) {
        if (this.x + sizeX > width) {
          this.x = width;
        } else {
          this.x = 0;
        }
      }
    }
  }
  //4SET-F
  function error(input) {
    console.error(input);
  } function clearCons() {
    console.clear();
  } function info(input) {
    console.info(input);
  } function timeCons() {
    console.time();
  } function timeEnd() {
    console.timeEnd();
  } function warn(input) {
    console.warn(input);
  } function rotateAll(xtrue, ytrue, ztrue) {
    if (xtrue) {
      rotateX(millis() / 100);
    }
    if (ytrue) {
      rotateY(millis() / 100);
    }
    if (ztrue) {
      rotateZ(millis() / 100);
    }
  }
}
