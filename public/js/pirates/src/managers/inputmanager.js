function InputManager(game){

	this.game = game;

	this.tileSize = 32;
	this.activeTile = { x: 0, y: 0};

	this.reach = 200;
}

InputManager.prototype.setup = function(){
	
}

InputManager.prototype.update = function(){
	this.game.input.onTap.add(createTower, this);
	this.game.input.onTap.add(addCrew, this);
	
	// place the turrets and ships from saved game
	if (MainGame.loaded) {

		var ship;
		var temp;
		for(var i = 0; i < MainGame.ships.length; i++){
			//Build Ships
			ship = MainGame.ships[i];
				switch (ship.type){
					case "Sloop":
						console.log("sloop");
						temp = new Ship(this.game, {x:0, y:0}, 1);
						break;
					
					case "Clipper":
						console.log("clipper");
						temp = new Ship(this.game, {x:0, y:0}, 2);
						break;
						
					case "Frigate":
						console.log("frigate");
						temp = new Ship(this.game, {x:0, y:0}, 3);
						break;
						
					case "Tower":
						temp = new Turret(this.game, {x:0, y:0}, 1);
						break;
						
					case "Fortress":
						temp = new Turret(this.game, {x:0, y:0}, 2);
						break;
				}
				
				
				//Load existing info on ships
				temp.anchor.setTo(0.5, 0.5);
				temp.x = ship.x;
				temp.y = ship.y;
				temp.crew = ship.crew;
				temp.isFull = ship.isFull;
				temp.hasCaptain = ship.hasCaptain;
				temp.events.onInputOver.add(displayStats, this);
				temp.events.onInputOut.add(removeStats, this);
				console.log("shipstate: " + temp._state);
				temp._state = "ready";
				shipList.push(temp);
				this.game.turretGroup.add(temp);
				console.log("shiplist[" + i + "]");
				console.log(shipList[i]);
				upgradeUnit(shipList[i]);
			

		}

		MainGame.loaded = false;
	}
}

function removeGoldError (goldError) {
	goldError.destroy();
}

function goldError () {

	var goldError = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "NOT ENOUGH GOLD", {
		font: '25px almendraregular',
		fill: '#ffd700',
		stroke: '#000000',
		strokeThickness: 5,
		align: 'center'
	});
		
	this.game.time.events.add(1000, removeGoldError, this, goldError);
}

function removeCrewError(crewError){
	crewError.destroy();
}

function crewError() {
	var crewError = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "No available crew spots on any ships or towers", {
		font: '25px almendraregular',
		fill: '#ffd700',
		stroke: '#000000',
		strokeThickness: 5,
		align: 'center'
	});
	
	this.game.time.events.add(1000, removeCrewError, this, crewError);
}

function removeError(errorMsg){
	errorMsg.destroy();
}

function printError(message){
	var errorMsg = this.game.add.text(this.game.world.centerX, this.game.world.centerY, message, {
		font: '25px almendraregular',
		fill: '#ffd700',
		stroke: '#000000',
		strokeThickness: 5,
		align: 'center'
	});
	
	this.game.time.events.add(1000, removeError, this, errorMsg);
}


function removePlaceError (placeError) {
	placeError.destroy();
}

function placeError () {
	var placeError = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "Invalid Placement", {
		font: '25px almendraregular',
		fill: '#ffd700',
		stroke: '#000000',
		strokeThickness: 5,
		align: 'center'
	});
		
	this.game.time.events.add(1000, removePlaceError, this, placeError);
}


function displayStats(item){
	console.log("displayStats");
	statGroup = this.game.add.group();
	statGroup.create(260, 725, 'statsBG');
	
	//Get info about this ship
	var n = item.type;
	var r = Math.round(item.range);
	var d = Math.round(item.attackDamage * 10)/10;
	var rof = Math.round((1000 / item.attackCooldown)*10)/10;
		
	stats = this.game.add.text(290, 744, "Range: " + r + "   Damage: " + d + "   Rate: " + rof + " shots/sec" + "  Crew: ", {
		font: "18px almendraregular",
		fill: "#000000",
		align: "center"
	});	
	statGroup.add(stats);
	
	
	var hasCaptain = false;
	var gunners = 0;
	var lookouts = 0;
	var xpos = 290 + stats.width + 10;
	
	if (r > 100){
		xpos += 10;
	}
	
	for (var i = 0; i < item.crew.length; i++){
		if(item.crew[i] == "captain"){
			hasCaptain = true;
		}
		else if(item.crew[i] == "gunner"){
			gunners++;
		}
		else if(item.crew[i] == "lookout"){
			lookouts++;
		}
	}
	
	if(hasCaptain){
		console.log("has captain");
		var capt =  game.add.sprite(xpos ,744, "captain");
		capt.scale.setTo(0.7, 0.7);
		statGroup.add(capt);
		xpos += 20;
	}
	console.log(xpos);
	for(var i = 0; i < gunners; i++){
		var gun = game.add.sprite(xpos, 744, "gunner");
		gun.scale.setTo(0.7, 0.7);
		statGroup.add(gun);
		xpos += 20;
	}
	
	for(var i = 0; i < lookouts; i++){
		var lo = game.add.sprite(xpos, 744, "lookout");
		lo.scale.setTo(0.7, 0.7);
		statGroup.add(lo);
		xpos += 20;
	}
	
	if (!shipGroup.visible && !crewGroup.visible) {
		var rangeCircle = game.add.graphics(100, 100);
		rangeCircle.lineStyle(0);
	    rangeCircle.beginFill(0x777777, 0.5);
	    rangeCircle.drawCircle(item.world.x - 257/2 + item.width/2, item.world.y - 60 - item.height/2, r);
	    rangeCircle.endFill();
	    statGroup.add(rangeCircle);
	}
}

function removeStats(item){
	if(statGroup != null){
		statGroup.destroy();
	}
}



function createTower (pointer) {
	var map = this.game.map;
	var curX = this.game.input.worldX;
	var curY = this.game.input.worldY;
	currentTile = map.getTileWorldXY(curX, curY, 32, 32, 0);
	
	//Are we in sea?
	if (placingShip != null){
		if (map.getTileWorldXY(curX, curY, 32, 32, 0)) {
			
			//Make sure there is no overlap with exisiting towers/ships
	    	var overlapping = false;
	    	for(var i = 0; i < shipList.length; i++){
	    		console.log("#1");
	    		if(checkOverlap(placingShip, shipList[i])){
	    			printError("You can't overlap towers and ships");
	    			overlapping = true;
	   			}
	   		}
			
			if(!overlapping){
				placingShip._state="ready";
				placingShip.events.onInputOver.add(displayStats, this);
				placingShip.events.onInputOut.add(removeStats, this);
				shipList.push(placingShip);
				
				MainGame.ships.push({
					type: 1,
					x: curX,
					y: curY
				});
				// remove gold
				if(placingShip.type == "Sloop"){
					MainGame.gold -= Math.round((MainGame.cost.sloop * MainGame.costMultiplier));
					MainGame.crewSpace += 2;
					MainGame.captainSpace += 1;
				}
				else if (placingShip.type == "Clipper"){
					MainGame.gold -= Math.round((MainGame.cost.clipper * MainGame.costMultiplier));
					MainGame.crewSpace += 4;
					MainGame.captainSpace += 1;
				}
				else if (placingShip.type == "Frigate"){
					MainGame.gold -= Math.round((MainGame.cost.frigate * MainGame.costMultiplier));
					MainGame.crewSpace += 8;
					MainGame.captainSpace += 1;
				}
			
				placingShip = null;
				rangeCircle.destroy();
				this.game.creepPath.visible = false;
				this.game.turretGroup.add(shipList[shipList.length-1]);
			}
		}
		else {
			placeError();
		}
	}
	

	//Are we on land and not blocked?
	else if (placingTower != null) {
	     if(map.getTileWorldXY(curX, curY, 32, 32, 1) && 
	    	!map.getTileWorldXY(curX, curY, 32, 32, 2)){
	    		
	    		//Make sure there is no overlap with exisiting towers/ships
	    		var overlapping = false;
	    		for(var i = 0; i < shipList.length; i++){
	    			console.log("#2");
	    			if(checkOverlap(placingTower, shipList[i])){
	    				printError("You can't overlap towers and ships");
	    				overlapping = true;
	    			}
	    		}
	    		
	    		if(!overlapping){
		    		placingTower._state="ready";
		    		placingTower.events.onInputOver.add(displayStats, this);
		    		placingTower.events.onInputOut.add(removeStats, this);
		    		shipList.push(placingTower);
					MainGame.turrets.push({
						type: 1,
						x: curX,
						y: curY
					});
					// remove gold
					if(placingTower.type == "Tower"){
						MainGame.gold -= Math.round((MainGame.cost.tower * MainGame.costMultiplier));
						MainGame.crewSpace += 3;
						MainGame.captainSpace += 1;
					}
					else{
						MainGame.gold -= Math.round((MainGame.cost.fortress * MainGame.costMultiplier));
						MainGame.crewSpace += 6;
						MainGame.captainSpace += 1;
					}
					placingTower = null;
					rangeCircle.destroy();
					this.game.creepPath.visible = false;
					this.game.turretGroup.add(shipList[shipList.length-1]);
	    		}
	    }
	    else {
	    	placeError();
	    }
	}
//	this.game.world.bringToTop(towerGroup);
	this.game.world.bringToTop(shipGroup);
	this.game.world.bringToTop(crewGroup);

}

function checkOverlap(spriteA, spriteB) {

    var boundsA = spriteA.bounds;
    var boundsB = spriteB.bounds;

    return Phaser.Rectangle.intersects(boundsA, boundsB);

}

MainGame.isHittingDock = function(spriteA){
	//var dock = new Phaser.Rectangle(900, 80, 1000, 125);
	//return Phaser.Rectangle.intersects(spriteA.bounds, this.game.dock.bounds);
	return checkOverlap(spriteA, this.game.dock);
}


function addCrew(){
	var overlapShip = false;
	if(placingCaptain != null){
		for( var i = 0; i < shipList.length; i++){				//check if overlapping an existing ship/tower
			if (checkOverlap(shipList[i],placingCaptain)){
				overlapShip = true;
				if(shipList[i].hasCaptain){						//already have a captain?
					printError("This unit already has a captain")
				}
				else if(shipList[i].isFull){
					printError("This unit has no more available crew slots");
				}
				else{											//if not, add it to crew
					shipList[i].crew.push("captain");
					shipList[i].hasCaptain = true;
					MainGame.crewSpace -= 1;
					MainGame.captainSpace -= 1;
					MainGame.gold -= Math.round((MainGame.cost.captain * MainGame.costMultiplier));						//pay for the captain
					placingCaptain.destroy();
					placingCaptain = null;
					upgradeUnit(shipList[i]);					//update ship/tower stats
					
					removeStats(shipList[i]);					//refresh the stat display
					displayStats(shipList[i]);
				}
			}	
			else{
				
			}
		}
		
	}
	
	else if (placingGunner != null){
		for(var i = 0; i < shipList.length; i++){
			if(checkOverlap(shipList[i], placingGunner)){
				overlapShip = true;
				if(shipList[i].isFull){
					printError("This unit has no more available crew slots");
				}
				else{
					shipList[i].crew.push("gunner");
					MainGame.crewSpace -= 1;
					MainGame.gold -= Math.round((MainGame.cost.gunner * MainGame.costMultiplier));						//pay for gunner
					placingGunner.destroy();
					placingGunner = null;
					upgradeUnit(shipList[i]);					//update ship/tower stats
					
					removeStats(shipList[i]);					//refresh the stat display
					displayStats(shipList[i]);
				}
			}
		}
	}
	
	
	else if (placingLookout != null){
		for(var i = 0; i < shipList.length; i++){
			if(checkOverlap(shipList[i], placingLookout)){
				overlapShip = true;
				if(shipList[i].isFull){
					printError("This unit has no more available crew slots");
				}
				else{
					shipList[i].crew.push("lookout");
					MainGame.crewSpace -= 1;
					MainGame.gold -= Math.round((MainGame.cost.lookout * MainGame.costMultiplier));						//pay for lookout
					placingLookout.destroy();
					placingLookout = null;
					upgradeUnit(shipList[i]);					//update ship/tower stats
					
					removeStats(shipList[i]);					//refresh the stat display
					displayStats(shipList[i]);
					

				}
			}
		}
	}
	

	
}

function upgradeUnit(unit){
	var hasCaptain = false;
	var gunners = 0;
	var lookouts = 0;
	
	
	unit.range = unit.baserange;
	unit.attackDamage = unit.baseattackDamage;
	unit.attackCooldown = unit.baseattackCooldown;
	
	for (var i = 0; i < unit.crew.length; i++){
		if(unit.crew[i] == "captain"){
			hasCaptain = true;
		}
		else if(unit.crew[i] == "gunner"){
			gunners++;
		}
		else if(unit.crew[i] == "lookout"){
			lookouts++;
		}
	}
	
	if(hasCaptain){
		gunners *= 1.40;					//captains double the effectiveness of crews
		lookouts *= 1.40;
	}
	
	
	for (var i = 0; i < gunners; i++){
		unit.range *= 1.05;				//Gunner adds 5% to range
		unit.attackDamage *= 1.20		//Gunner adds 20% to attack damage
		unit.attackCooldown *= 0.8		//Gunner speeds fire rate up by 20%
	}
	
	for (var i = 0; i < lookouts; i++){
		unit.range *= 1.40;				//lookouts add 40% to range (and allow ship/tower to shoot at blimps)
	}
	
	if(hasCaptain){
		unit.range *= 1.1;				//Captain adds 10% to range
		unit.attackDamage *= 1.1;		//Captain adds 10% to attack Damage
		unit.attackCooldown *= 0.9;		//Captain speeds fire rate up by 10%
	}
}





InputManager.prototype.tooClose = function(group, pos, distance){

	var g = CollisionManager.groups[group];

	for( var i = 0; i < g.length; i++){
		
		var obj = g[i];
		
		var d = Math.abs(Math.sqrt((pos.x - obj.x)*(pos.x - obj.x) + (pos.y - obj.y)*(pos.y - obj.y)));

		if(d <= distance){
			return true;
		}
	}

	return false;

}

InputManager.prototype.withinReach = function(pos){
	/*
	var obj = this.game.player;
	var d = Math.abs(Math.sqrt((pos.x - obj.x)*(pos.x - obj.x) + (pos.y - obj.y)*(pos.y - obj.y)));

	if(d <= this.reach){
		return true;
	}
	*/
	return false;
}

InputManager.prototype.emptyTile = function(pos){
	
	var tileX = Math.floor(pos.x / 32);
	var tileY = Math.floor(pos.y / 32);

	var tile = this.game.map.getTile(tileX, tileY, 1);

	if(tile){
		return false;
	}

	return true;
}

InputManager.prototype.handleCursorChange = function(){


}