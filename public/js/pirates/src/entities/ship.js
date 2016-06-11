
function Ship(game, spawn, type){
	
	this.game = game;
	Phaser.Sprite.call(this, this.game, spawn.x, spawn.y, 'ship' + type);

	this.scale.setTo(0.5, 0.5);
	this.anchor.setTo(0.5, 0.5);

	if(type === 1){
		this.setupTime = 300;
		this.curSetupTime = 300;
		this.name = "ship";
		this.type = "Sloop";
		this.range = 70;
		this.baserange = 70;
		this.health = 200;
		this.maxHealth = 200;
		this.attackCooldown = .5 * 1000;
		this.baseattackCooldown = .5 * 1000;
		this.attackDamage = 5;
		this.baseattackDamage = 5;
		this.crew = [];						//capacity 2
		this.crewCap = 2;
		this.hasCaptain = false;
		this.isFull = false;
	}
	if (type === 2) {
		this.setupTime = 300;
		this.curSetupTime = 300;
		this.name = "ship";
		this.type = "Clipper";
		this.range = 90;
		this.baserange = 90;
		this.health = 200;
		this.maxHealth = 200;
		this.attackCooldown = .7 * 1000;
		this.attackDamage = 8;
		this.baseattackCooldown = .7 * 1000;
		this.baseattackDamage = 8;
		this.crew = [];						//capacity 4
		this.crewCap = 4;
		this.hasCaptian = false;
		this.isFull = false;
	}
	if (type === 3) {
		this.setupTime = 300;
		this.curSetupTime = 300;
		this.name = "ship";
		this.type = "Frigate";
		this.range = 120;
		this.baserange = 120;
		this.health = 200;
		this.maxHealth = 200;
		this.attackCooldown = 1 * 1000;
		this.attackDamage = 18;
		this.baseattackCooldown = 1 * 1000;
		this.baseattackDamage = 18;
		this.crew = [];						//capacity 8
		this.crewCap = 8;
		this.hasCaptain = false;
		this.isFull = false;
	}


	this._type = type;

	this.attackTimer = Date.now();

	this.body.immovable = true;
	this.inputEnabled = true;

	this._state = "setup";

	this.healthBar = null;

	//CollisionManager.addObjectToGroup(this, 'turrets');
	this.game.add.existing(this);
}

Ship.prototype = Object.create(Phaser.Sprite.prototype);
Ship.prototype.constructor = Turret;

Ship.prototype.update = function(){

	if(this._state == "ready"){

		//shoot?
		var target = null;
		for( var i = 0; i < CollisionManager.groups.baddies.length; i++ ){
			var baddie = CollisionManager.groups.baddies[i];

			var dist = Math.abs(Math.sqrt((this.x - baddie.x)*(this.x - baddie.x) + (this.y - baddie.y)*(this.y - baddie.y)));

			if(dist < this.range){
				if(baddie.name == "blimp"){							// can only attack blimp if contain a lookout crewman
					if(this.crew.indexOf("lookout") != -1){
						this.attack(baddie);
					}
				}
				else{												//not a blimp
					this.attack(baddie);
				}
			}
		}
	}
	
	if(this.crew.length == this.crewCap && !this.isFull){
		this.isFull = true;
		printError("Ship now at crew capacity");
	}
	
	
}

Ship.prototype.attack = function(target){

	if(Date.now() < this.attackTimer){
		return;
	}

	if(!MainGame.paused){						//shoot if game is not paused.
		if(this.name == "ship"){
			//shoot
			MainGame.waveshots++;
			var x = target.x - this.x;
			var y = target.y - this.y;
			var mag = Math.sqrt((x * x) + (y * y));
			var nx1 = x / mag;
			var ny1 = y / mag;
			var b = new Bullet(this.game, {x:this.x, y: this.y}, 'player', {x: nx1, y: ny1}, this);
			this.game.turret_small_sfx.play();
		}
	
	
		if(nx1 >= 0 && ny1 >= 0){
			if(Math.abs(nx1) > Math.abs(ny1)){
				this.frame = 0;	
			}
			else{
				this.frame = 3;
			}
		}
		else if(nx1 >= 0 && ny1 < 0){
			if(Math.abs(nx1) > Math.abs(ny1)){
				this.frame = 0;	
			}
			else{
				this.frame = 1;
			}
		}
		else if(nx1 < 0 && ny1 >= 0){
			if(Math.abs(nx1) > Math.abs(ny1)){
				this.frame = 2;	
			}
			else{
				this.frame = 3;
			}
		}
		else if(nx1 < 0 && ny1 < 0){
			if(Math.abs(nx1) > Math.abs(ny1)){
				this.frame = 2;	
			}
			else{
				this.frame = 1;
			}
		}
		
		this.attackTimer = Date.now() + this.attackCooldown;
	}
}

Ship.prototype.fix = function(){

}

Ship.prototype.updateHealthBar = function(){


}

Ship.prototype.die = function(){

}


Ship.prototype.serialize = function() {




	var obj = {
		
		type: this.type,
		hasCaptain: this.hasCaptain,
		isFull: this.isFull,
		crew: this.crew,
		x: this.x,
		y: this.y
		
	};


	return obj;
};


