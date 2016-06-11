
MainGame.GameOverState = function(game){
	
	this.win = false;
};

MainGame.GameOverState.prototype = {

	create: function(){
		if(this.win){
			this.game.add.sprite(0, 0, "beach");
			var s = this.add.sprite(1024/2, 400, 'celebrate');
			s.anchor.setTo(0.5, 0.5);
			s.fixedToCamera = true;
			var m = this.add.sprite(1024/2, 65, 'youwin');
			m.anchor.setTo(0.5, 0.5);
			m.fixedToCamera = true;
			var t = this.add.sprite(1024/4, 600, 'treasure');
			t.anchor.setTo(0.5, 0.5);
			t.fixedToCamera = true;
			var buttonStyle = { font: "30px almendraregular", fill: "#fffacd", align: "center", boundsAlignH: "left", 
        					boundsAlignV: "top"};
			mainMenu = new Phaser.Button(this.game, 850, 650, 'button_page', MainGame.toMainMenu, this, 1, 0, 0);
			mainMenu.clicked = false;
		
			//add button to page
			mainMenu.anchor.setTo(0.5, 0.5);
			this.game.add.existing(mainMenu);
	
			//add text to mainMenu button
			var inst_text = new Phaser.Text(this.game, 850, 650, "Main Menu", buttonStyle);
			inst_text.anchor.setTo(0.5, 0.5);
			this.game.add.existing(inst_text);
			
		emitter = game.add.emitter(1024/4, 600, 75);
    	emitter.makeParticles('coin1');

    	emitter.start(false, 5000, 20);
		}
		else{
			var s = this.add.sprite(1024/2, 768/2, 'youlose');
			s.anchor.setTo(0.5, 0.5);
			s.fixedToCamera = true;
			
			var buttonStyle = { font: "30px almendraregular", fill: "#fffacd", align: "center", boundsAlignH: "left", 
        					boundsAlignV: "top"};
			mainMenu = new Phaser.Button(this.game, 850, 650, 'button_page', MainGame.toMainMenu, this, 1, 0, 0);
			mainMenu.clicked = false;
		
			//add button to page
			mainMenu.anchor.setTo(0.5, 0.5);
			this.game.add.existing(mainMenu);
	
			//add text to mainMenu button
			var inst_text = new Phaser.Text(this.game, 850, 650, "Main Menu", buttonStyle);
			inst_text.anchor.setTo(0.5, 0.5);
			this.game.add.existing(inst_text);
		}

	},

	update: function(){

	}
};

MainGame.toMainMenu = function(){
	this.game.destroy();
	location.reload();
};