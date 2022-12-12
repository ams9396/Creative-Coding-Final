void setup() {
  Serial.begin(9600); // initialize serial communications
}
 
void loop() {
  // read the input pin:
  int rightsensor = analogRead(A1);                  
  // print it out the serial port:
  Serial.println("rightsensor");
//  delay(50);
  Serial.println(rightsensor); 
            

int leftsensor = analogRead(A0);
  Serial.println("leftsensor");
//  delay(50);
  Serial.println(leftsensor);
//  delay(50);

  int button = digitalRead(12);
  Serial.println("button");
//  delay(50);
  Serial.println(button);
 delay(50);
}
