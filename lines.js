function lines(){
    stroke(random(0), 255, rightsensorData);
    let mappedData1 = map(rightsensorData, 200, 800, 0, 500); 
    let mappedData2 = map(leftsensorData, 10, 80, 0, 30); 
    ellipse(mappedData1+random(50), random(600), random(400), mappedData2*random(50));
    ellipse(random(500), mappedData2*3, random(300), mappedData1+random(100));
  }
  