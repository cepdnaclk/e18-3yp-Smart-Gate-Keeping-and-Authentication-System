#include <Arduino.h>
#include <Ultrasonic.h> // library for ultrasonic sensor

const int trigPin1 = 5;  // ultrasonic sensor 1 trigger pin
const int echoPin1 = 6;  // ultrasonic sensor 1 echo pin
const int trigPin2 = 7;  // ultrasonic sensor 2 trigger pin
const int echoPin2 = 8;  // ultrasonic sensor 2 echo pin
const int trigPin3 = 9;  // ultrasonic sensor 3 trigger pin
const int echoPin3 = 10; // ultrasonic sensor 3 echo pin
const int trigPin4 = 11; // ultrasonic sensor 4 trigger pin
const int echoPin4 = 12; // ultrasonic sensor 4 echo pin

Ultrasonic sensor1(trigPin1, echoPin1); // create ultrasonic sensor objects
Ultrasonic sensor2(trigPin2, echoPin2);
Ultrasonic sensor3(trigPin3, echoPin3);
Ultrasonic sensor4(trigPin4, echoPin4);

void setup()
{
  Serial.begin(9600); // initialize serial communication
}

void loop()
{
  long distance1 = sensor1.distanceRead(); // read distance from sensor 1
  long distance2 = sensor2.distanceRead(); // read distance from sensor 2
  long distance3 = sensor3.distanceRead(); // read distance from sensor 3
  long distance4 = sensor4.distanceRead(); // read distance from sensor 4

  // check if a person is passing through the gate
  if (distance1 < 100 && distance2 < 100 && distance3 > 100 && distance4 > 100)
  {
    // person is moving from left to right
    Serial.println("Person moving from left to right");
  }
  else if (distance1 > 100 && distance2 > 100 && distance3 < 100 && distance4 < 100)
  {
    // person is moving from right to left
    Serial.println("Person moving from right to left");
  }
  else
  {
    // no person detected
    Serial.println("No person detected");
  }

  delay(500); // delay for half a second
}
