#include <Arduino.h>

#if defined(ESP32)
#include <WiFi.h>
#elif defined(ESP8266)
#include <ESP8266WiFi.h>
#endif

#include <Firebase_ESP_Client.h>

// Provide the token generation process info.
#include <addons/TokenHelper.h>

/* 1. Define the WiFi credentials */
#define WIFI_SSID "Galaxy M02s5656"
#define WIFI_PASSWORD "hiru2857756"

/* 2. Define the API Key */
#define API_KEY "AIzaSyAg72CAX2SWsYzmN0B9NxYAHnE_oFgijVU"

/* 3. Define the project ID */
#define FIREBASE_PROJECT_ID "co300project"

/* 4. Define the user Email and password that alreadey registerd or added in your project */
#define USER_EMAIL "e18368@eng.pdn.ac.lk"
#define USER_PASSWORD "abcd1234"

// Define Firebase Data object
FirebaseData fbdo;

FirebaseAuth auth;
FirebaseConfig config;

unsigned long dataMillis = 0;
int count = 0;

void setup()
{

    Serial.begin(115200);

    WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
    Serial.print("Connecting to Wi-Fi");
    while (WiFi.status() != WL_CONNECTED)
    {
        Serial.print(".");
        delay(300);
    }
    Serial.println();
    Serial.print("Connected with IP: ");
    Serial.println(WiFi.localIP());
    Serial.println();

    Serial.printf("Firebase Client v%s\n\n", FIREBASE_CLIENT_VERSION);

    /* Assign the project host and api key (required) */
    config.api_key = API_KEY;

    /* Assign the user sign in credentials */
    auth.user.email = USER_EMAIL;
    auth.user.password = USER_PASSWORD;

    /* Assign the callback function for the long running token generation task */
    config.token_status_callback = tokenStatusCallback; // see addons/TokenHelper.h

#if defined(ESP8266)
    // In ESP8266 required for BearSSL rx/tx buffer for large data handle, increase Rx size as needed.
    fbdo.setBSSLBufferSize(2048 /* Rx buffer size in bytes from 512 - 16384 */, 2048 /* Tx buffer size in bytes from 512 - 16384 */);
#endif

    // Limit the size of response payload to be collected in FirebaseData
    fbdo.setResponseSize(2048);

    Firebase.begin(&config, &auth);

    Firebase.reconnectWiFi(true);
}

void loop()
{

    // Firebase.ready() should be called repeatedly to handle authentication tasks.

    if (Firebase.ready() && (millis() - dataMillis > 60000 || dataMillis == 0))
    {
        dataMillis = millis();

        Serial.print("Query a Firestore database... ");

        // If you have run the CreateDocuments example, the document b0 (in collection a0) contains the document collection c0, and
        // c0 contains the collections d?.

        // The following query will query at collection c0 to get the 3 documents in the payload result with descending order.

        // For the usage of FirebaseJson, see examples/FirebaseJson/BasicUsage/Create.ino
        FirebaseJson query;

        query.set("select/fields/[0]/fieldPath", "myDouble");
        query.set("select/fields/[1]/fieldPath", "myInteger");
        // query.set("select/fields/[2]/fieldPath", "myTimestamp");

        query.set("from/collectionId", "c0");
        query.set("from/allDescendants", false);
        query.set("orderBy/field/fieldPath", "myInteger");
        query.set("orderBy/direction", "DESCENDING");
        query.set("limit", 3);

        // The consistencyMode and consistency arguments are not assigned
        // The consistencyMode is set to fb_esp_firestore_consistency_mode_undefined by default.
        // The arguments is the consistencyMode value, see the function description at
        // https://github.com/mobizt/Firebase-ESP-Client/tree/main/src#runs-a-query

        if (Firebase.Firestore.runQuery(&fbdo, FIREBASE_PROJECT_ID, "" /* databaseId can be (default) or empty */, "a0/b0" /* The document path */, &query /* The FirebaseJson object holds the StructuredQuery data */))
            Serial.printf("ok\n%s\n\n", fbdo.payload().c_str());
        else
            Serial.println(fbdo.errorReason());
    }
}