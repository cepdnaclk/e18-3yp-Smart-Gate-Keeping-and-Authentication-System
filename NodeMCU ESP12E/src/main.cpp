#include <Arduino.h>
#include <Adafruit_Fingerprint.h>
#include <SoftwareSerial.h>
#include <LiquidCrystal_I2C.h>

// set the LCD number of columns and rows
#define LCDColumns 16
#define LCDRow 2

LiquidCrystal_I2C lcd(0x27, LCDColumns, LCDRow);

SoftwareSerial mySerial(13, 15);
Adafruit_Fingerprint finger = Adafruit_Fingerprint(&mySerial); // fingerprint controller variable

// function prototypes
uint8_t genarateNewID();
uint16_t registerFingerprint();
void displayText(String text, uint8_t cursor1, uint8_t cursor2);

void setup()
{
  Serial.begin(115200);
  /* Set up for the LCD 16x2 display */
  Wire.begin();
  Serial.println("\nI2C Scanner");

  /* Set up for the Fingerprint sensor */

  // Serial.println("\n\nFingerprint sensor enrollment");

  // finger.begin(57600); // set the data rate for the sensor serial port

  // if (finger.verifyPassword()) // check sensor is active and responding
  // {
  //   Serial.println("Found fingerprint sensor!");
  // }
  // else
  // {
  //   Serial.println("Did not find fingerprint sensor :------------");
  //   while (1)
  //   {
  //     delay(1);
  //   }
  // }
}

void loop()
{
  // int newID = genarateNewID();
  // Serial.println(newID);
  // displayText("Hello World!!",0,0);
}

uint8_t genarateNewID()
{
  int count = finger.getTemplateCount(); // get the no of fingerprint templates on memory
  if (count != FINGERPRINT_OK)
    return -1;
  return count + 1;
}

// uint16_t registerFingerprint(){
//   Serial.println("Place finger on sensor to register");
//   uint16_t id = genarateNewID();         // get the next id to store

// }

void displayText(String text, uint8_t cursor1, uint8_t cursor2)
{
  lcd.setCursor(cursor1, cursor2); // set the cursor position
  lcd.print(text);                 // print the text
}
