
MainGame.GameState = function(game){
	this.game = game;
};

MainGame.GameState.prototype = {
	
	create: function(){

		this.game.map = this.game.add.tilemap('map1');
		this.game.map.addTilesetImage('A1');
		this.game.map.addTilesetImage('A2');
		this.game.map.addTilesetImage('B');
		this.game.map.addTilesetImage('C');
		this.game.map.addTilesetImage('D');


		this.game.water = this.game.map.createLayer(0);
		this.game.water.resizeWorld();

		this.game.sand = this.game.map.createLayer(1);
		this.game.sand.resizeWorld();

		this.game.rocksNstuff = this.game.map.createLayer(2);
		this.game.rocksNstuff.resizeWorld();
		
		this.game.creepRoute = this.game.map.createLayer(3);
		this.game.creepRoute.resizeWorld();
		
		this.game.dock = this.game.add.sprite(918, 13, 'enemyship1', 'dock.png');
		this.game.turretGroup = this.game.add.group();
		

		this.game.camera.setPosition(800, 300);

		//wavenumber scroll
		this.game.waveScroll = this.game.add.group();
		this.game.scroll = this.game.add.sprite(800, 30, 'scroll', 'justscroll.png');
		this.game.scroll.scale.setTo(0.6, 0.6);
		this.game.scroll2 = this.game.add.sprite(830, 720, 'scroll', 'justscroll.png');
		this.game.scroll2.scale.setTo(0.6, 0.6);
		this.game.scroll3 = this.game.add.sprite(410, 30, 'scroll', 'justscrollsmall.png');
		this.game.scroll3.scale.setTo(0.6, 0.6);
		//var anim = this.game.scroll.animations.add('unroll', ['scroll_08.png', 'scroll_07.png', 'scroll_06.png', 'scroll_05.png', 'scroll_04.png', 'scroll_03.png', 'scroll_02.png', 'scroll_01.png'], 8, false, false);
		//this.game.scroll.animations.play('unroll');
		this.game.waveScroll.add(this.game.scroll);
		this.game.waveScroll.add(this.game.scroll2);
		this.game.waveScroll.add(this.game.scroll3);
		//this.game.waveScroll.visible = true;



		//InputManager.setup();
		WaveManager.setup();
		GUIManager.setup();

		//this.game.input.mouse.requestPointerLock();
		
		//creepPath line
		this.game.creepPath = game.add.graphics(0,0);
		this.game.creepPath.lineStyle(5, 0xff0022, 1);
		this.game.creepPath.moveTo(340, 703);
		this.game.creepPath.lineTo(340, 141);
		this.game.creepPath.lineTo(600, 141);
		this.game.creepPath.lineTo(735, 497);
		this.game.creepPath.lineTo(875, 698);
		this.game.creepPath.lineTo(1106, 698);
		this.game.creepPath.lineTo(1106, 451);
		this.game.creepPath.lineTo(900, 56);
		this.game.creepPath.visible = false;



		
		this.game.turret_small_sfx = this.game.add.audio('turret_small_sfx');
		this.game.turret_small_sfx.volume = .05;
		this.game.turret_big_sfx = this.game.add.audio('turret_big_sfx');
		this.game.player_shoot_sfx = this.game.add.audio('player_shoot_sfx');
		this.game.player_shoot_sfx.volume = .2;
		this.game.baddie_die_sfx = this.game.add.audio('baddie_die_sfx');
		this.game.baddie_die_sfx.volume = .1;


		game.input.mouse.capture = true;
	},

	update: function(){

		InputManager.update();
		CollisionManager.update();
		WaveManager.update();
		GUIManager.update();
	
		
		//Check to see if we lose
		if(MainGame.piratesLeft <= 0)
		{
			this.game.state.states['GameOver'].win = false;
			console.log("got here");
			this.game.state.start('GameOver');
			console.log("got here");
		}
		
		
		//if we are currently placing a bought ship
		if(placingShip != null){
			       
	    	var curX = this.game.input.worldX;
			var curY = this.game.input.worldY;
		    placingShip.x = curX;
		    placingShip.y = curY;
			rangeCircle.x = curX - 150;
			rangeCircle.y = curY + placingShip.height;

		}


		//if we are currently placing a bought tower
		if(placingTower != null){
			       
	    	var curX = this.game.input.worldX;
			var curY = this.game.input.worldY;
		    placingTower.x = curX;
		    placingTower.y = curY;
		    rangeCircle.x = curX - 150;
			rangeCircle.y = curY + placingTower.height;

		}		
		
		//if we are currently placing a captian
		if(placingCaptain != null){
			placingCaptain.x = this.game.input.worldX - placingCaptain.width/2;
			placingCaptain.y = this.game.input.worldY - placingCaptain.height/2;
			
		}
		
		//if we are currently placing a gunner
		if(placingGunner != null){
			placingGunner.x = this.game.input.worldX - placingGunner.width/2;
			placingGunner.y = this.game.input.worldY - placingGunner.height/2;
			
		}
		
		//if we are currently placing a lookout
		if(placingLookout != null){
			placingLookout.x = this.game.input.worldX - placingLookout.width/2;
			placingLookout.y = this.game.input.worldY - placingLookout.height/2;
			
		}
		
	},

	render: function(){
		//debug info
		//this.game.debug.renderText(Phaser.VERSION, 32, 15);
		//this.game.debug.renderInputInfo(32, 32);
	    //map = this.game.map;
		//game.debug.renderText(map.getTileWorldXY(this.game.input.worldX, this.game.input.worldY, 32, 32, 0) != null, 32, 200);
		//game.debug.renderText("Mouse Button down: " + this.game.input.activePointer.isDown, 32, 170);
		//game.debug.renderText("Camera x: " + this.game.camera.x + " camera y:" + this.game.camera.y, 32, 196);
    	//game.debug.renderText("Middle Button: " + this.game.input.activePointer.middleButton.isDown, 300, 196);
    	//game.debug.renderText("Right Button: " + this.game.input.activePointer.rightButton.isDown, 300, 260);

	},
	



};

MainGame.serializeShips = function(){
	var shipjson = {};
	console.log("got here (MainGame.serializeShips1");
	
	for(var i = 0; i < shipList.length; i++){
		shipjson[i] = JSON.stringify(shipList[i].serialize());
		console.log("got here (MainGame.serializeShipsInLoop");
	}
	console.log("got here (MainGame.serializeShips2");
	return JSON.stringify(shipjson);
}

MainGame.serializeForSave = function() {
	var saveObject = {};
	saveObject.player = JSON.stringify(MainGame);
	saveObject.ships = MainGame.serializeShips();
	//console.log(JSON.stringify(saveObject));
	return JSON.stringify(saveObject);
};