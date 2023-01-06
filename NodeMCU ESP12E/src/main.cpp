#include <Arduino.h>
#include <Adafruit_Fingerprint.h>
#include <SoftwareSerial.h>

SoftwareSerial mySerial(13, 15);
Adafruit_Fingerprint finger = Adafruit_Fingerprint(&mySerial);

void setup()
{
  Serial.begin(115200);
  delay(100);
  Serial.println("\n\nFingerprint sensor enrollment");

  finger.begin(57600); // set the data rate for the sensor serial port

  if (finger.verifyPassword())
  {
    Serial.println("Found fingerprint sensor!");
  }
  else
  {
    Serial.println("Did not find fingerprint sensor :(");
    while (1)
    {
      delay(1);
    }
  }
}

void loop()
{
  int id = 1;
  Serial.println("Place finger on sensor to register");
  int p = -1;

  Serial.print("Waiting for valid finger to enroll as #");
  while (p != FINGERPRINT_OK)
  {
    p = finger.getImage();
    switch (p)
    {
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

    p = finger.image2Tz(2);
    switch (p)
    {
    case FINGERPRINT_OK:
      Serial.println("Image converted");
      break;
    case FINGERPRINT_IMAGEMESS:
      Serial.println("Image too messy");
      break;
    case FINGERPRINT_PACKETRECIEVEERR:
      Serial.println("Communication error");
      break;
    case FINGERPRINT_FEATUREFAIL:
      Serial.println("Could not find fingerprint features");
      break;
    case FINGERPRINT_INVALIDIMAGE:
      Serial.println("Could not find fingerprint features");
      break;
    default:
      Serial.println("Unknown error");
      break;
    }

    Serial.print("Creating model for #");
    Serial.println(id);
    p = finger.createModel();
    if (p == FINGERPRINT_OK)
    {
      Serial.println("Prints matched!");
    }
    else if (p == FINGERPRINT_PACKETRECIEVEERR)
    {
      Serial.println("Communication error");
      // return p;
    }
    else if (p == FINGERPRINT_ENROLLMISMATCH)
    {
      Serial.println("Fingerprints did not match");
      // return p;
    }
    else
    {
      Serial.println("Unknown error");
      // return p;
    }

    p = finger.storeModel(id);
  }
}