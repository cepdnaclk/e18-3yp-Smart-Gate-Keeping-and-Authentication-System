#include <Arduino.h>
#include <Adafruit_Fingerprint.h>



Adafruit_Fingerprint finger = Adafruit_Fingerprint(&Serial);


void setup() {
  Serial.begin(9600);
  while (!Serial);
  finger.begin(57600);
}




void loop() {
  // Check if a finger is placed on the sensor
  uint8_t p = finger.getImage();
  if (p != FINGERPRINT_OK) return;

  // Image taken, convert it to feature template
  p = finger.image2Tz();
  if (p != FINGERPRINT_OK) return;

  // Check if the user wants to register a new fingerprint
  if (Serial.available() && Serial.read() == 'r') {
    // Add the fingerprint template to the database
    p = finger.storeModel(1);
    if (p != FINGERPRINT_OK) return;
    Serial.println("Fingerprint registered!");
  } else {
    // Identify the fingerprint against the database
    uint8_t id = finger.fingerFastSearch();
    if (id < 256) {
      Serial.println("Fingerprint recognized, ID: " + String(id));
    } else {
      Serial.println("Fingerprint not recognized");
    }
  }
}
