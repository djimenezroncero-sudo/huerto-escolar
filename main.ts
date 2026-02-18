let humedad = 0
let strip = neopixel.create(DigitalPin.P16, 8, NeoPixelMode.RGB)
motor.servo(motor.Servos.S1, 90)
basic.forever(function () {
    humedad = pins.analogReadPin(AnalogPin.P0)
    // Mucha humedad. No riego. LED roja.
    // Humedad media. Riego un poco. LED amarillo.
    if (humedad < 600) {
        motor.servo(motor.Servos.S1, 90)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (humedad >= 600 && humedad <= 900) {
        motor.servo(motor.Servos.S1, 120)
        basic.pause(1000)
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else {
        motor.servo(motor.Servos.S1, 180)
        basic.pause(2000)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    strip.show()
})
