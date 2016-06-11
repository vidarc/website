
function Turret(game, spawn, type){
	
	this.game = game;
	Phaser.Sprite.call(this, this.game, spawn.x, spawn.y, 'turret_' + (type == 1 ? "small" : "big")); 

	this.anchor.setTo(0.5, 0.5);

	if (type === 1){
		this.setupTime = 300;
		this.curSetupTime = 300;
		this.name = "turret1";
		this.type = "Tower";
		this.range = 120;
		this.baserange = 120;
		this.health = 200;
		this.maxHealth = 200;
		this.attackCooldown = .75 * 1000;
		this.attackDamage = 6;
		this.baseattackCooldown = .75 * 1000;
		this.baseattackDamage = 6;
		this.crew = [];							//capacity 3
		this.hasCaptain = false;
		this.isFull = false;
	}
	else if (type === 2) {
		this.setupTime = 300;
		this.curSetupTime = 300;
		this.name = "turret1";
		this.type = "Fortress";
		this.range = 140;
		this.baserange = 140;
		this.health = 200;
		this.maxHealth = 200;
		this.attackCooldown = .9 * 1000;
		this.attackDamage = 14;
		this.baseattackCooldown = .9 * 1000;
		this.baseattackDamage = 14;
		this.crew = [];							//capacity 6
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

Turret.prototype = Object.create(Phaser.Sprite.prototype);
Turret.prototype.constructor = Turret;

Turret.prototype.update = function(){

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
	

	
	if(this.type == "Tower" && this.crew.length == 3 && !this.isFull){
		this.isFull = true;
			printError("Tower now at crew capacity");
	}
	
	if(this.type == "Fortress" && this.crew.length == 6 && !this.isFull){
		this.isFull = true;
			printError("Fortress now at crew capacity");
	}
	
	
}

Turret.prototype.attack = function(target){

	if(Date.now() < this.attackTimer){
		return;
	}

	if(!MainGame.paused){
		if(this.name == "turret1"){
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

Turret.prototype.fix = function(){
	this.health = this.maxHealth;
}

Turret.prototype.updateHealthBar = function(){

	var p = (this.health / this.maxHealth);
	p = parseFloat(p.toFixed(1));

	this.healthBar.frame = 10 - (p * 10);
}

Turret.prototype.die = function(){
	
}

Turret.prototype.serialize = function(savePosition) {
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
