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

  function serialError(err) {
    console.log('Something went wrong with the serial port. ' + err);
  }
  
  function portClose() {
    console.log('The serial port closed.');
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