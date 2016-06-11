
function Enemy(game, name){
	
	this.game = game;
	
	switch(name){
		case "rowboat":	
			Phaser.Sprite.call(this, this.game, 340, 703, 'creepships');
			this.anchor.setTo(0.5, 0.5);
			this.animations.add('left', [12, 13, 14], 7, true, true);
			this.animations.add('right', [24, 25, 26], 7, true, true);
			this.animations.add('up', [36, 37, 38], 7, true, true);
			this.animations.add('down', [0, 1, 2], 7, true, true);
			this.health = 13;
			this.maxHealth = 13;
			this.speed = 100;
			break;
		
		case "smallSail":
			Phaser.Sprite.call(this, this.game, 340, 703, 'creepships');
			this.animations.add('left', [60, 61, 62], 7, true, true);
			this.animations.add('right', [72, 73, 74], 7, true, true);
			this.animations.add('up', [84, 85, 86], 7, true, true);
			this.animations.add('down', [48, 49, 50], 7, true, true);
			this.scale.setTo(1.2, 1.2);
			this.anchor.setTo(0.5, 0.5);
			this.health = 22;
			this.maxHealth = 22;
			this.speed = 110;
		    break;
		  
		case "midSail":
			Phaser.Sprite.call(this, this.game, 340, 703, 'enemyship1');
			this.anchor.setTo(0.5, 0.5);
			this.animations.add('left', ['ship1_01.png','ship1_02.png', 'ship1_03.png', 'ship1_04.png', 'ship1_05.png'], 7, true, false);
			this.animations.add('right', ['ship1_19.png','ship1_20.png', 'ship1_21.png', 'ship1_22.png', 'ship1_23.png'], 7, true, false);
			this.animations.add('up', ['ship1_01.png','ship1_02.png', 'ship1_03.png', 'ship1_04.png', 'ship1_05.png'], 7, true, false);
			this.animations.add('down', ['ship1_37.png','ship1_38.png', 'ship1_39.png', 'ship1_40.png', 'ship1_41.png'], 7, true, false);
			this.health = 33;
			this.maxHealth = 33;
			this.speed = 120;
			break;
		
		case "sunSail":
			Phaser.Sprite.call(this, this.game, 340, 703, 'enemyship1');
			this.anchor.setTo(0.5, 0.5);
			this.animations.add('left', ['enemyship2_01.png','enemyship2_02.png', 'enemyship2_03.png', 'enemyship2_04.png', 'enemyship2_05.png'], 7, true, false);
			this.animations.add('right', ['enemyship2_19.png','enemyship2_20.png', 'enemyship2_21.png', 'enemyship2_22.png', 'enemyship2_23.png'], 7, true, false);
			this.animations.add('up', ['enemyship2_01.png','enemyship2_02.png', 'enemyship2_03.png', 'enemyship2_04.png', 'enemyship2_05.png'], 7, true, false);
			this.animations.add('down', ['enemyship2_37.png','enemyship2_38.png', 'enemyship2_39.png', 'enemyship2_40.png', 'enemyship2_41.png'], 7, true, false);
			this.health = 55;
			this.maxHealth = 55;
			this.speed = 120;
			break;
		
		case "blimp":
			Phaser.Sprite.call(this, this.game, 340, 703, 'enemyship1');
			this.scale.setTo(1.0, 1.0);
			this.anchor.setTo(0.5, 0.5);
			this.animations.add('left', ['blimp_09.png', 'blimp_10.png', 'blimp_11.png'], 7, true, false);
			this.animations.add('right', ['blimp_09.png', 'blimp_10.png', 'blimp_11.png'], 7, true, false);
			this.animations.add('up', ['blimp_09.png', 'blimp_10.png', 'blimp_11.png'], 7, true, false);
			this.animations.add('down', ['blimp_09.png', 'blimp_10.png', 'blimp_11.png'], 7, true, false);
			this.health = 70;
			this.maxHealth = 70;
			this.speed = 80;
			break;
		
		case "midBossWhite":
			Phaser.Sprite.call(this, this.game, 340, 703, 'creepships');
			this.animations.add('left', [60, 61, 62], 7, true, true);
			this.animations.add('right', [27, 28, 29], 7, true, true);
			this.animations.add('up', [39, 40, 41], 7, true, true);
			this.animations.add('down', [3, 4, 5], 7, true, true)
			this.scale.setTo(1.8, 1.8);
			this.anchor.setTo(0.5, 0.5);
			this.health = 200;
			this.maxHealth = 200;
			this.speed = 130;
			break;
			
		case "midBossBlack":
			Phaser.Sprite.call(this, this.game, 340, 703, 'creepships');
			this.animations.add('left', [60, 61, 62], 7, true, true);
			this.animations.add('right', [30, 31, 32], 7, true, true);
			this.animations.add('up', [42, 43, 44], 7, true, true);
			this.animations.add('down', [6, 7, 8], 7, true, true);
			this.scale.setTo(1.8, 1.8);
			this.anchor.setTo(0.5, 0.5);
			this.health = 120;
			this.maxHealth = 120;
			this.speed = 130;
			break;
			
		case "bigBoss":
			Phaser.Sprite.call(this, this.game, 340, 703, 'enemyship1');
			this.animations.add('left', ['largeship_01.png','largeship_02.png', 'largeship_03.png', 'largeship_04.png'], 7, true, false);
			this.animations.add('right', ['largeship_09.png', 'largeship_10.png', 'largeship_11.png', 'largeship_12.png'], 7, true, false);
			this.animations.add('up', ['largeship_13.png', 'largeship_14.png', 'largeship_15.png', 'largeship_16.png'], 7, true, false);
			this.animations.add('down', ['largeship_01.png','largeship_02.png', 'largeship_03.png', 'largeship_04.png'], 7, true, false);
			this.scale.setTo(1.0, 1.0);
			this.anchor.setTo(0.5, 0.5);
			this.health = 250;
			this.maxHealth = 250;
			this.speed = 120;
			break;
	}
		
	this.wp = 0;
	this.name = name;
	this.healthBar = this.game.add.sprite(this.x, this.y + 20, 'turret_health_bar');
	this.healthBar.anchor.setTo(0.5, 0.5);
	this.animations.play('up');

	this.STATES = {
		  TRACKING: 0
		, DAMAGED: 1
	};
	


	this._state = this.STATES.TRACKING;
	this.damageTimer = 0;

	CollisionManager.addObjectToGroup(this, 'baddies');
	this.game.add.existing(this);
}



Enemy.prototype = Object.create( Phaser.Sprite.prototype );
Enemy.prototype.constructor = Enemy;

Enemy.prototype.update = function(){

	this.updateHealthBar();

	this.moveTowards(this.wp);

	
	//is boat colliding with dock?
	if(this.game.map.getTileWorldXY(this.x, this.y, 32, 32, 2) && this.x > 800 && this.y < 200)
	{
		MainGame.damage(this.name);												
		this.die(false);
	}
	
}




Enemy.prototype.withinFollowingRange = function(target){



	return false;
}

Enemy.prototype.withinDetonationRange = function(){
	return false;
}

Enemy.prototype.moveTowards = function(wp){

	if(this.name == "blimp")
	{
		points = {
    		'x': [1000],
    		'y': [150]
    	};
	}
	else{
		points = {
	    	'x': [340, 600, 735, 875, 1106, 1106, 900],
	    	'y': [141, 141, 497, 698, 698, 451, 56]
	    };
	}
    // console.log(points);
	// console.log("waypoint: " + this.wp + "(" + points.x[wp] + ", " + points.y[wp] + ")");
	var x = points.x[wp] - this.x;
	var y = points.y[wp] - this.y;

	var mag = Math.sqrt((x * x) + (y * y));
	if(mag < 5){
		this.wp++;
	}

	var nx = x / mag;
	var ny = y / mag;

	if(!MainGame.paused){
		this.body.velocity.x = nx * this.speed;
		this.body.velocity.y = ny * this.speed;
	

		if(this.body.velocity.y <= 0){		//is it moving up?
			if(this.body.velocity.x > Math.abs(this.body.velocity.y)){
				this.animations.play('right');
			}
			else if(Math.abs(this.body.velocity.x) > Math.abs(this.body.velocity.y)){
				this.animations.play('left');
			}
			else{
				this.animations.play('up');
			}
		}
		else{
			if(this.body.velocity.x > this.body.velocity.y){
				this.animations.play('right');
			}
			else{
				this.animations.play('down');
			}
		}
	}
	else{
		this.body.velocity.x = 0;
		this.body.velocity.y = 0;
		this.animations.stop(false,false);
	}
}

Enemy.prototype._damage = function(amount, attacker){

	this.target = attacker;

	this.damage(amount);
	this._state = this.STATES.DAMAGED;
	this.damageTimer = 0;

	if(this.health <= 0){
		this.die(true);
	}
}

Enemy.prototype.updateHealthBar = function(){

	this.healthBar.x = this.x;
	this.healthBar.y = this.y + 24;

	var p = (this.health / this.maxHealth);
	p = parseFloat(p.toFixed(1));
	this.healthBar.frame = 10 - (p * 10);
}

Enemy.prototype.die = function(getGold){

	if(this.game){
		this.game.baddie_die_sfx.play();
	}


	var e = game.add.emitter(this.x, this.y, 12);
	e.makeParticles('rowboat_die', [0,1,2]);
	e.minRotation = 0;
	e.maxRotation = 0;
	e.start(true, 600, null, 12);

	CollisionManager.removeObjectFromGroup(this, "baddies");
	if(this.healthBar){
		this.healthBar.destroy();
	}

	

	this.destroy();
	
	// add gold to player
	if(getGold == true){
		MainGame.addGold(this.name);
	}

}