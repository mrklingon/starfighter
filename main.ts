let B3: game.LedSprite = null
let B2: game.LedSprite = null
let B1: game.LedSprite = null
let Sf = game.createSprite(1, 3)
let Speed = 1
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
