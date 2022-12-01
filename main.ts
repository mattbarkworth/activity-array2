function Randomise () {
    for (let index = 0; index <= 24; index++) {
        options[index] = randint(0, 255)
    }
}
input.onButtonPressed(Button.A, function () {
    Randomise()
    Display()
})
function Display () {
    for (let index2 = 0; index2 <= 24; index2++) {
        led.plotBrightness(index2 % 5, index2 / 5, options[index2])
    }
}
function wait (seconds: number) {
    seconds *= 500000
control.waitMicros(seconds)
}
function Reverse () {
    for (let index3 = 0; index3 <= 24; index3++) {
        options.reverse()
        led.plotBrightness(index3 % 5, index3 / 5, options[index3])
    }
}
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 5; index++) {
        wait(1)
        for (let index = 0; index < 5; index++) {
            wipe()
        }
        Display()
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        Reverse()
        wait(1)
    }
})
function wipe () {
    for (let index5 = 0; index5 <= options.length - 2; index5++) {
        options[index5] = options[index5 + 1]
    }
    options[options.length - 1] = 0
}
let options: number[] = []
options = [
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0
]
