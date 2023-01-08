#include <Arduino.h>
#include <Adafruit_Fingerprint.h>
#include <SoftwareSerial.h>
#include <LiquidCrystal_I2C.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

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
void connectToWiFi();

// Define the WiFi credentials
#define WIFI_SSID "Galaxy M02s5656"
#define WIFI_PASSWORD "hiru2857756"

void setup()
{
  Serial.begin(115200);

  /*  Wifi Set up for the internet   */
  connectToWiFi();

  /* Set up for the LCD 16x2 display */
  // Wire.begin();
  // Serial.println("\nI2C Scanner");

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
  // Check if the WiFi connection is still active
  if (WiFi.status() != WL_CONNECTED)
  {
    connectToWiFi(); // If not, try to reconnect
  }
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

void connectToWiFi()
{
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(1000);
    Serial.println("Connecting to WiFi..");
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();
  Serial.println("Connected to the WiFi network");
}