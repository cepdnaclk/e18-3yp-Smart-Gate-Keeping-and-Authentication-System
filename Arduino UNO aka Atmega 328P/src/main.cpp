#include <Arduino.h>
#include <Ultrasonic.h>

unsigned long t1, t2, t3, t4;

// initilize in[ut/output ports for each sensor
Ultrasonic ultrasonic1(5, 4);
Ultrasonic ultrasonic2(2, 3);
Ultrasonic ultrasonic3(11, 10);
Ultrasonic ultrasonic4(7, 6);
float max_distance = 30; // movement sensing range (in cm)

void setup()
{
  Serial.begin(9600);
}

void loop()
{

  // sensor 1
  while (1)
  {
    long distance1 = ultrasonic1.distanceRead();

    // if sensor distance drops below limit, record timestamp
    if (distance1 < max_distance)
    {
      // Serial.print("Distance 1: ");
      // Serial.println(distance1);
      // t1 = millis();
      // detected++;
      break;
    }
  }

  // sensor 2
  while (1)
  {
    long distance2 = ultrasonic2.distanceRead();

    if (distance2 < max_distance)
    {
      // Serial.print("Distance 2: ");
      // Serial.println(distance2);
      // t2 = millis();
      // detected++;
      break;
    }
  }

  // sensor 3
  while (1)
  {
    long distance3 = ultrasonic3.distanceRead();

    if (distance3 < max_distance)
    {
      // Serial.print("Distance 3: ");
      // Serial.println(distance3);
      // t3 = millis();
      // detected++;
      break;
    }
  }

  // sensor 4
  while (1)
  {
    long distance4 = ultrasonic4.distanceRead();

    if (distance4 < max_distance)
    {
      // Serial.print("Distance 4: ");
      // Serial.println(distance4);
      // t4 = millis();
      // detected++;
      // Serial.println("Entered");
      Serial.write("Object detected!");
      break;
    }
  }
  delay(1000);
}
