let serial;                             // variable to hold an instance of the serialport library
let portName = '/dev/tty.usbmodem1101';  // fill in your serial port name here
let inData;                             // for incoming serial data
let portSelector;

let dataMode;
let buttonData;
let rightsensorData;
let leftsensorData;
let x = 0
let b = 0;
let bubbles = [];
let bubbles1 = [];
let fortunes = [];


function setup() {
  createCanvas(700, 700);
  serial = new p5.SerialPort();       // make a new instance of the serialport library
  serial.on('list', printList);       // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', serialEvent);     // callback for when new data arrives
  serial.on('error', serialError);    // callback for errors
  serial.on('close', portClose);      // callback for the port closing

  serial.list();                      // list the serial ports
  // serial.openPort(portName);              // open a serial port
  for (let i = 0; i < 300; i++) {
  bubbles[i] = new Bubble(20,490)
  bubbles1[i] = new Bubble(20,490)
  }

  fortunes[0]= loadImage('0.png')
  fortunes[1]= loadImage('1.png')
  fortunes[2]= loadImage('2.png')
  fortunes[3]= loadImage('3.png')
  fortunes[4]= loadImage('4.png')
  fortunes[5]= loadImage('5.png')
  
  myTime = millis();
}

function draw() {
  // black background, white text:
  background(255);
  fill(255);

  console.log(rightsensorData)
  console.log(leftsensorData)
  console.log(buttonData)

  // display the incoming serial data as a string:
  text("sensor value: " + inData, 30, 50);
  text("Right sensor:" + rightsensorData, 30, 90)
  text("Left sensor: " + leftsensorData, 30, 150)
  text("Button Data: " + buttonData, 30, 180)
  

  if (millis() - myTime < 10000){
    image(fortunes[5], 100, 100, 500, 500)

  } else{

  spiral()
  if (rightsensorData<500){
  for (let i = 0; i < bubbles.length; i++){
  bubbles[i].grainy();
  }
  lines()
} else{
  for (let i = 0; i < bubbles.length; i++){
    bubbles[i].rect();
}
}
result()
  }
}

function spiral(){

  background(random(200,250),random(200,250), random(200,250));
  for (let i = 0; i <1000+random(60); i+=50) {
    noFill()
    if(rightsensorData <300){
      // background(102, 0, 51);
      stroke(random(255), (20)+random(50), leftsensorData+random(50))
      strokeWeight(1*random(5))
      // background(220);
    }else if(rightsensorData <600){
      // background(0,102, 51);
      stroke(random(10), leftsensorData+random(50), 255-random(50))
      strokeWeight(2*random(15))
    }else{
      // background(153, 153, 255);
      stroke(leftsensorData*random(4), 255, 220-random(50))
      strokeWeight(5*random(4))
    }
    
    ellipse(350, 350, i*random(60), i*random(60))

    if(leftsensorData <20){
      stroke(random(10), leftsensorData+random(50), 255-random(50))
      strokeWeight(2*random(15))

    }else if(leftsensorData <60){
      stroke(random(255), (20)+random(50), leftsensorData+random(50))
      strokeWeight(1*random(5))
    }else{
      stroke(255, leftsensorData*random(4), 220-random(50))
      strokeWeight(5*random(4))
    }
    
    ellipse(350, 350, 500 - (i), 500 - (i))

  // fill(potentiometerData, 128, 128)
  // if (buttonData <700) {
  //   ellipse(300, 300, potentiometerData * 2)
  // } else {
  //   rectMode(CENTER)
  //   rect(300, 300, potentiometerData * 2, potentiometerData * 2)
  }
}


function lines(){
  stroke(random(0), 255, rightsensorData);
  let mappedData1 = map(rightsensorData, 200, 800, 0, 500); 
  let mappedData2 = map(leftsensorData, 10, 80, 0, 30); 
  ellipse(mappedData1+random(50), random(600), random(400), mappedData2*random(50));
  ellipse(random(500), mappedData2*3, random(300), mappedData1+random(100));
}



class Bubble {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  grainy() {
   
    stroke(random(0), 255, rightsensorData);
    let mappedData1 = map(rightsensorData, 200, 800, 0, 500); 
    let mappedData2 = map(leftsensorData, 10, 80, 0, 30); 
    // ellipse(mappedData1, random(700), random(50), mappedData2);
    // ellipse(random(50), mappedData2, random(100), mappedData1+random(100));
    ellipse((mappedData1-random(0,300))+random(0, 300), random(700), random(40), mappedData2);
    ellipse((mappedData1-random(0,300))+random(400,700), random(700), random(40), mappedData2);
   
}
rect(){
  
  stroke(random(0), 255, rightsensorData);
    let mappedData1 = map(rightsensorData, 200, 800, 0, 500); 
    let mappedData2 = map(leftsensorData, 10, 80, 0, 30); 
    fill(random(0, rightsensorData));
    rect((mappedData1-random(0,300))+random(0, 300), random(700), random(40), mappedData2);
    ellipse((mappedData1-random(0,300))+random(400,700), random(700), random(40), mappedData2);
    noFill();
}
}

function result() {
  if (buttonData == 1){
    noLoop()
    fill(255,255,255, 200);
    rect(100, 100, 500, 500)
    
    image(random(fortunes), 100, 100, 500, 500)
  }
}

// make a serial port selector object:
function printList(portList) {
  // create a select object:
  portSelector = createSelect();
  portSelector.position(10, 10);
  // portList is an array of serial port names
  for (var i = 0; i < portList.length; i++) {
    // add this port name to the select object:
    portSelector.option(portList[i]);
  }
  // set an event listener for when the port is changed:
  portSelector.changed(mySelectEvent);
}

function mySelectEvent() {
  let item = portSelector.value();
  // if there's a port open, close it:
  if (serial.serialport != null) {
    serial.close();
  }
  // open the new port:
  serial.openPort(item);
}

function serverConnected() {
  console.log('connected to server.');
}

function portOpen() {
  console.log('the serial port opened.')
}

function serialEvent() {
  // read a byte from the serial port, convert it to a number:
  let inString = serial.readLine();

  if(inString.length <= 0) return;

  if (inString === "rightsensor") {
    dataMode = "rightsensor"
  } else if(inString === "leftsensor") {
    dataMode = "leftsensor"
  } else if(inString === "button") {
      dataMode = "button"
  } else if(dataMode === "rightsensor") {
    rightsensorData = inString
  } else if (dataMode === "leftsensor") {
    leftsensorData = inString
  } else if (dataMode === "button") {
    buttonData = inString
  }

//   let rightsensorData;
// let leftsensorData;

  inData = inString
}

const softCopy = (i) => i

function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}

function portClose() {
  console.log('The serial port closed.');
}