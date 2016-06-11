/* global MainGame */

var buyShipsButton;
var buyCrewButton;
var shipGroup;
var crewGroup;
var goldText;
var healthText;
var waveText;
var bgMusic;

function HUD(game){
	
	this.game = game;
	Phaser.Group.call(this, this.game, null, "hud");
	this.offsetX = 10;
	this.offsetY = 10;
	
	// Text labels for gold and anything else
	goldText = this.game.add.text(870, 743, "Gold: " + MainGame.gold, {
		font: "25px almendraregular",
		fill: "#000000",
		align: "center"
	});
	this.game.waveScroll.add(goldText);
	
	healthText = this.game.add.text(840, 52, "Pirates Left: " + MainGame.piratesLeft, {
		font: "24px almendraregular",
		fill: "#000000",
		align: "center"
	});
	this.game.waveScroll.add(healthText);
	
	waveText = this.game.add.text(450, 52, "Wave " + (MainGame.wave + 1),{
		font: "25px almendraregular",
		fill: "#00000",
		align: "center"
	});
	this.game.waveScroll.add(waveText);
	// create the loop

	// adding the buttons
	buyShipsButton = this.game.add.button(1075, 700, 'buy_ships', showShips, this);
	buyCrewButton = this.game.add.button(1175, 700, 'buy_crew', showCrew, this);
//	this.pause_button = new Phaser.Button(this.game, 645, 700, 'pause_button',pau this.readyWave, this, 1, 0, 0);
//	this.add(this.ready_btn)	
	var pause_button = new Phaser.Button(this.game, 280, 700, 'pause_button', pause, this, 1, 0, 0);
	this.game.add.existing(pause_button);
	
	var mute = new Phaser.Button(this.game, 355, 700, 'music_off', mute_song, this, 1, 0, 0);
	this.game.add.existing(mute);
	
	var style = { font: "bold 13px almendraregular", fill: "#000000" };
	// make the menus
	// ship menu
	shipGroup = this.game.add.group();
	shipGroup.create(850, 340, 'menu_bg');
	// ship 1
	this.ship1 = this.game.add.button(950, 445, 'ship1button', buySloop, this);
	this.ship1text = this.game.add.text(985, 445, 'Buy a Sloop (' + Math.round((MainGame.cost.sloop * MainGame.costMultiplier)) + ' gold)  Hotkey: "1"', style);
	shipGroup.add(this.ship1);
	shipGroup.add(this.ship1text);
	// ship 2
	this.ship2 = this.game.add.button(950, 480, 'ship2button', buyClipper, this);
	this.ship2text = this.game.add.text(985, 480, 'Buy a Clipper (' + Math.round((MainGame.cost.clipper * MainGame.costMultiplier)) + ' gold) HotKey: "2"', style);
	shipGroup.add(this.ship2);
	shipGroup.add(this.ship2text);
	// ship 2
	this.ship3 = this.game.add.button(950, 515, 'ship3button', buyFrigate, this);
	this.ship3text = this.game.add.text(985, 515, 'Buy a Frigate (' + Math.round((MainGame.cost.frigate * MainGame.costMultiplier)) + ' gold) HotKey: "3"', style);
	shipGroup.add(this.ship3);
	shipGroup.add(this.ship3text);
	// ship 4
	this.ship4 = this.game.add.button(950, 550, 'tower1button', buyTower, this);
	this.ship4text = this.game.add.text(985, 550, 'Buy a Tower (' + Math.round((MainGame.cost.tower * MainGame.costMultiplier)) + ' gold) HotKey: "4"', style);
	shipGroup.add(this.ship4);
	shipGroup.add(this.ship4text);
	// ship 5
	this.ship5 = this.game.add.button(950, 585, 'tower2button', buyFortress, this);
	this.ship5text = this.game.add.text(985, 585, 'Buy a Fortress (' + Math.round((MainGame.cost.fortress * MainGame.costMultiplier)) + ' gold) HotKey: "5"', style);
	shipGroup.add(this.ship5);
	shipGroup.add(this.ship5text);
	// set the whole thing to invisible
	shipGroup.visible = false;
	
	// crew menu
	crewGroup = this.game.add.group();
	crewGroup.create(850, 340, 'menu_bg');
	// crew 1
	this.crew1 = this.game.add.button(950, 445, 'captain', buyCaptain, this);
	this.crew1text = this.game.add.text(985, 445, 'Hire a Captain (' + Math.round((MainGame.cost.captain * MainGame.costMultiplier)) + ' gold) HotKey: "6"', style);
	crewGroup.add(this.crew1);
	crewGroup.add(this.crew1text);
	// crew 2
	this.crew2 = this.game.add.button(950, 480, 'gunner', buyGunner, this);
	this.crew2text = this.game.add.text(985, 480, 'Hire a Gunner (' + Math.round((MainGame.cost.gunner * MainGame.costMultiplier)) + ' gold) HotKey: "7"', style);
	crewGroup.add(this.crew2);
	crewGroup.add(this.crew2text);
	// crew 3
	this.crew3 = this.game.add.button(950, 515, 'lookout', buyLookout, this);
	this.crew3text = this.game.add.text(985, 515, 'Hire a Lookout (' + Math.round((MainGame.cost.lookout * MainGame.costMultiplier)) + ' gold) HotKey: "8"', style);
	crewGroup.add(this.crew3);
	crewGroup.add(this.crew3text);
	this.keyboardText = this.game.add.text(985, 540, 'Keyboard shortcuts: ', style);
	this.keyboardText1 = this.game.add.text(985, 565, '"B" to open ship Building menu' , style);
	this.keyboardText2 = this.game.add.text(985, 590, '"R" to open Crew Recruiting menu',style);
	this.keyboardText3 = this.game.add.text(985, 615, '"P" Pauses creeps and "C" cancels a purchase', style);
	crewGroup.add(this.keyboardText);
	crewGroup.add(this.keyboardText1);
	crewGroup.add(this.keyboardText2);
	crewGroup.add(this.keyboardText3);
	// set the whole thing to invisible
	crewGroup.visible = false;
	
	// music
	bgMusic = this.game.add.audio('game_music');
	bgMusic.volume = 0.25;
	bgMusic.play();
	
	// keyboard shortcuts
	var shipKey = this.game.input.keyboard.addKey(Phaser.Keyboard.B);
    shipKey.onDown.add(showShips, this);
    var crewKey = this.game.input.keyboard.addKey(Phaser.Keyboard.R);
    crewKey.onDown.add(showCrew, this);
    var pauseKey = this.game.input.keyboard.addKey(Phaser.Keyboard.P);
    pauseKey.onDown.add(pause, this);
    var sloop = this.game.input.keyboard.addKey(Phaser.Keyboard.ONE);
    sloop.onDown.add(buySloop, this);
    var clipper = this.game.input.keyboard.addKey(Phaser.Keyboard.TWO);
    clipper.onDown.add(buyClipper, this);
    var frigate = this.game.input.keyboard.addKey(Phaser.Keyboard.THREE);
    frigate.onDown.add(buyFrigate, this);
    var tower = this.game.input.keyboard.addKey(Phaser.Keyboard.FOUR);
    tower.onDown.add(buyTower, this);
    var fortress = this.game.input.keyboard.addKey(Phaser.Keyboard.FIVE);
    fortress.onDown.add(buyFortress, this);
    var captain = this.game.input.keyboard.addKey(Phaser.Keyboard.SIX);
    captain.onDown.add(buyCaptain, this);
    var gunner = this.game.input.keyboard.addKey(Phaser.Keyboard.SEVEN);
    gunner.onDown.add(buyGunner, this);
    var lookout = this.game.input.keyboard.addKey(Phaser.Keyboard.EIGHT);
    lookout.onDown.add(buyLookout, this);
    var cancel = this.game.input.keyboard.addKey(Phaser.Keyboard.C);
    cancel.onDown.add(cancelPurchase, this);

	this.fixedToCamera = true;
}

HUD.prototype = Object.create(Phaser.Group.prototype);
HUD.prototype.constructor = HUD;

HUD.prototype.update = function () {
	this.game.world.bringToTop(buyShipsButton);
	this.game.world.bringToTop(buyCrewButton);
	this.game.time.events.add(250, MainGame.updateGold, this);
	healthText.setText('Pirates Left: ' + MainGame.piratesLeft);
	waveText.setText('Wave ' + (MainGame.wave + 1));
	
	if (MainGame.inBetween) {
		if (rangeCircle != null) {
			rangeCircle.destroy();
		}
	}
};

MainGame.updateGold = function () {
	goldText.setText('Gold: ' + MainGame.gold);
};



function pause(){
	MainGame.paused = !MainGame.paused;
	console.log("paused: " + MainGame.paused);
}

function cancelPurchase() {
	if (placingTower) {
		placingTower.destroy();
		rangeCircle.destroy();
	}
	if (placingShip) {
		placingShip.destroy();
		rangeCircle.destroy();
	}
	if (placingCaptain) {
		placingCaptain.destroy();
	}
	if (placingGunner) {
		placingGunner.destroy();
	}
	if (placingLookout) {
		placingLookout.destroy();
	}
	this.game.creepPath.visible = false;
}

function mute_song(){
	if(this.game.sound.mute == true)
	{this.game.sound.mute = false;}
	else{
		this.game.sound.mute = true;
	}
}
function showShips () {
	shipGroup.visible =! shipGroup.visible;
	
	
	this.game.world.bringToTop(shipGroup);
	
	if (crewGroup.visible) {
		crewGroup.visible = false;
	}
	if (placingTower) {
		placingTower.destroy();
		rangeCircle.destroy();
	}
	if (placingShip) {
		placingShip.destroy();
		rangeCircle.destroy();
	}
	if (placingGunner) {
		placingGunner.destroy();
	}
	if (placingLookout) {
		placingLookout.destroy();
	}
	if (placingCaptain) {
		placingCaptain.destroy();
	}
	this.game.creepPath.visible = false;
}

function showCrew () {
	crewGroup.visible =! crewGroup.visible;
	
	
	this.game.world.bringToTop(crewGroup);
	
	if (shipGroup.visible) {
		shipGroup.visible = false;
	}
	if (placingTower) {
		placingTower.destroy();
		rangeCircle.destroy();
	}
	if (placingShip) {
		placingShip.destroy();
		rangeCircle.destroy();
	}
	if (placingGunner) {
		placingGunner.destroy();
	}
	if (placingLookout) {
		placingLookout.destroy();
	}
	if (placingCaptain) {
		placingCaptain.destroy();
	}
	this.game.creepPath.visible = false;
}

function buySloop() {
	
	if(MainGame.gold < Math.round((MainGame.cost.sloop * MainGame.costMultiplier))){					//test if player has enough gold
		goldError();
	}
	else {									//have enough gold
		if (placingTower) {
			placingTower.destroy();
			rangeCircle.destroy();
		}
		if (placingShip) {
			placingShip.destroy();
			rangeCircle.destroy();
		}
		if (placingGunner) {
			placingGunner.destroy();
		}
		if (placingLookout) {
			placingLookout.destroy();
		}
		if (placingCaptain) {
			placingCaptain.destroy();
		}
		console.log("just bought a sloop!");
		var curX = this.game.input.worldX;
		var curY = this.game.input.worldY;
		placingShip = new Ship(this.game, {x:curX, y:curY}, 1);
		placingShip.anchor.setTo(0.5, 0.5);
		shipGroup.visible = false;
		rangeCircle = game.add.graphics(100, 100);
		rangeCircle.lineStyle(0);
		rangeCircle.beginFill(0x777777, 0.5);
		rangeCircle.drawCircle(placingShip.anchor.x + 257/2 - 10 + placingShip.width/2, placingShip.anchor.y - 40 - placingShip.height/2, placingShip.range);
		rangeCircle.endFill();
		this.game.creepPath.visible = true;
	}
}




function buyClipper() {
	
	if(MainGame.gold < Math.round((MainGame.cost.clipper * MainGame.costMultiplier))){					//test if player has enough gold
		goldError();
	}
	else{									//have enough gold
		if (placingTower) {
			placingTower.destroy();
			rangeCircle.destroy();
		}
		if (placingShip) {
			placingShip.destroy();
			rangeCircle.destroy();
		}
		if (placingGunner) {
			placingGunner.destroy();
		}
		if (placingLookout) {
			placingLookout.destroy();
		}
		if (placingCaptain) {
			placingCaptain.destroy();
		}
		console.log("just bought a clipper!");
		var curX = this.game.input.worldX;
		var curY = this.game.input.worldY;
		placingShip = new Ship(this.game, {x:curX, y:curY}, 2);
		shipGroup.visible = false;
		placingShip.anchor.setTo(0.5, 0.5);
		rangeCircle = game.add.graphics(100, 100);
		rangeCircle.lineStyle(0);
		rangeCircle.beginFill(0x777777, 0.5);
		rangeCircle.drawCircle(placingShip.anchor.x + 257/2 - 10 + placingShip.width/2, placingShip.anchor.y - 40 - placingShip.height/2, placingShip.range);
		rangeCircle.endFill();
		this.game.creepPath.visible = true;
	}
	
	
}

function buyFrigate() {
	
	if(MainGame.gold < Math.round((MainGame.cost.frigate * MainGame.costMultiplier))){					//test if player has enough gold
		goldError();
	}
	else{									//have enough gold
		if (placingTower) {
			placingTower.destroy();
			rangeCircle.destroy();
		}
		if (placingShip) {
			placingShip.destroy();
			rangeCircle.destroy();
		}
			if (placingGunner) {
			placingGunner.destroy();
		}
		if (placingLookout) {
			placingLookout.destroy();
		}
		if (placingCaptain) {
			placingCaptain.destroy();
		}
		console.log("just bought a frigate!");
		var curX = this.game.input.worldX;
		var curY = this.game.input.worldY;
		placingShip = new Ship(this.game, {x:curX, y:curY}, 3);
		shipGroup.visible = false;
		placingShip.anchor.setTo(0.5, 0.5);
		rangeCircle = game.add.graphics(100, 100);
		rangeCircle.lineStyle(0);
		rangeCircle.beginFill(0x777777, 0.5);
		rangeCircle.drawCircle(placingShip.anchor.x + 257/2 - 10 + placingShip.width/2, placingShip.anchor.y - 40 - placingShip.height/2, placingShip.range);
		rangeCircle.endFill();
		this.game.creepPath.visible = true;
	}
	
	
}

function buyTower() {
	
	if(MainGame.gold < Math.round((MainGame.cost.tower * MainGame.costMultiplier))){					//test if player has enough gold
		goldError();
	}
	else{									//have enough gold
		if (placingTower) {
			placingTower.destroy();
			rangeCircle.destroy();
		}
		if (placingShip) {
			placingShip.destroy();
			rangeCircle.destroy();
		}
		if (placingGunner) {
			placingGunner.destroy();
		}
		if (placingLookout) {
			placingLookout.destroy();
		}
		if (placingCaptain) {
			placingCaptain.destroy();
		}
		console.log("just bought a tower!");
		var curX = this.game.input.worldX;
		var curY = this.game.input.worldY;
		placingTower = new Turret(this.game, {x:curX, y:curY}, 1);
		shipGroup.visible = false;
		rangeCircle = game.add.graphics(100, 100);
		rangeCircle.lineStyle(0);
		rangeCircle.beginFill(0x777777, 0.5);
		rangeCircle.drawCircle(placingTower.world.x - 257/2 + placingTower.width/2, placingTower.world.y - 50 - placingTower.height/2, placingTower.range);
		rangeCircle.endFill();
		this.game.creepPath.visible = true;
	}
}

function buyFortress() {
	
	if(MainGame.gold < Math.round((MainGame.cost.fortress * MainGame.costMultiplier))){					//test if player has enough gold
		goldError();
	}
	else{									//have enough gold
		if (placingTower) {
			placingTower.destroy();
			rangeCircle.destroy();
		}
		if (placingShip) {
			placingShip.destroy();
			rangeCircle.destroy();
		}
		if (placingGunner) {
			placingGunner.destroy();
		}
		if (placingLookout) {
			placingLookout.destroy();
		}
		if (placingCaptain) {
			placingCaptain.destroy();
		}
		console.log("just bought a fortress!");
		var curX = this.game.input.worldX;
		var curY = this.game.input.worldY;
		placingTower = new Turret(this.game, {x:curX, y:curY}, 2);
		shipGroup.visible = false;
		rangeCircle = game.add.graphics(100, 100);
		rangeCircle.lineStyle(0);
		rangeCircle.beginFill(0x777777, 0.5);
		rangeCircle.drawCircle(placingTower.world.x - 257/2 + placingTower.width/2, placingTower.world.y - 50 - placingTower.height/2, placingTower.range);
		rangeCircle.endFill();
		this.game.creepPath.visible = true;
	}
}

function buyCaptain() {

	if(MainGame.gold < Math.round((MainGame.cost.captain * MainGame.costMultiplier))){
		goldError();
	}
	else{
		if (placingGunner) {
			placingGunner.destroy();
		}
		if (placingCaptain) {
			placingCaptain.destroy();
		}
		if (placingLookout) {
			placingLookout.destroy();
		}
		if (placingShip){ placingShip.destroy();  rangeCircle.destroy();}
		if (placingTower){ placingTower.destroy();  rangeCircle.destroy();}
		else if(MainGame.captainSpace < 1){
			printError("There are no available ships or towers without Captains");
		}
		else{
			var curX = this.game.input.worldX;
			var curY = this.game.input.worldY;
			placingCaptain =  game.add.sprite(curX, curY, "captain_lg");
		}
		crewGroup.visible = false;
	}
}

function buyGunner() {
	
	if(MainGame.gold < Math.round((MainGame.cost.gunner * MainGame.costMultiplier))){
		goldError();
	}
	else{
		if (placingCaptain) {
			placingCaptain.destroy();
		}
		if (placingLookout) {
			placingLookout.destroy();
		}
		if (placingGunner) {
			placingGunner.destroy();
		}
		if (placingShip){ placingShip.destroy();  rangeCircle.destroy();}
		if (placingTower){ placingTower.destroy();  rangeCircle.destroy();}
		else if(MainGame.crewSpace < 1){
			printError("There are no open crew slots on any ship or tower.");
		}
		else{
			var curX = this.game.input.worldX;
			var curY = this.game.input.worldY;
			placingGunner =  game.add.sprite(curX, curY, "gunner_lg");
		}
		crewGroup.visible = false;
	}
}

function buyLookout () {
	
	if(MainGame.gold < Math.round((MainGame.cost.lookout * MainGame.costMultiplier))){
		goldError();
	}
	else{
		if (placingCaptain) {
			placingCaptain.destroy();
		}
		if (placingGunner) {
			placingGunner.destroy();
		}
		if (placingLookout) {
			placingLookout.destroy();
		}
		if (placingShip){ placingShip.destroy();  rangeCircle.destroy();}
		if (placingTower){ placingTower.destroy();  rangeCircle.destroy();}
		else if(MainGame.crewSpace < 1){
			printError("There are no open crew slots on any ship or tower.");
		}
		else{
			var curX = this.game.input.worldX;
			var curY = this.game.input.worldY;
			placingLookout =  game.add.sprite(curX, curY, "lookout_lg");
		}
		crewGroup.visible = false;
	}
}

MainGame.damage = function (unit) {							//determine how many pirate to kill with each creep
	
	var killed = 0;
	
	switch(unit){
		case "rowboat":
			killed = 5;
			break;
		
		case "smallSail":
			killed = 10;
			break;
		
		case "midSail":
			killed = 15;
			break;
		
		case "sunSail":
			killed = 20;
			break;
		
		case "midBossBlack":
			killed = 30;
			break;
		
		case "midBossWhite":
			killed = 30;
			break;
		
		case "blimp":
			killed = 25;
			break;
		
		case "bigBoss":
			killed = 100;			//autoloss!
			break;
	}
	
	console.log("Pirates: " + MainGame.piratesLeft);
	MainGame.piratesLeft = MainGame.piratesLeft - killed;
	healthText.setText('Pirates Left: ' + MainGame.piratesLeft);
	console.log("Now Pirates: " + MainGame.piratesLeft);

	
};

MainGame.addGold = function(unit){
	
	var gold = 0;
	
	switch(unit){
		case "rowboat":
			gold = Math.round(MainGame.rewards.rowboat * MainGame.goldMultiplier);
			break;
		
		case "smallSail":
			gold = Math.round(MainGame.rewards.smallSail * MainGame.goldMultiplier);
			break;
		
		case "midSail":
			gold = Math.round(MainGame.rewards.midSail * MainGame.goldMultiplier);
			break;
		
		case "sunSail":
			gold = Math.round(MainGame.rewards.sunSail * MainGame.goldMultiplier);
			break;
		
		case "midBossBlack":
			gold = Math.round(MainGame.rewards.midBossBlack * MainGame.goldMultiplier);
			break;
		
		case "midBossWhite":
			gold = Math.round(MainGame.rewards.midBossWhite * MainGame.goldMultiplier);
			break;
		
		case "blimp":
			gold = Math.round(MainGame.rewards.blimp * MainGame.goldMultiplier);
			break;
		
		case "bigBoss":
			gold = Math.round(MainGame.rewards.bigBoss * MainGame.goldMultiplier);
			break;
	}
	
	MainGame.gold += gold;
	MainGame.wavekills++;		//add 1 to wave kills

	goldText.setText('Gold: ' + MainGame.gold);
};

