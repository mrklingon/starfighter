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
function doAsteroid () {
    Ast = game.createSprite(4, randint(0, 4))
    Ast.turn(Direction.Right, 180)
    for (let index = 0; index < 4; index++) {
        Ast.move(1)
        if (Ast.isTouching(Sf)) {
            Ast.delete()
            game.removeLife(1)
        }
        basic.pause(150)
    }
    Ast.delete()
}
function shoot () {
    bolt = game.createSprite(Sf.get(LedSpriteProperty.X), Sf.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        bolt.change(LedSpriteProperty.X, 1)
        if (bolt.isTouching(Ast)) {
            Ast.delete()
            game.addScore(5)
        }
        basic.pause(100)
    }
    bolt.delete()
}
input.onButtonPressed(Button.B, function () {
    shoot()
})
input.onGesture(Gesture.Shake, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    Droid += 1
    if (1 < Droid) {
        Droid = 0
    }
})
function SetHeight (Spd: number) {
    Sf.set(LedSpriteProperty.Y, 4 - Spd)
}
let B3: game.LedSprite = null
let B2: game.LedSprite = null
let B1: game.LedSprite = null
let bolt: game.LedSprite = null
let Ast: game.LedSprite = null
let Droid = 0
let Speed = 0
let Sf: game.LedSprite = null
Sf = game.createSprite(1, 3)
Speed = 1
images.createBigImage(`
    . . . . . . # # # #
    . . . . . # # # . .
    . . # # # # . # # #
    . . . . . # # # . .
    . . . . . . # # # #
    `).scrollImage(1, 200)
images.createBigImage(`
    . . . . . # . . . .
    . # . . . . . . . .
    . . . . . . . . . .
    . . . . # . . . . .
    . . . . . . . . . .
    `).scrollImage(1, 200)
game.setLife(3)
Droid = 0
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
    if (Droid == 1) {
        for (let index = 0; index < 4; index++) {
            dospeed()
        }
        for (let index = 0; index < 10; index++) {
            shoot()
        }
        basic.pause(100)
    }
})
basic.forever(function () {
    basic.pause(2000)
    if (Speed > 1) {
        Speed += -1
        SetHeight(Speed)
    }
})
basic.forever(function () {
    basic.pause(500 * randint(1, 4))
    doAsteroid()
})
