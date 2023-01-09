#include <Arduino.h>
#include <Adafruit_Fingerprint.h>
#include <SoftwareSerial.h>
#include <LiquidCrystal_I2C.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <ESP8266WiFiMulti.h>
#include <WiFiClientSecure.h>

// set the LCD number of columns and rows
#define LCDColumns 16
#define LCDRow 2

LiquidCrystal_I2C lcd(0x27, LCDColumns, LCDRow);

// gloabl variables
SoftwareSerial mySerial(13, 15);
Adafruit_Fingerprint finger = Adafruit_Fingerprint(&mySerial); // fingerprint controller variable
ESP8266WiFiMulti WiFiMulti;

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
  Serial.println();

  WiFi.mode(WIFI_STA);
  WiFiMulti.addAP(WIFI_SSID, WIFI_PASSWORD);

  // wait for WiFi connection
  Serial.print("Waiting for WiFi to connect...");
  while ((WiFiMulti.run() != WL_CONNECTED))
  {
    Serial.print(".");
  }
  Serial.println(" connected");

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
  WiFiClientSecure *client = new WiFiClientSecure;
  HTTPClient https;

  Serial.print("[HTTPS] begin...\n");
  if (https.begin(*client, "https://api.publicapis.org/entries"))
  { // HTTPS
    Serial.print("[HTTPS] GET...\n");
    int httpCode = https.GET();
    if (httpCode > 0)
    {
      Serial.printf("[HTTPS] GET... code: %d\n", httpCode);
      if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY)
      {
        String payload = https.getString();
        Serial.println(payload);
      }
    }
    else
    {
      Serial.printf("[HTTPS] GET... failed, error: %s : %i\n", https.errorToString(httpCode).c_str(),httpCode);
    }

    https.end();
  }
  else
  {
    Serial.printf("[HTTPS] Unable to connect\n");
  }

  delete client;

  Serial.println();
  Serial.println("Waiting 10s before the next round...");
  delay(10000);
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
