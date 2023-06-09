let 기울임 = 0
radio.setGroup(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        기울임 = input.acceleration(Dimension.X) / 17
        if (기울임 >= -15 && 기울임 <= 15) {
            radio.sendValue("forward", 15)
        } else {
            radio.sendValue("forward", 기울임)
        }
    } else if (input.buttonIsPressed(Button.B)) {
        기울임 = input.acceleration(Dimension.X) / 17
        if (기울임 >= -15 && 기울임 <= 15) {
            radio.sendValue("backward", 15)
        } else {
            radio.sendValue("backward", 기울임)
        }
    } else {
        radio.sendValue("stop", 0)
    }
})
