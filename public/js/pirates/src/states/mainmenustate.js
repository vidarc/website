
MainGame.MainMenuState = function(game){
	
};
var page;
var temp;
var next;
var prev;
var onPage1;
var onPage2;
var onPage3;
var onPage4;
var instructionsOpen = false;
var instruct;
var easy;
var easy_text;
var normal;
var normal_text;
var hard;
var hard_text;

MainGame.MainMenuState.prototype = {
	
	create: function(){
		this.game.stage.backgroundColor = '#fffaf0';
		this.logo = this.add.sprite(this.game.world.centerX - 24, this.game.world.centerY, 'logo');
		this.logo.anchor.setTo(0.5,0.5);
	
		//style for button text
		var startStyle = { font: "30px almendraregular", fill: "#fffacd", align: "center", boundsAlignH: "left", 
        boundsAlignV: "top"};		//25px, #1c1c1c
	
		//create and place start button
		
		var start_btn = new Phaser.Button(this.game, 502, 50, 'button_page', function(){
			this.game.state.start('Game');
		}, this, 1, 0, 0);
		start_btn.anchor.setTo(0.5, 0.5);
		this.game.add.existing(start_btn);
		
		//create start button text
		var start_txt = new Phaser.Text(this.game, 505, 48, "New Game", startStyle);
		start_txt.anchor.setTo(0.5,0.5);
		this.game.add.existing(start_txt);
		
		
		//create and display instruction button
		var instructStyle = { font: "30px almendraregular", fill: "#fffacd", align: "center", boundsAlignH: "left", 
        boundsAlignV: "top"};
		instruct = new Phaser.Button(this.game, 700, 50, 'button_page', openInstructions, this, 1, 0, 0);
		instruct.clicked = false;
		
		//add button to page
		instruct.anchor.setTo(0.5, 0.5);
		this.game.add.existing(instruct);
	
		//add text to instruction button
		var inst_text = new Phaser.Text(this.game, 701, 49, "Instructions", instructStyle);
		inst_text.anchor.setTo(0.5, 0.5);
		this.game.add.existing(inst_text);
		
		//create load game button
		var loadStyle = { font: "30px almendraregular", fill: "#fffacd", align: "center", boundsAlignH: "left", 
        boundsAlignV: "top"};
		var load_game = new Phaser.Button(this.game, 302, 50, 'button_page', MainGame.loadGame, this, 1, 0, 0);
		load_game.anchor.setTo(0.5, 0.5);
		this.game.add.existing(load_game);
		
		var load_text = new Phaser.Text(this.game, 302, 48, "Load Game", loadStyle);
		load_text.anchor.setTo(0.5, 0.5);
		this.game.add.existing(load_text);
		
		// difficulty buttons
		var style = { 
			font: "15px almendraregular", 
			fill: "#fffacd", 
			align: "center", 
			boundsAlignH: "left", 
        	boundsAlignV: "top"};
		easy = this.game.add.button(325, 100, 'button_small', easyMode, this, 1, 0, 2);
		normal = this.game.add.button(450, 100, 'button_small', normalMode, this, 1, 0, 2);
		hard = this.game.add.button(575, 100, 'button_small', hardMode, this, 1, 0, 2);
		easy_text = this.game.add.text(345, 113, 'Easy Mode', style);
		normal_text = this.game.add.text(475, 113, 'Normal', style);
		hard_text = this.game.add.text(595, 113, 'Hard Mode', style);
	



		page = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'popup');
		page.anchor.setTo(0.5, 0.5);
		
		 var pw = (page.width/2) - 60;
		 var ph = (page.height / 2) - 38;
			    

		next = new Phaser.Button(this.game, pw-110, -ph+350, 'rightarrow', next, this, 1, 0, 0);
		next.inputEnabled = true;
		next.input.priorityID= 1;
		next.input.useHandCursor = true;
		page.addChild(next);
		prev = new Phaser.Button(this.game, pw-485, -ph+360, 'leftarrow', prev, this, 1, 0, 0)
		prev.inputEnabled = true;
		prev.input.priorityID= 1;
		prev.input.useHandCursor = true;
		page.addChild(prev);
		prev.visible = false;
		
		onPage1 = true;
		onPage2 = false;
		onPage3 = false;
		onPage4 = false;

		page.visible = false;

	},

	update: function(){
		
	},

	render: function(){
		
	},
	

};

function easyMode() {
	easy.setFrames(1, 1, 2);
	normal.setFrames(1, 0, 2);
	hard.setFrames(1, 0, 2);
	MainGame.goldMultiplier = 1.1;
	MainGame.costMultiplier = 0.9;
};

function normalMode() {
	easy.setFrames(1, 0, 2);
	normal.setFrames(1, 1, 2);
	hard.setFrames(1, 0, 2);
	MainGame.goldMultiplier = 1.1;
	MainGame.costMultiplier = 0.9;
};

function hardMode() {
	easy.setFrames(1, 0, 2);
	normal.setFrames(1, 0, 2);
	hard.setFrames(1, 1, 2);
	MainGame.goldMultiplier = 0.9;
	MainGame.costMultiplier = 1.1;
};



function openInstructions(){
	if(instructionsOpen){
		page.visible = false;
		instructionsOpen = false;
	}
	else{
		instructionsOpen = true;
		page.visible = true;

		
	
	}
}

function next(){
	if(onPage1){
		page.destroy();
		page = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'instruct2');
		page.anchor.setTo(0.5, 0.5);
		page.addChild(prev);
		page.addChild(next);
		onPage1 = false;
		onPage2 = true;
		prev.visible = true;
	}
	else if(onPage2){
		page.destroy();
		page = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'instruct3');
		page.anchor.setTo(0.5, 0.5);
		page.addChild(prev);
		page.addChild(next);
		onPage2 = false;
		onPage3 = true;
		prev.visible = true;
	}
	else if(onPage3){
		page.destroy();
		page = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'instruct4');
		page.anchor.setTo(0.5, 0.5);
		page.addChild(prev);
		page.addChild(next);
		onPage3 = false;
		onPage4 = true;
		next.visible = false;
	}	
}

function prev(){
	if(onPage2){
		page.destroy();
		page = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'popup');
		page.anchor.setTo(0.5, 0.5);
		page.addChild(prev);
		page.addChild(next);
		onPage1 = true;
		onPage2 = false;
		prev.visible = false;
	}
	else if(onPage3){
		page.destroy();
		page = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'instruct2');
		page.anchor.setTo(0.5, 0.5);
		page.addChild(prev);
		page.addChild(next);
		onPage2 = true;
		onPage3 = false;
		prev.visible = true;
	}
	else if(onPage4){
		page.destroy();
		page = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'instruct3');
		page.anchor.setTo(0.5, 0.5);
		page.addChild(prev);
		page.addChild(next);
		onPage3 = true;
		onPage4 = false;
		next.visible = true;
	}
}

MainGame.loadGame = function(){

			var state = localStorage.getItem('save');
			var loadState = JSON.parse(state);
			var player = JSON.parse(loadState.player);
			var ships = JSON.parse(loadState.ships);
			
			MainGame.piratesLeft = player.piratesLeft;
			MainGame.gold = player.gold;
			MainGame.wave = player.wave + 1;
			MainGame.loaded = true;
			MainGame.captainSpace = player.captainSpace;
			MainGame.crewSpace = player.crewSpace;
			
			//STart Game
			this.game.state.start('Game');
			
			var n = 0;
			var temp;
			for(var i in ships){
				var ship = JSON.parse(ships[i]);
				MainGame.ships.push(ship);
			

			}

};

