
MainGame.LoaderState = function(game) {
	this._continue = Date.now()
};

// for Google fonts
WebFontConfig = {

    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.
    // active: function() { game.time.events.add(Phaser.Timer.SECOND, createText, this); },

    //  The Google Fonts we want to load (specify as many as you like in the array)
    google: {
      families: ['Revalia',
                 'Source Sans Pro',
                 'Covered By Your Grace']
    }

};

MainGame.LoaderState.prototype = {
	
	preload: function(){

		var spinner = this.add.sprite(512, 384, 'spinner');
		spinner.anchor.setTo(0.5, 0.5);
		spinner.animations.add('spin', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
		spinner.animations.play('spin');
		
		// more google font loading
		this.game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

		var resources = MainGame.resources;

		//load all game assets!

		//IMAGES
		for( var i = 0; i < resources.LoaderState.images.length; i++ ){
			var obj = resources.LoaderState.images[i];
			this.game.load.image(obj.name, obj.path);
		}

		//SPRITESHEETS
		for( var i = 0; i < resources.LoaderState.spritesheets.length; i++ ){
			var obj = resources.LoaderState.spritesheets[i];
			if(obj.tiles == -1){
				this.game.load.spritesheet(obj.name, obj.path, obj.width, obj.height);
			}
			else{
				this.game.load.spritesheet(obj.name, obj.path, obj.width, obj.height, obj.tiles);
			}
		}

		//texturePacker
		for(var i = 0; i < resources.LoaderState.texturePacker.length; i++){
			var obj = resources.LoaderState.texturePacker[i];
			this.game.load.atlasJSONHash(obj.name, obj.sspath, obj.jsonpath);
		}

		//TILEMAPS
		for( var i = 0; i < resources.LoaderState.tilemaps.length; i++ ){
			var obj = resources.LoaderState.tilemaps[i];
			this.game.load.tilemap(obj.name, obj.path, null, Phaser.Tilemap.TILED_JSON);
		}

		//SOUNDS
		for( var i = 0; i < resources.LoaderState.audio.length; i++ ){
			var obj = resources.LoaderState.audio[i];
			this.game.load.audio(obj.name, obj.path);
		}
	},

	update: function(){

		if(Date.now() > this._continue){
			this.game.state.start('MainMenu');
			//this.game.state.start('Game');
		}
	}
};