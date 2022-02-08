input.onButtonPressed(Button.A, function () {
    dospeed()
})
function dospeed () {
    Speed += 1
    if (Speed > 4) {
        Speed = 4
    }
    SetHeight(Speed)
}
function SetHeight (Spd: number) {
    Sf.set(LedSpriteProperty.Y, 4 - Spd)
}
let B3: game.LedSprite = null
let B2: game.LedSprite = null
let B1: game.LedSprite = null
let Speed = 0
let Sf: game.LedSprite = null
Sf = game.createSprite(1, 3)
Speed = 1
basic.forever(function () {
    B1 = game.createSprite(0, 4)
    B2 = game.createSprite(2, 4)
    B3 = game.createSprite(4, 4)
    basic.pause(500 / Speed)
    B1.delete()
    B2.delete()
    B3.delete()
    B1 = game.createSprite(1, 4)
    B2 = game.createSprite(3, 4)
    basic.pause(500 / Speed)
    B1.delete()
    B2.delete()
})
basic.forever(function () {
    basic.pause(1000)
    if (Speed > 1) {
        Speed += -1
        SetHeight(Speed)
    }
})
