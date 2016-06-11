
function Blimp(game, spawn){
	
	this.game = game;
	Phaser.Sprite.call(this, this.game, spawn.x, spawn.y, 'enemyship1');

	this.scale.setTo(1.0, 1.0);
	this.anchor.setTo(0.5, 0.5);
	this.health = 100;
	this.maxHealth = 100;
	this.speed = 90;
    this.wp = 0;
    this.x = 340;
    this.y = 703;

	this.healthBar = this.game.add.sprite(this.x, this.y + 20, 'turret_health_bar');
	this.healthBar.anchor.setTo(0.5, -0.5);

 

	this.animations.add('left', ['blimp_09.png', 'blimp_10.png', 'blimp_11.png'], 7, true, false);
	this.animations.add('right', ['blimp_09.png', 'blimp_10.png', 'blimp_11.png'], 7, true, false);
	this.animations.add('up', ['blimp_09.png', 'blimp_10.png', 'blimp_11.png'], 7, true, false);
	this.animations.add('down', ['blimp_09.png', 'blimp_10.png', 'blimp_11.png'], 7, true, false);


	this.animations.play('up');

	this.STATES = {
		  TRACKING: 0
		, DAMAGED: 1
	};

	this.name = "blimp";

	this._state = this.STATES.TRACKING;

	this.damageTimer = 0;

	CollisionManager.addObjectToGroup(this, 'baddies');
	this.game.add.existing(this);
}



Blimp.prototype = Object.create( Phaser.Sprite.prototype );
Blimp.prototype.constructor = Blimp;

Blimp.prototype.update = function(){

	this.updateHealthBar();
	// console.log("waypoint: " + this.wp);
	if(!MainGame.paused){
		this.moveTowards(this.wp);
	}
	
	//is boat at end of map?
	if(this.game.map.getTileWorldXY(this.x, this.y, 32, 32, 2))
	{
		MainGame.damage("blimp");
		this.die(false);
	}
	
}

Blimp.prototype.withinFollowingRange = function(target){



	return false;
}

Blimp.prototype.withinDetonationRange = function(){
	return false;
}

Blimp.prototype.moveTowards = function(wp){

	points = {
    	'x': [1000],
    	'y': [150]
    };

	var x = points.x[wp] - this.x;
	var y = points.y[wp] - this.y;

	var mag = Math.sqrt((x * x) + (y * y));
	if(mag < 5){
		this.wp++;
	}

	var nx = x / mag;
	var ny = y / mag;

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

Blimp.prototype._damage = function(amount, attacker){

	this.target = attacker;

	this.damage(amount);
	this._state = this.STATES.DAMAGED;
	this.damageTimer = 0;

	if(this.health <= 0){

		this.die(true);
	}
}

Blimp.prototype.updateHealthBar = function(){

	this.healthBar.x = this.x;
	this.healthBar.y = this.y + 24;

	var p = (this.health / this.maxHealth);
	p = parseFloat(p.toFixed(1));
	this.healthBar.frame = 10 - (p * 10);
}

Blimp.prototype.die = function(getGold){

	if(this.game){
		this.game.baddie_die_sfx.play();
	}

	var points = points || false;

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
		MainGame.addGold("blimp");
	}
}