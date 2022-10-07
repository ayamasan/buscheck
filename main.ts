bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Square)
    チェック = 0
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Fullstop), function () {
    コマンド = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Fullstop))
    if (コマンド == "OK") {
        チェック = 1
    }
})
input.onButtonPressed(Button.B, function () {
    チェック = 1
})
let コマンド = ""
let チェック = 0
bluetooth.startUartService()
basic.showIcon(IconNames.Square)
チェック = 0
loops.everyInterval(1000, function () {
    if (チェック != 0) {
        music.playTone(659, music.beat(BeatFraction.Half))
    }
})
basic.forever(function () {
    if (チェック != 0) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.clearScreen()
    }
})
