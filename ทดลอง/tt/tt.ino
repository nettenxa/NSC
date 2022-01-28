#define Button 16 // Button Input

int buttonState = 0;
int alert = 0;
int returnAlert = 0;
int returnTime = 0;

void setup()
{
  pinMode(Button, INPUT);
  Serial.begin(38400);


}
void loop()
{
  // Switch //
  buttonState = digitalRead(Button);
  if (buttonState == 1) {
    Serial.println("Click");
    alert += 1;
    delay(1000);
    if (alert > 4) { // start = 0 end = 5 : alert = 5
      Serial.println("Net");
      returnAlert = 1;
    }
  }
  else {
    Serial.println(alert);
    alert = 0;
  }
  // END-Switch //
}
