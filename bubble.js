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