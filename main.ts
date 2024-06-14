input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showNumber(Tiredness)
    if (Tiredness == 9 || Tiredness == 8) {
        Tiredness = 0
    }
})
let Tiredness = 0
let Oldness = 0
let Happiness = 0
Tiredness = 0
music.play(music.builtinPlayableSoundEffect(soundExpression.twinkle), music.PlaybackMode.InBackground)
basic.showLeds(`
    . . # . .
    . # # # .
    # # # # #
    # # # # #
    . # # # .
    `)
basic.showLeds(`
    . . # . .
    . # # # .
    # # . # #
    # # # # #
    . # # # .
    `)
basic.showLeds(`
    . . # . .
    . # # # .
    # # . # #
    # . # # #
    . # # # .
    `)
basic.showLeds(`
    . . # . .
    . # # # .
    # # . # #
    # . # . #
    . # # # .
    `)
basic.showLeds(`
    . . # . .
    . . # # .
    # # . # #
    # . # . #
    . # # # .
    `)
basic.showLeds(`
    . . # . .
    . . # # .
    # # . # #
    # . # . #
    . # . # .
    `)
basic.showLeds(`
    . . # . .
    . . # # .
    . # . # #
    # . # . #
    . # . # .
    `)
basic.showLeds(`
    . . # . .
    . . # # .
    . # . # .
    # . # . #
    . # . # .
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . # . # .
    # . # . #
    . # . # .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . # . # .
    # . # . #
    . # . # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . # . # .
    # . # . #
    . # . # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . # . # .
    . . # . #
    . # . # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . # # # .
    . . # . .
    . # . # .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . # # # .
    . . # . .
    . # . # .
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . # # # .
    . . # . .
    . # . # .
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . # # # #
    . . # . .
    . # . # .
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . # . # .
    `)
basic.showString("Hello!")
basic.showString("Im Tipsy")
loops.everyInterval(60000, function () {
    Happiness += -1
    Tiredness += 1
})
control.inBackground(function () {
    if (Oldness == 3600000) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.InBackground)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funeral), music.PlaybackMode.InBackground)
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Skull)
            basic.showLeds(`
                . # # # .
                # . # . #
                # # # # #
                . # # # .
                . # . # .
                `)
        }
    }
    if (Happiness == 100) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
        music.play(music.builtinPlayableSoundEffect(soundExpression.soaring), music.PlaybackMode.InBackground)
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.Target)
        basic.showIcon(IconNames.Chessboard)
    }
    if (Happiness == -10) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Blues), music.PlaybackMode.InBackground)
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.InBackground)
        basic.showIcon(IconNames.Sad)
        basic.showIcon(IconNames.Confused)
        basic.showIcon(IconNames.Sad)
        basic.showIcon(IconNames.Angry)
    }
    if (Tiredness == 10) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.mysterious), music.PlaybackMode.InBackground)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Blues), music.PlaybackMode.InBackground)
        basic.showIcon(IconNames.Asleep)
        basic.showLeds(`
            . . . . .
            . # . # .
            # . . . #
            . . # . .
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . # .
            # . . . #
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # . # #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # . # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (Oldness == 648000) {
        basic.showString("Hey Your Mates 18")
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            . # . # .
            `)
    }
})
loops.everyInterval(1, function () {
    Oldness += 1
})
