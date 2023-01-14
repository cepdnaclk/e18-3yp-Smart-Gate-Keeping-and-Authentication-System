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
uint8_t id;

// api request test
WiFiClient client;
const char *host = "api.publicapis.org";
const char *endpoint = "/entries";

// function prototypes
uint8_t genarateNewID();
void displayText(String text, uint8_t cursor1, uint8_t cursor2);
void detectFingerprintScanner();
void verifyScannerParameters();
uint8_t readUserInput(void);
uint8_t getFingerprintEnroll();
void deleteDatabase();

// Define the WiFi credentials
#define WIFI_SSID "Galaxy M02s5656"
#define WIFI_PASSWORD "hiru2857756"


void setup(){
  Serial.begin(115200); // baud rate set to 115200
  delay(100);

  /*  Wifi Set up for the internet   */
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(250);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  WiFi.setAutoConnect(true);   //  automatically connect to the last-connected network after a reboot or power-on
  WiFi.setAutoReconnect(true); // automatically reconnect to the network if the connection is lost

  /* Set up for the LCD 16x2 display */
  // Wire.begin();
  // Serial.println("\nI2C Scanner");

  /* Set up for the Fingerprint sensor */

  

  /*  Set up Servo Motor */
  while (!Serial);
  delay(100);
  Serial.println("Welcome to ACCOL");
  finger.begin(57600);
  detectFingerprintScanner();
  verifyScannerParameters();
}

void loop()
{
  /* Network Connection */
  // handle wifi connection errors and reconnect
  if (WiFi.status() != WL_CONNECTED)
  {
    WiFi.reconnect();
    Serial.print("Reconnecting");
    while (WiFi.status() != WL_CONNECTED)
    {
      Serial.print(".");
      delay(250);
    }
    Serial.println();
  }

  
  /*    Fingerprint working   */

  getFingerprintEnroll();


}


uint8_t genarateNewID()           // genearate new id based on no of fingerprints stores in sensor
{
  int count = finger.getTemplateCount(); // get the no of fingerprint templates on memory
  if (count != FINGERPRINT_OK)
    return -1;
  return count + 1;
}


void displayText(String text, uint8_t cursor1, uint8_t cursor2)
{
  lcd.setCursor(cursor1, cursor2); // set the cursor position
  lcd.print(text);                 // print the text
}

void detectFingerprintScanner(){
  if (finger.verifyPassword()) {
    Serial.println("Fingerprint sensor detected!");
  } else {
    Serial.println("Did not find fingerprint sensor :(");
    while (1) { delay(1); }
  }  
  Serial.println("");
  Serial.println("");
}


void verifyScannerParameters(){
  Serial.println(F("Reading sensor parameters"));
  finger.getParameters();
  Serial.print(F("Status: 0x")); Serial.println(finger.status_reg, HEX);
  Serial.print(F("Sys ID: 0x")); Serial.println(finger.system_id, HEX);
  Serial.print(F("Capacity: ")); Serial.println(finger.capacity);
  Serial.print(F("Security level: ")); Serial.println(finger.security_level);
  Serial.print(F("Device address: ")); Serial.println(finger.device_addr, HEX);
  Serial.print(F("Packet len: ")); Serial.println(finger.packet_len);
  Serial.print(F("Baud rate: ")); Serial.println(finger.baud_rate);
  Serial.println("");
  Serial.println("");
}

uint8_t readUserInput(void) {
  uint8_t num = 0;
  while (num == 0) {
    while (! Serial.available());
    num = Serial.parseInt();
  }
  return num;
}


uint8_t getFingerprintEnroll() {

//Scan for First Time
int p = -1;
Serial.print("Waiting for valid finger to enroll as #"); 
Serial.println(id);
while (p != FINGERPRINT_OK) {
    p = finger.getImage();
    switch (p) {
    case FINGERPRINT_OK:
      Serial.println("Image taken");
      break;
    case FINGERPRINT_NOFINGER:
      Serial.println(".");
      break;
    case FINGERPRINT_PACKETRECIEVEERR:
      Serial.println("Communication error");
      break;
    case FINGERPRINT_IMAGEFAIL:
      Serial.println("Imaging error");
      break;
    default:
      Serial.println("Unknown error");
      break;
    }
  }

// OK success!
p = finger.image2Tz(1);
switch (p) {
    case FINGERPRINT_OK:
      Serial.println("Image converted");
      break;
    case FINGERPRINT_IMAGEMESS:
      Serial.println("Image too messy");
      return p;
    case FINGERPRINT_PACKETRECIEVEERR:
      Serial.println("Communication error");
      return p;
    case FINGERPRINT_FEATUREFAIL:
      Serial.println("Could not find fingerprint features");
      return p;
    case FINGERPRINT_INVALIDIMAGE:
      Serial.println("Could not find fingerprint features");
      return p;
    default:
      Serial.println("Unknown error");
      return p;
}
Serial.println("Remove finger");
delay(2000);
p = 0;
while (p != FINGERPRINT_NOFINGER) {p = finger.getImage();}
Serial.println("");
Serial.print("ID "); Serial.println(id);
p = -1;

//Scan for Second Time
Serial.println("Place same finger again");
while (p != FINGERPRINT_OK) {
  p = finger.getImage();
  switch (p) {
    case FINGERPRINT_OK:
      Serial.println("Image taken");
      break;
    case FINGERPRINT_NOFINGER:
      Serial.print(".");
      break;
    case FINGERPRINT_PACKETRECIEVEERR:
      Serial.println("Communication error");
      break;
    case FINGERPRINT_IMAGEFAIL:
      Serial.println("Imaging error");
      break;
    default:
      Serial.println("Unknown error");
      break;
    }
  }
p = finger.image2Tz(2);
switch (p) {
    case FINGERPRINT_OK:
      Serial.println("Image converted");
      break;
    case FINGERPRINT_IMAGEMESS:
      Serial.println("Image too messy");
      return p;
    case FINGERPRINT_PACKETRECIEVEERR:
      Serial.println("Communication error");
      return p;
    case FINGERPRINT_FEATUREFAIL:
      Serial.println("Could not find fingerprint features");
      return p;
    case FINGERPRINT_INVALIDIMAGE:
      Serial.println("Could not find fingerprint features");
      return p;
    default:
      Serial.println("Unknown error");
      return p;
  }
Serial.println("");

//Creating Model 
Serial.print("Creating model for #");  Serial.println(id);
p = finger.createModel();
  if (p == FINGERPRINT_OK) {
    Serial.println("Prints matched!");
  } else if (p == FINGERPRINT_PACKETRECIEVEERR) {
    Serial.println("Communication error");
    return p;
  } else if (p == FINGERPRINT_ENROLLMISMATCH) {
    Serial.println("Fingerprints did not match");
    return p;
  } else {
    Serial.println("Unknown error");
    return p;
  }

//Storing Model
Serial.print("ID "); Serial.println(id);
p = finger.storeModel(id);
if (p == FINGERPRINT_OK) {
Serial.println("Congratulations! Fingerprint is successfully enrolled.");
  } else if (p == FINGERPRINT_PACKETRECIEVEERR) {
    Serial.println("Communication error");
    return p;
  } else if (p == FINGERPRINT_BADLOCATION) {
    Serial.println("Could not store in that location");
    return p;
  } else if (p == FINGERPRINT_FLASHERR) {
    Serial.println("Error writing to flash");
    return p;
  } else {
    Serial.println("Unknown error");
    return p;
  }

Serial.println("");
Serial.println("");
return true;
}



void deleteDatabase(){
Serial.println("Do you want to delete all fingerprint templates!");
Serial.println("Press 'Y' key to continue");
while (1) {
    if (Serial.available() && (Serial.read() == 'Y')) {
      break;
    }
  }
finger.emptyDatabase();
Serial.println("Now the database is empty.)");
Serial.println("");
Serial.println("");
}