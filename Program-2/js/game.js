var game = new Phaser.Game(500, 340, Phaser.AUTO, 'gameDiv');

game.global = {
    score: 0
};

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.camera.flash(0xffffff, 300);
game.state.start('boot');
game.camera.shake(0.02, 300);

playerDie: function() {
    // Kill the player to make it disappear from the screen
    this.player.kill();
    // Start the sound and the particles
    this.deadSound.play();
    this.emitter.x = this.player.x;
    this.emitter.y = this.player.y;
    this.emitter.start(true, 800, null, 15);

    // Call the 'startMenu' function in 1000ms
    game.time.events.add(1000, this.startMenu, this);
},