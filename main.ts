input.onGesture(Gesture.Shake, function () {
    Dice = randint(0, 10)
    basic.showNumber(Dice)
    if (Math.randomBoolean()) {
        max7219_matrix.for_4_in_1_modules(
        rotation_direction.clockwise,
        false
        )
        max7219_matrix.scrollText(
        "Forward",
        75,
        500
        )
    } else {
        max7219_matrix.for_4_in_1_modules(
        rotation_direction.clockwise,
        true
        )
        max7219_matrix.scrollText(
        "Backward",
        75,
        500
        )
    }
})
let Dice = 0
max7219_matrix.setup(
4,
DigitalPin.P0,
DigitalPin.P1,
DigitalPin.P14,
DigitalPin.P2
)
