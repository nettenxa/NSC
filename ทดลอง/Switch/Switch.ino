int buttonPin = D0;
int buttonState = 0;
void setup()
{
  pinMode(buttonPin, INPUT);// กำหนดขาทำหน้าที่ให้ขา D1 เป็น INPUT รับค่าจากสวิตช์
  Serial.begin(38400);
}
void loop()
{
  buttonState = digitalRead(buttonPin); // อ่านค่าสถานะขาD0
  if (buttonState == HIGH) { //กำหนดเงื่อนไขถ้าตัวแปล buttonState เก็บ ค่า 1(HIGH) ให้ทำในปีกกา
//    digitalWrite(led1, HIGH); // ไฟ LED 1ติด
//    Serial.print("LED : ");
    Serial.println("Click");
  }
  else { //ถ้าตัวแปล buttonState ไม่ได้เก็บ ค่า 1(HIGH) คือ ตัวแปล buttonState เก็บค่า 0(LOW) อยู่ ให้ทำปีกกาข้างล่าง
//    digitalWrite(led1, LOW); // ไฟ LED 1ดับ
//    Serial.print("LED : ");
    Serial.println("Don't Click");
  }
}
