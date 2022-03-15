namespace SpriteKind {
    export const coin = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    music.powerDown.play()
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    music.baDing.play()
    game.over(true)
    effects.confetti.endScreenEffect()
})
scene.setBackgroundColor(12)
tiles.setCurrentTilemap(tilemap`level1`)
let myCorg = corgio.create(SpriteKind.Player)
myCorg.updateSprite()
myCorg.verticalMovement()
myCorg.horizontalMovement()
myCorg.follow()
let myEnemy = 0
info.setLife(3)
info.startCountdown(20)
