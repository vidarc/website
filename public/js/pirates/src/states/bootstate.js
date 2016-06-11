
var MainGame = {
	gold: 500,
	wave: 0,
	piratesLeft: 100,	//starts at full health
	turrets: [],
	ships: [],
	loaded: false,
	crewSpace: 0,
	captainSpace: 0,
	wavekills: 0,
	wavecreeps: 0,
	waveshots: 0,
	wavehits: 0,
	goldMultiplier: 1,
	costMultiplier: 1,
	cost: {
    	sloop: 100,
    	clipper: 500,
    	frigate: 1000,
    	tower: 250,
    	fortress: 750,
    	captain: 400,
    	gunner: 200,
    	lookout: 150
	},
	rewards: {
		rowboat: 15,
    	smallSail: 20,
    	midSail: 25,
    	sunSail: 30,
		midBossWhite: 120,
		midBossBlack: 160,
		bigBoss: 500,
		blimp: 50,
	},
	paused: false,
	inBetween: false,
};

//Global variables
var placingShip = null;		//are we currently placing a ship?
var placingTower = null;	//are we currently placing a tower?
var placingCaptain = null;  //are we currently placing a captian?
var placingGunner = null;   //are we currently placing a gunner?
var placingLookout = null;  //are we currently placing a lookout?
var stats = null;			//text item to display tower/ship stats
var rangeCircle;
var shipList = [];
var statGroup;

MainGame.BootState = function(game){

};

MainGame.BootState.prototype = {

	preload: function(){
		//load any assets needed for the LoaderState
		for( var i = 0; i < MainGame.resources.BootState.spritesheets.length; i++ ){
			var obj = MainGame.resources.BootState.spritesheets[i];
			this.game.load.spritesheet(obj.name, obj.path, obj.width, obj.height);
		}

	},

	create: function(){

		this.game.keys 			= {};
		this.game.keys.WAVE  	= game.input.keyboard.addKey(Phaser.Keyboard.W);
		this.game.keys.BUILD 	= game.input.keyboard.addKey(Phaser.Keyboard.B);
		this.game.keys.RECRUIT 	= game.input.keyboard.addKey(Phaser.Keyboard.R);
		this.game.keys.UP 		= game.input.keyboard.addKey(Phaser.Keyboard.Q);
		this.game.keys.DOWN 	= game.input.keyboard.addKey(Phaser.Keyboard.S);
		this.game.keys.LEFT 	= game.input.keyboard.addKey(Phaser.Keyboard.A);
		this.game.keys.RIGHT 	= game.input.keyboard.addKey(Phaser.Keyboard.D);
		this.game.keys.REMOVE     = game.input.keyboard.addKey(Phaser.Keyboard.R);

		this.game.keys.DEBUG     = game.input.keyboard.addKey(Phaser.Keyboard.P);
		this.game.stage.backgroundColor = '0bb4f4';
		this.game.state.start('Loader');
	}
};
