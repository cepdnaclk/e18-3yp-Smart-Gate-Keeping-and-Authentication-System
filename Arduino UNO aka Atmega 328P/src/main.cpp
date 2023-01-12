#include <Arduino.h>
// #include <Ultrasonic.h> // library for ultrasonic sensor

// const int trigPin1 = 5;  // ultrasonic sensor 1 trigger pin
// const int echoPin1 = 6;  // ultrasonic sensor 1 echo pin
// const int trigPin2 = 7;  // ultrasonic sensor 2 trigger pin
// const int echoPin2 = 8;  // ultrasonic sensor 2 echo pin
// const int trigPin3 = 9;  // ultrasonic sensor 3 trigger pin
// const int echoPin3 = 10; // ultrasonic sensor 3 echo pin
// const int trigPin4 = 11; // ultrasonic sensor 4 trigger pin
// const int echoPin4 = 12; // ultrasonic sensor 4 echo pin

// Ultrasonic sensor1(trigPin1, echoPin1); // create ultrasonic sensor objects
// Ultrasonic sensor2(trigPin2, echoPin2);
// Ultrasonic sensor3(trigPin3, echoPin3);
// Ultrasonic sensor4(trigPin4, echoPin4);

// void setup()
// {
//   Serial.begin(9600); // initialize serial communication
// }

// void loop()
// {
//   long distance1 = sensor1.distanceRead(); // read distance from sensor 1
//   long distance2 = sensor2.distanceRead(); // read distance from sensor 2
//   long distance3 = sensor3.distanceRead(); // read distance from sensor 3
//   long distance4 = sensor4.distanceRead(); // read distance from sensor 4

//   // check if a person is passing through the gate
//   if (distance1 < 100 && distance2 < 100 && distance3 > 100 && distance4 > 100)
//   {
//     // person is moving from left to right
//     Serial.println("Person moving from left to right");
//   }
//   else if (distance1 > 100 && distance2 > 100 && distance3 < 100 && distance4 < 100)
//   {
//     // person is moving from right to left
//     Serial.println("Person moving from right to left");
//   }
//   else
//   {
//     // no person detected
//     Serial.println("No person detected");
//   }

//   delay(500); // delay for half a second
// }
#include <Ultrasonic.h>

long t1, t2, t3, t4;

// initilize input/output ports for each sensor
Ultrasonic ultrasonic1(13, 12);
Ultrasonic ultrasonic2(11, 10);
Ultrasonic ultrasonic3(9, 8);
Ultrasonic ultrasonic4(7, 6);
// float max_distance = 50;  // movement sensing range (in cm)

// initialize variable
long max_distance = 0;
long distanceSum = 0;
long readings = 0;

void setup()
{
  Serial.begin(9600);
}

void loop()
{

  // get distance readings from 4 sensors until 10s and calculate the average maximum distance
  if (millis() < 10000)
  {

    // find the average maximum distance
    long dis1 = ultrasonic1.distanceRead();
    long dis2 = ultrasonic2.distanceRead();
    long dis3 = ultrasonic3.distanceRead();
    long dis4 = ultrasonic4.distanceRead();

    long avg_dis = (dis1 + dis2 + dis3 + dis4) / 4;
    if (avg_dis > max_distance)
    {
      max_distance = avg_dis;
    }
    distanceSum += max_distance;
    readings++;
    delay(100);
  }
  long averageDistance = distanceSum / readings;
  Serial.print("average max Distance :");
  Serial.println(averageDistance);

  // get distance and time when detecting the object by each sensor

  // sensor 1
  long distance1 = ultrasonic1.distanceRead();
  Serial.print("Distance 1: ");
  Serial.println(distance1);

  // if sensor distance drops below limit, record timestamp
  if (distance1 < max_distance)
  {
    t1 = millis();
  }

  delay(500);

  // sensor 2
  long distance2 = ultrasonic2.distanceRead();
  Serial.print("Distance 2: ");
  Serial.println(distance2);

  if (distance2 < max_distance)
  {
    t2 = millis();
  }

  delay(500);

  // sensor 3
  long distance3 = ultrasonic3.distanceRead();
  Serial.print("Distance 3: ");
  Serial.println(distance3);

  if (distance3 < max_distance)
  {
    t3 = millis();
  }

  delay(500);

  // sensor 4
  long distance4 = ultrasonic4.distanceRead();
  Serial.print("Distance 4: ");
  Serial.println(distance4);

  if (distance4 < max_distance)
  {
    t4 = millis();
  }

  if (t1 != 0 && t2 != 0 && t3 != 0 && t4 != 0)
  { // if both sensors have nonzero timestamps
    if (t1 < t2 && t2 < t3 && t3 < t4)
    {                            // if left sensor triggered first
      Serial.println("Entered"); // direction is left to right
    }
  }

  t1 = 0;
  t2 = 0;
  t3 = 0;
  t4 = 0;
}
