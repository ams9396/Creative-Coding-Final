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