
function MenuScreen(game){
	
	this.game = game;
	
	Phaser.Group.call(this, this.game, null, "menuScreen");

	this.nextWave = WaveManager.currentWave;

	//overlay
	this.overlay = this.create(0, 0, 'overlay');
	//this.overlay.anchor.setTo(0.5, 0.5);
	this.overlay.fixedToScreen = true;
	
	this.waveCompleteText = this.game.add.text(50, 50, "Wave Complete!", { font: "48px almendraregular", fill: '#ffffff'}, this);
	this.waveTimeText = this.game.add.text(50, 120, "Time: 0", { font: "24px almendraregular", fill: '#ffffff'}, this);
	this.enemiesKillText = this.game.add.text(50, 180, "Enemies Killed: 0", { font: "24px almendraregular", fill: '#ffffff'}, this);
	this.accuracyText = this.game.add.text(50, 240, "Accuracy: 0", { font: "24px almendraregular", fill: '#ffffff'}, this);
	this.goldText = this.game.add.text(640, 80, "Gold Available: " + MainGame.gold, { font: "22px almendraregular", fill: '#ffffff'}, this);
	this.piratesText = this.game.add.text(640, 130, "Pirates Left: " ,{ font: "22px almendraregular", fill: '#ffffff'}, this);
	this.rumMessage = this.game.add.text(640, 200, "Rum bought!" ,{ font: "22px almendraregular", fill: '#ffffff'}, this);
	this.saveMessage = this.game.add.text(640, 240, "Game Saved!" ,{ font: "22px almendraregular", fill: '#ffffff'}, this);
	this.rumMessage.visible = false;
	this.saveMessage.visible = false;
	
	//next wave
	this.nextWaveText = this.game.add.text(125, 340, "Enemies in the next wave:", { font: "32px almendraregular", fill: '#ffffff'}, this);
	this.nextWaveText2 = this.game.add.text(50+40, 380, "Normal Ships", { font: "24px almendraregular", fill: '#ffffff'}, this);
	this.nextWaveText3 = this.game.add.text(300+40, 380, "Boss Ships", { font: "24px almendraregular", fill: '#ffffff'}, this);
	this.nextWaveNote = this.game.add.text(70, 685, "Note about next wave", { font: "24px almendraregular", fill: '#ffffff'}, this);
	this.row = this.create(50+40, 420, 'creepships', 24);
	this.rowText = this.game.add.text(100 +40, 420, "   " , { font: "22px almendraregular", fill: '#ffffff'}, this);
	this.small = this.create(50+40, 470, 'creepships', 72);
	this.smallText = this.game.add.text(100 +40, 470, "   ", { font: "22px almendraregular", fill: '#ffffff'}, this);
	this.mid = this.create(50+40, 520, 'enemyship1', 'ship1_19.png');
	this.mid.scale.setTo(0.7, 0.7);
	this.midText = this.game.add.text(110 +40, 520 + 10, "   ", { font: "22px almendraregular", fill: '#ffffff'}, this);
	this.sun = this.create(50+40, 580, 'enemyship1', 'enemyship2_19.png');
	this.sun.scale.setTo(0.7, 0.7);
	this.sunText = this.game.add.text(110+40 , 580 + 5, "  ", { font: "22px almendraregular", fill: '#ffffff'}, this);
	this.blimp = this.create(50+40, 635, 'enemyship1', 'blimp_09.png');
	this.blimp.scale.setTo(0.8, 0.8);
	this.blimpText = this.game.add.text(110 +40, 635, "   ", { font: "22px almendraregular", fill: '#ffffff'}, this);
	this.mbw = this.create(300+40, 420, 'creepships', 27);
	this.mbw.scale.setTo(1.2, 1.2);
	this.mbwText = this.game.add.text(360 +40, 420 + 10, "   ", { font: "22px almendraregular", fill: '#ffffff'}, this);
	this.mbb = this.create(300+40, 490, 'creepships', 30);
	this.mbb.scale.setTo(1.2, 1.2);
	this.mbbText = this.game.add.text(360 +40, 490 + 10, "  ", { font: "22px almendraregular", fill: '#ffffff'}, this);
	this.bb = this.create(300+40, 560, 'enemyship1', 'largeship_09.png');
	this.bb.scale.setTo(0.7, 0.7);
	this.bbText = this.game.add.text(430+40, 560 + 40, "  ", { font: "22px almendraregular", fill: '#ffffff'}, this);
	this.row.visible = false;
	this.mid.visible = false;
	this.sun.visible = false;
	this.blimp.visible = false;
	this.mbw.visible = false;
	this.mbb.visible = false;
	this.bb.visible = false;
	
	
	
	//Multi-Health

	this.h = this.create(660, 425, 'super-health');
	this.h.anchor.setTo(0.5, 0.5);
//	this.h_text 		= this.game.add.text(650, 420, InventoryManager.inventory[1].amount.toString(),  { font: "20px almendraregular", fill: '#ffffff'}, this);
	this.h_title_text 	= this.game.add.text(650, 370, "Keith The Jerk's Party Pack! ", { font: "18px almendraregular", fill: '#ffffff'}, this);
	this.h_extra_text 	= this.game.add.text(700, 400, "Convinces 5 sailors", { font: "14px almendraregular", fill: '#ffffff'}, this);
	this.h_extra_text2 	= this.game.add.text(700, 415, "to fight with you", { font: "14px almendraregular", fill: '#ffffff'}, this);
	this.h_cost_text 	= this.game.add.text(700, 440, "Cost: 249 gold", { font: "14px almendraregular", fill: '#ffffff'}, this);
	this.h_btn = new Phaser.Button(this.game, 880, 410, 'buy_btn', this.buyPartyPack, this, 1, 0, 0);
	this.add(this.h_btn);

	//First Aid

	this.f = this.create(660, 535, 'player-health');
	this.f.anchor.setTo(0.5, 0.5);
	this.f_title_text 	= this.game.add.text(645, 480, "Rum", { font: "18px almendraregular", fill: '#ffffff'}, this);
	this.f_extra_text 	= this.game.add.text(700, 510, "Convinces 1 sailor", { font: "14px almendraregular", fill: '#ffffff'}, this);
	this.f_extra_text2 	= this.game.add.text(700, 525, "to fight with you", { font: "14px almendraregular", fill: '#ffffff'}, this);
	this.f_cost_text 	= this.game.add.text(700, 550, "Cost: 50 gold", { font: "14px almendraregular", fill: '#ffffff'}, this);
	this.f_btn = new Phaser.Button(this.game, 880, 520, 'buy_btn', this.buyRum, this, 1, 0, 0);
	this.add(this.f_btn);


	this.ready_btn = new Phaser.Button(this.game, 645, 640, 'ready_button', this.readyWave, this, 1, 0, 0);
	this.add(this.ready_btn);
	this.save_btn = new Phaser.Button(this.game, 700, 640, 'save_button', this.saveGame, this, 1, 0, 0);
	this.add(this.save_btn);
	
}

MenuScreen.prototype = Object.create(Phaser.Group.prototype);
MenuScreen.prototype.constructor = MenuScreen;

MenuScreen.prototype.update = function(){
	MainGame.inBetween = true;
    this.waveCompleteText.setText("Wave  " + WaveManager.currentWave + "  Complete!" );
	this.waveTimeText.setText("Time:   " + Math.floor(WaveManager.waveLength / 1000) + " seconds");
	this.enemiesKillText.setText("Enemies Killed:   " + MainGame.wavekills + "   /   " + MainGame.wavecreeps);
	this.accuracyText.setText("Ship / Tower Accuracy:   " + Math.round((MainGame.wavehits / MainGame.waveshots)*100) + "%  (" + MainGame.wavehits + "  /  " + MainGame.waveshots + ")");


	this.goldText.setText("Gold Available: " + MainGame.gold);
	this.piratesText.setText("Pirates Left: " + MainGame.piratesLeft);

	
	//make sure we are not on last wave
	if(WaveManager.currentWave < WaveManager.waves.length){
		var next = WaveManager.waves[WaveManager.currentWave];
		this.nextWaveNote.setText("Next Wave Tip:  " + (typeof next.note !== 'undefined' ? next.note : "its a surprise!") );
		if(next.rowboat > 0){  //are there rowboats in the next wave?
			this.row.visible = true;
			this.rowText.setText(":   " + next.rowboat);
		}
		else{ 
			this.row.visible = false;
			this.rowText.setText(" ");
		}
		
		if(next.smallSail > 0){  //are there rowboats in the next wave?
			this.small.visible = true;
			this.smallText.setText(":   " + next.smallSail);
		}
		else{
			this.small.visible = false;
			this.smallText.setText(" ");
		}
		
		if(next.midSail > 0){  //are there rowboats in the next wave?
			this.mid.visible = true;
			this.midText.setText(":   " + next.midSail);
		}
		else{
			this.mid.visible = false;
			this.midText.setText(" ");
		}
		if(next.sunSail > 0){  //are there rowboats in the next wave?
			this.sun.visible = true;
			this.sunText.setText(":   " + next.sunSail);
		}
		else{
			this.sun.visible = false;
			this.sunText.setText(" ");
		}
		
		if(next.blimp > 0){  //are there rowboats in the next wave?
			this.blimp.visible = true;
			this.blimpText.setText(":   " + next.blimp);
		}
		else{
			this.blimp.visible = false;
			this.blimpText.setText(" ");
		}

		if(next.midBossWhite > 0){  //are there rowboats in the next wave?
			this.mbw.visible = true;
			this.mbwText.setText(":   " + next.midBossWhite);
		}
		else{
			this.mbw.visible = false;
			this.mbwText.setText(" ");
		}
		
		if(next.midBossBlack > 0){  //are there rowboats in the next wave?
			this.mbb.visible = true;
			this.mbbText.setText(":   " + next.midBossBlack);
		}
		else{
			this.mbb.visible = false;
			this.mbbText.setText(" ");
		}
		if(next.bigBoss > 0){  //are there rowboats in the next wave?
			this.bb.visible = true;
			this.bbText.setText(":   " + next.bigBoss);
		}
		else{
			this.bb.visible = false;
			this.bbText.setText(" ");
		}
		
	}
	else{		//on last wave
		this.winText = this.game.add.text(100, 380, "No More Waves!", { font: "24px almendraregular", fill: '#ffffff'}, this);
	}
}




MenuScreen.prototype.buyRum = function(){
	
	this.rumMessage.visible = true;

	if(MainGame.gold >= 50){
		if(MainGame.piratesLeft < 100){
			MainGame.piratesLeft += 1;
			MainGame.gold -= 50;
			this.rumMessage.setText("Rum Bought!  1 Pirate hired!");
		}
		else{
			this.rumMessage.setText("Rum Bought...but no pirates hired!");
		}
	}
	else{
		this.rumMessage.setText("Not enough gold!");
	}
	this.game.time.events.add(1000, this.hideRumMessage, this, this.rumMessage);
	
}




MenuScreen.prototype.buyPartyPack = function(){
	
	this.rumMessage.visible = true;
	if(MainGame.gold >= 249){
		MainGame.gold -= 249;
		if(MainGame.piratesLeft <= 95){
			MainGame.piratesLeft += 5;
			this.rumMessage.setText("Rum Bought!  5 Pirates hired!");
		}
		else if(MainGame.piratesLeft < 100){
			var p = 100 - MainGame.piratesLeft;
			MainGame.piratesLeft = 100;
			this.rumMessage.setText("Rum Bought!  " + p + " pirates hired!");
		}
		else{
			this.rumMessage.setText("Rum Bought...but no pirates hired!");
		}
		
	}
	else{
		this.rumMessage.setText("Not enough gold!");
	}
	this.game.time.events.add(1000, this.hideRumMessage, this, this.rumMessage);

}


MenuScreen.prototype.hideRumMessage = function(){
	this.rumMessage.visible = false;
}


MenuScreen.prototype.readyWave = function(){

	this.game.paused = false;
	this.visible = false;
	MainGame.wavecreeps = 0;
	MainGame.wavekills = 0;
	MainGame.waveshots = 0;
	MainGame.wavehits = 0;
	MainGame.inBetween = false;
	
	WaveManager.startNewWave();
}

MenuScreen.prototype.saveGame = function(){
	
	localStorage.setItem("save", MainGame.serializeForSave());
	this.saveMessage.visible = true;
	console.log("saving game");
	this.game.time.events.add(3000, this.hideSaveMessage, this, this.saveMessge);
}


MenuScreen.prototype.hideSaveMessage = function(){
	this.saveMessage.visible = false;
}