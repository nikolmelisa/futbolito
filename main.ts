radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(input.rotation(Rotation.Roll))
})
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) > 60) {
        radio.sendString("CHUT")
    }
})
