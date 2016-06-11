
function WaveManager(game){
	
	this.game = game;
	
	this.waveStart = 0;
	this.enemiesKilled = 0;
	this.shotsFired = 0;
	this.enemyHits = 0;

	this.states = {
		  PAUSED: 1
		, COUNTDOWN: 2
		, SPAWNING: 3
	};

	this._state = this.states.COUNTDOWN;
	this.countDown = 3 * 100;

	this.wavesBackup = MainGame.waves;
	
	//Toggle these to switch to testwaves
	//----------------------------------------------------------------------------------------
	this.waves = MainGame.waves; //in waves.js
//	this.waves = MainGame.testwaves;	//in testwaves.js  for debugging / testing purposes.
	//MainGame.gold = 3000; //test amout of gold
	//----------------------------------------------------------------------------------------
	
	
	this.waveSaves= [];
	this.pauseTime = 0;
	this.setStartTime = false;
	this.creepGroup; 
}

WaveManager.prototype.setup = function(){
	this.currentWave = MainGame.wave;
	this.banner = this.game.add.sprite(552, 360, 'wavestart');
	//this.banner.anchor.setTo(0.5, 0.5);
	this.banner.animations.add('open', ['12.png', '13.png', '10.png', '11.png', '09.png', '08.png', '07.png', '06.png', '05.png',
											 '04.png', '02.png', '03.png', '01.png','01.png', '01.png', '01.png', '01.png' , '01.png', 
											 '01.png','01.png', '01.png', '01.png', '01.png' , '01.png', '01.png', '01.png' , '01.png', 
											 '01.png', '01.png' , '01.png', '03.png', '02.png', '04.png', 
											 '05.png', '06.png', '07.png', '08.png', '09.png', '11.png', '10.png', '13.png', '12.png',], 10, false, false);
	this.banner.play('open');	
	//this.banner = this.game.add.sprite(512, 380, 'wave_1');
//	this.banner.anchor.setTo(0.5, 0.5);
//	this.banner.fixedToCamera = true;

	
	
}

WaveManager.prototype.update = function(){
	if(this._state == this.states.PAUSED){
		
	}
	else if(this._state == this.states.COUNTDOWN){
	
		this.countDown--;
		if(this.countDown <= 0){
			if(this.banner){
				this.banner.destroy();
			}
			this.savePlayerState();
			this._state = this.states.SPAWNING;
			this.countDown = 100; //reset countdown for next spawn
			// console.log("BEGINNING WAVE "+this.currentWave);
			if(!this.setStartTime){
				this.waveStart = Date.now();
				this.setStartTime = true;
			}
		}
	}
	else if(this._state == this.states.SPAWNING){
		
		this.creepGroup = this.game.add.group();
		var wave = this.waves[this.currentWave];
		var setSpeed = false;
		var setHp = false;

		if(CollisionManager.groups.baddies.length < wave.moment){

			//lets spawn something

			var baddies = [];

			//get eligible baddies
			if(wave.rowboat > 0)
				baddies.push('rowboat');
			if(wave.smallSail > 0)
				baddies.push('smallSail');
			if(wave.midSail > 0)
				baddies.push('midSail');
			if(wave.sunSail > 0)
				baddies.push('sunSail');
			if(wave.midBossWhite > 0)
				baddies.push('midBossWhite');
			if(wave.midBossBlack > 0)
				baddies.push('midBossBlack');
			if(wave.bigBoss > 0)
				baddies.push('bigBoss');
    		if(wave.blimp > 0)
    			baddies.push('blimp');

			if( baddies.length == 0 && CollisionManager.groups.baddies.length == 0){

				if(this.pauseTime == 0){
					this.pauseTime = Date.now() + 1000;
				}

				if(Date.now() > this.pauseTime){

					// console.log("WAVE " + this.currentWave + " COMPLETED.");
					this.currentWave++;

					if(this.currentWave == this.waves.length){
						//WIN
						GUIManager.destroy();
						WaveManager.destroy();
						this.game.state.states['GameOver'].win = true;
						this.game.state.start('GameOver');
					}
					else{
						this._state = this.states.PAUSED;
						this.waveLength = Date.now() - this.waveStart;
						this.accuracy = Math.floor((this.enemyHits / this.shotsFired) * 100);
						if(placingCaptain) {placingCaptain.destroy();}
						if(placingGunner) {placingGunner.destroy();}
						if(placingLookout) {placingLookout.destroy();}
						if(placingShip) {placingShip.destroy();}
						if(placingTower) {placingTower.destroy();}
						GUIManager.handleWaveEnd();

						this.pauseTime = 0;
					}
				}
				
			}
			else{
				if(!MainGame.paused){
					var baddie = baddies[this.getRandomInt(0, baddies.length - 1)];
					
					switch(baddie){
						case 'rowboat':
							var b = new Enemy(this.game, baddie);
							this.waves[this.currentWave].rowboat--;
							if(typeof wave.unitspeed !== 'undefined' && typeof wave.unitspeed.rowboat !== 'undefined'){				//is individual unit speed specified?
								b.speed = Math.round(b.speed * wave.unitspeed.rowboat);
								setSpeed = true;
							}
							if(typeof wave.unithp !== 'undefined' && typeof wave.unithp.rowboat !== 'undefined'){				//is individual unit health specified?
								b.health = Math.round(b.health * wave.unithp.rowboat);
								b.maxHealth = b.health;
								setHp = true;
							}
							break;
						
						case 'smallSail':
							var b = new Enemy(this.game, baddie);
							this.waves[this.currentWave].smallSail--;
							if(typeof wave.unitspeed !== 'undefined' && typeof wave.unitspeed.smallSail !== 'undefined'){				//is individual unit speed specified?
								b.speed = Math.round(b.speed * wave.unitspeed.smallSail);
								setSpeed = true;
							}
							if(typeof wave.unithp !== 'undefined' && typeof wave.unithp.smallSail !== 'undefined'){				//is individual unit health specified?
								b.health = Math.round(b.health * wave.unithp.smallSail);
								b.maxHealth = b.health;
								setHp = true;
							}
							break;
							
						case 'midSail':
							var b = new Enemy(this.game, baddie);
							this.waves[this.currentWave].midSail--;
							if(typeof wave.unitspeed !== 'undefined' && typeof wave.unitspeed.midSail !== 'undefined'){				//is individual unit speed specified?
								b.speed = Math.round(b.speed * wave.unitspeed.midSail);
								setSpeed = true;
							}
							if(typeof wave.unithp !== 'undefined' && typeof wave.unithp.midSail !== 'undefined'){				//is individual unit health specified?
								b.health = Math.round(b.health * wave.unithp.midSail);
								b.maxHealth = b.health;
								setHp = true;
							}
							break;
						
						case 'sunSail':
							var b = new Enemy(this.game, baddie);
							this.waves[this.currentWave].sunSail--;
							if(typeof wave.unitspeed !== 'undefined' && typeof wave.unitspeed.sunSail !== 'undefined'){				//is individual unit speed specified?
								b.speed = Math.round(b.speed * wave.unitspeed.sunSail);
								setSpeed = true;
							}
							if(typeof wave.unithp !== 'undefined' && typeof wave.unithp.sunSail !== 'undefined'){				//is individual unit health specified?
								b.health = Math.round(b.health * wave.unithp.sunSail);
								b.maxHealth = b.health;
								setHp = true;
							}
							break;
						
						case 'midBossWhite':
							var b = new Enemy(this.game, baddie);
							this.waves[this.currentWave].midBossWhite--;
							if(typeof wave.unitspeed !== 'undefined' && typeof wave.unitspeed.midBossWhite !== 'undefined'){				//is individual unit speed specified?
								b.speed = Math.round(b.speed * wave.unitspeed.midBossWhite);
								setSpeed = true;
							}
							if(typeof wave.unithp !== 'undefined' && typeof wave.unithp.midBossWhite !== 'undefined'){				//is individual unit health specified?
								b.health = Math.round(b.health * wave.unithp.midBossWhite);
								b.maxHealth = b.health;
								setHp = true;
							}
							break;
							
						case 'midBossBlack':
							var b = new Enemy(this.game, baddie);
							this.waves[this.currentWave].midBossBlack--;
							if(typeof wave.unitspeed !== 'undefined' && typeof wave.unitspeed.midBossBlack !== 'undefined'){				//is individual unit speed specified?
								b.speed = Math.round(b.speed * wave.unitspeed.midBossBlack);
								setSpeed = true;
							}
							if(typeof wave.unithp !== 'undefined' && typeof wave.unithp.midBossBlack !== 'undefined'){				//is individual unit health specified?
								b.health = Math.round(b.health * wave.unithp.midBossBlack);
								b.maxHealth = b.health;
								setHp = true;
							}
							break;
						
						case 'bigBoss':
							var b = new Enemy(this.game, baddie);
							this.waves[this.currentWave].bigBoss--;
							if(typeof wave.unitspeed !== 'undefined' && typeof wave.unitspeed.bigBoss !== 'undefined'){				//is individual unit speed specified?
								b.speed = Math.round(b.speed * wave.unitspeed.bigBoss);
								setSpeed = true;
							}
							if(typeof wave.unithp !== 'undefined' && typeof wave.unithp.bigBoss !== 'undefined'){				//is individual unit health specified?
								b.health = Math.round(b.health * wave.unithp.bigBoss);
								b.maxHealth = b.health;
								setHp = true;
							}
							break;
							
						case 'blimp':
							var b = new Enemy(this.game, baddie);
							
							this.waves[this.currentWave].blimp--;
							if(typeof wave.unitspeed !== 'undefined' && typeof wave.unitspeed.blimp !== 'undefined'){				//is individual unit speed specified?
								b.speed = Math.round(b.speed * wave.unitspeed.blimp);
								setSpeed = true;
							}
							if(typeof wave.unithp !== 'undefined' && typeof wave.unithp.blimp !== 'undefined'){				//is individual unit health specified?
								b.health = Math.round(b.health * wave.unithp.blimp);
								b.maxHealth = b.health;
								setHp = true;
							}
							break;
					}
					if(b){
						if(!setHp){
							b.health = Math.round(b.health * wave.hpmultiplier);				//adjust health based on wave hpmultiplier
							b.maxHealth = b.health;
						}
						if(!setSpeed){														//if individual unit speed is not specified.
							b.speed = Math.round(b.speed * wave.speedmultiplier);
						}
						MainGame.wavecreeps++;	
						this.creepGroup.add(b);
					}
					this._state = this.states.COUNTDOWN;
					this.countDown = Math.round(100 / wave.spawnrate); //reset countdown for next spawn based on wave spawnrate
			
				}
			}
		}
	}
}

WaveManager.prototype.getSpawn = function(){
	
	return {x: 340, y:705};
}

WaveManager.prototype.getRandomInt = function(min, max){

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

WaveManager.prototype.startNewWave = function(){
//	WaveManager.savePlayerState();
	this.waveStart = Date.now();
	this.enemiesKilled = 0;
	this.enemyHits = 0;
	this.shotsFired = 0;
	MainGame.wave++;
	if(this.currentWave === this.waves.length){
		//WIN
		GUIManager.destroy();
		WaveManager.destroy();
		this.game.state.states['GameOver'].win = true;
		this.game.state.start('GameOver');
	}
	else{
		
		this.banner = this.game.add.sprite(552, 360, 'wavestart');
		this.banner.animations.add('open', ['12.png', '13.png', '10.png', '11.png', '09.png', '08.png', '07.png', '06.png', '05.png',
											 '04.png', '02.png', '03.png', '01.png','01.png', '01.png', '01.png', '01.png' , '01.png', 
											 '01.png','01.png', '01.png', '01.png', '01.png' , '01.png', '01.png', '01.png' , '01.png', 
											 '01.png', '01.png' , '01.png', '03.png', '02.png', '04.png', 
											 '05.png', '06.png', '07.png', '08.png', '09.png', '11.png', '10.png', '13.png', '12.png',], 10, false, false);
		this.banner.play('open');	

		console.log("here");
		//add wave number scroll in top left corner 
		//this.game.waveScroll.visible = true;

		this.countdown = 3 * 100;
		this._state = this.states.COUNTDOWN;
	}
}

WaveManager.prototype.savePlayerState = function(){

	
	//localStorage.setItem("save", JSON.stringify(shipList));

}


WaveManager.prototype.destroy = function(){
	this._state = this.states.PAUSED;
}

function stopScrollAnimation(){
	scroll.animations.stop(null, true);
}

