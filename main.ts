input.onButtonPressed(Button.A, function () {
    if (_switch == 0) {
        number1 += 1
        basic.showNumber(number1)
    }
    if (_switch == 1) {
        number2 += 1
        basic.showNumber(number2)
    }
})
input.onButtonPressed(Button.AB, function () {
    OP += 1
    if (OP == 0) {
        number2 += 1
        basic.showNumber(number2)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else {
        if (OP == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
            basic.pause(100)
            basic.clearScreen()
        } else {
            if (OP == 3) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
                basic.pause(100)
                basic.clearScreen()
            } else {
                if (OP == 4) {
                    basic.showLeds(`
                        . . # . .
                        . . . . .
                        # # # # #
                        . . . . .
                        . . # . .
                        `)
                    basic.pause(100)
                    basic.clearScreen()
                } else {
                    OP = 1
                    basic.showLeds(`
                        . . # . .
                        . . # . .
                        # # # # #
                        . . # . .
                        . . # . .
                        `)
                    basic.pause(100)
                    basic.clearScreen()
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    _switch += 1
    if (_switch == 2) {
        basic.showNumber(number1 + number2)
    }
})
let OP = 0
let _switch = 0
let number2 = 0
let number1 = 0
number1 = 0
number2 = 0
_switch = 0
