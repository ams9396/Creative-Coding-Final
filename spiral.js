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
