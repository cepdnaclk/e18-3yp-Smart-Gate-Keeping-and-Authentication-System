#include <Arduino.h>
#include <Adafruit_Fingerprint.h>
#include <SoftwareSerial.h>
#include <LiquidCrystal_I2C.h>
#include <ESP8266WiFi.h>


// set the LCD number of columns and rows
#define LCDColumns 16
#define LCDRow 2

#define ServoMotorpin  D4

// Fingerprint scanner Pins        / red - Vin / Black - GND
#define Finger_Rx 14 // D5 - connect yellow wire
#define Finger_Tx 12 // D6 - connect white wire
// connect blue wire to 3.3V out        / Green - Touch (Zero when touched)

// gloabl variables
LiquidCrystal_I2C lcd(0x27, LCDColumns, LCDRow);
SoftwareSerial mySerial(Finger_Rx, Finger_Tx);
Adafruit_Fingerprint finger = Adafruit_Fingerprint(&mySerial); // fingerprint controll variable
uint8_t operation;
uint8_t id;

// api request test
WiFiClient client;
const char *host = "api.publicapis.org";
const char *endpoint = "/entries";

// function prototypes
uint8_t genarateNewID();
uint16_t registerFingerprint();
void displayText(String text, uint8_t cursor1, uint8_t cursor2);

// Define the WiFi credentials
#define WIFI_SSID "Galaxy M02s5656"
#define WIFI_PASSWORD "hiru2857756"

// Define firebase credentials
#define FIREBASE_HOST "your-firebase-project-id.firebaseio.com"
#define FIREBASE_AUTH "your-firebase-secret"

void setup()
{
  Serial.begin(115200); // baud rate set to 115200
  delay(100);

  /*  Wifi Set up for the internet   */
  // WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  // Serial.print("Connecting to Wi-Fi");
  // while (WiFi.status() != WL_CONNECTED)
  // {
  //   Serial.print(".");
  //   delay(250);
  // }
  // Serial.println();
  // Serial.print("Connected with IP: ");
  // Serial.println(WiFi.localIP());
  // WiFi.setAutoConnect(true);   //  automatically connect to the last-connected network after a reboot or power-on
  // WiFi.setAutoReconnect(true); // automatically reconnect to the network if the connection is lost

  /* Set up for the LCD 16x2 display */
  // Wire.begin();
  // Serial.println("\nI2C Scanner");

  /* Set up for the Fingerprint sensor */

  Serial.println("\n\nFingerprint sensor enrollment");

  finger.begin(57600); // set the data rate for the sensor serial port

  if (finger.verifyPassword()) // check sensor is active and responding
  {
    Serial.println("Found fingerprint sensor!");
  }
  else
  {
    Serial.println("Did not find fingerprint sensor :------------");
    while (1)
    {
      delay(1);
    }
  }

  /*  Set up Servo Motor */
  
}

void loop()
{
  /* Network Code */
  // // handle wifi connection errors and reconnect
  // if (WiFi.status() != WL_CONNECTED)
  // {
  //   WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  //   Serial.print("Reconnecting");
  //   while (WiFi.status() != WL_CONNECTED)
  //   {
  //     Serial.print(".");
  //     delay(250);
  //   }
  //   Serial.println();
  // }

  // if (!client.connect(host, 80))
  // {
  //   Serial.println("Connection failed");
  //   return;
  // }
  // Serial.println("Connected");
  // // Send the GET request
  // client.print(String("GET ") + endpoint + " HTTP/1.1\r\n" +
  //              "Host: " + host + "\r\n" +
  //              "Connection: close\r\n\r\n");

  // // Read the response
  // while (client.connected())
  // {
  //   String line = client.readStringUntil('\n');
  //   if (line == "\r")
  //   {
  //     break;
  //   }
  // }
  // String response = client.readStringUntil('\n');
  // Serial.println(response);

  // client.stop();
  // delay(5000);

  /*    Fingerprint Code    */

  // Serial.printf("Fingerprint Count - %i\n", genarateNewID() - 1); // count of fingerprints
  /* Servo control */


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
