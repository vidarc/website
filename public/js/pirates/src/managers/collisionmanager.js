
function CollisionManager(game){
	
	this.game = game;
	this.groups = {
		  players: []
		, layers: []
		, bullets: []
		, baddies: []
		, turrets: []
	};
}

CollisionManager.prototype.addObjectToGroup = function(obj, group){
	
	var arr = this.groups[group];
	arr.push(obj);
};

CollisionManager.prototype.removeObjectFromGroup = function(obj, group){

	var arr = this.groups[group];

	if(arr.indexOf(obj) >= 0){
		arr.splice(arr.indexOf(obj), 1);
	}

};

CollisionManager.prototype.purge = function(){

	for(var i in this.groups){
		var arr = this.groups[i];
		arr = [];
	}
};

CollisionManager.prototype.update = function(){



	//BULLET VS LAYER
	for( var i = 0; i < this.groups.bullets.length; i++ ){
		var bullet = this.groups.bullets[i];
		for( var k = 0; k < this.groups.layers.length; k++ ){
			var layer = this.groups.layers[k];
			if(bullet.alive){
				this.game.physics.collide(bullet, layer, function(){ bullet.die(); });
			}
		}
	}


	//BULLET VS BADDIES
	for( var i = 0; i < this.groups.bullets.length; i++ ){
		var bullet = this.groups.bullets[i];
		for( var k = 0; k < this.groups.baddies.length; k++ ){
			var baddie = this.groups.baddies[k];
			this.game.physics.overlap(bullet, baddie, function(){
				baddie._damage(bullet._parent.attackDamage, bullet._parent);
				bullet.die();
				MainGame.wavehits++;
			});	
		}
	}


	//BADDIES VS LAYER
	for( var i = 0; i < this.groups.baddies.length; i++ ){
		var baddie = this.groups.baddies[i];
		for( var k = 0; k < this.groups.layers.length; k++ ){
			var layer = this.groups.layers[k];
			this.game.physics.collide(baddie, layer);
		}
	}



};

