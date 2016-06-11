
/*
 *
 *		NOTE: These waves are the 'actual' waves for the final version of the game
 *			  Anyone wanting to test different things / drastically change waves should
 *            use the testwaves.js file.  You can toggle which set of waves are used in
 *            
 *
*/



MainGame.waves = [
	{
		  rowboat: 12				//wave 1	intro wave (baseHP, baseSpeed, baseSpawn)		Gold Earned: 120
		, smallSail: 0
		, midSail: 0
		, sunSail: 0
		, midBossWhite: 0
		, midBossBlack: 0
		, bigBoss: 0
		, blimp: 0
		, moment: 30 				//How many creeps can be on the screen at once (probably just keep at total # of creeps in stage)
		, spawnrate: 1				//How many times faster than the 'normal' spawn rate this wave should spawn creeps.
		, hpmultiplier: 1			//How many times the base unit health is multiplied by for this wave
		, speedmultiplier: 1		//how many times the base unit speed is multiplied by for this wave
		, unitspeed: {rowboat: 1}	//Use unitspeed if you want any specific type of ship to have different speed multipler than rest of wave
		, unithp: {rowboat: 1}		//use unithp if you want any specific type of ship to have a different health multipler than the rest of wave
	}
	,{
		  rowboat: 15				//wave 2	new unit smallSail (hp*1.2)						Gold Earned: 225
		, smallSail: 5
		, midSail: 0
		, sunSail: 0
		, midBossWhite: 0
		, midBossBlack: 0
		, bigBoss: 0
		, blimp: 0
		, moment: 20	
		, spawnrate: 1
		, hpmultiplier: 1.2
		, speedmultiplier: 1					//unitspeed is needed only if you want to specifically change the unit's speed compared to everything else in wave.
		, note: "New unit - the small Sail!"
	}
	,{
		  rowboat: 15				//wave 3  - Fast spawn rate wave  (rowhp*0.5, spawn*3)  	Gold Earned: 225
		, smallSail: 5
		, midSail: 0
		, sunSail: 0
		, midBossWhite: 0
		, midBossBlack: 0
		, bigBoss: 0
		, blimp: 0
		, moment: 20
		, spawnrate: 3
		, hpmultiplier: 1
		, speedmultiplier: 1
		, unithp: {rowboat: 0.5}
		, note: "Fast spawns this round!"
	}
	,{
		  rowboat: 20				//wave 4 - really fast rowboats and slower smallsails (spawn*2)	Gold Earned: 425	
		, smallSail: 15 
		, midSail: 0
		, sunSail: 0
		, midBossWhite: 0
		, midBossBlack: 0
		, bigBoss: 0
		, blimp: 0
		, moment: 26 
		, spawnrate: 2
		, hpmultiplier: 1
		, speedmultiplier: 1
		, unitspeed: {rowboat: 3, smallSail: 0.7}
		, note: "Fast Rowboats this round!"
	}
	,{
		  rowboat: 10				//wave 5			Gold Earned: 425
		, smallSail: 15
		, midSail: 5
		, sunSail: 0
		, midBossWhite: 0
		, midBossBlack: 0
		, bigBoss: 0
		, blimp: 0
		, moment: 28 	
		, spawnrate: 2
		, hpmultiplier: 1.3
		, speedmultiplier: 1
		,note: "New unit -- the mid Sail!"
	}
	,{
		  rowboat: 5				//wave 6		
		, smallSail: 20
		, midSail: 10
		, sunSail: 0
		, midBossWhite: 0
		, midBossBlack: 0
		, bigBoss: 0
		, blimp: 0
		, moment: 35 
		, spawnrate: 3
		, hpmultiplier: 1.3
		, speedmultiplier: 2
		, note: "Faster spawning and movement!"
	}
	,{
		  rowboat: 40				//wave 7
		, smallSail: 0
		, midSail: 0
		, sunSail: 0
		, midBossWhite: 0
		, midBossBlack: 0
		, bigBoss: 0
		, blimp: 0
		, moment: 25 
		, spawnrate: 6
		, hpmultiplier: 1.5
		, speedmultiplier: 1
		, note: "Onslaught of rowboats!"
	}
	,{
		  rowboat: 0				//wave 8		First MidBoss?
		, smallSail: 0
		, midSail: 0
		, sunSail: 0
		, midBossWhite: 3
		, midBossBlack: 0
		, bigBoss: 0
		, blimp: 0
		, moment: 3 
		, spawnrate: 1
		, hpmultiplier: 1
		, speedmultiplier: 1
		, note: "Meed the Mid Boss!"
	}
	,{
		  rowboat: 0				//wave 9
		, smallSail: 10
		, midSail: 10
		, sunSail: 10
		, midBossWhite: 0
		, midBossBlack: 0
		, bigBoss: 0
		, blimp: 0
		, moment: 12 	
		, spawnrate: 1
		, hpmultiplier: 1.3
		, speedmultiplier: 1.1
		, note: "New unit -- the sun Sail!"
	}
	,{
		  rowboat: 20			//wave 10
		, smallSail: 0
		, midSail: 0
		, sunSail: 0
		, midBossWhite: 2
		, midBossBlack: 0
		, bigBoss: 0
		, blimp: 0
		, moment: 12 
		, spawnrate: 1.4
		, hpmultiplier: 3
		, speedmultiplier: 1
		, unitspeed: {rowboat: 3}
		, unithp: {rowboat: 2}
		, note: "Assassin rowboats and sea tanks"
	}
	,{
		  rowboat: 0				//wave 11
		, smallSail: 5 
		, midSail: 15
		, sunSail: 15
		, midBossWhite: 0
		, midBossBlack: 0
		, bigBoss: 0
		, blimp: 2
		, moment: 12 
		, spawnrate: 1.5
		, hpmultiplier: 1.5
		, speedmultiplier: 1.2
		, unitspeed: {blimp: 1}
		, unithp: {blimp: 1}
		, note: "LOOKOUT! That thing is flying! (Seriously...lookout!)"
	}
	,{
		  rowboat: 0				//wave 12
		, smallSail: 5 
		, midSail: 15
		, sunSail: 15
		, midBossWhite: 0
		, midBossBlack: 2
		, bigBoss: 0
		, blimp: 5
		, moment: 12 
		, spawnrate: 1.5
		, hpmultiplier: 3
		, speedmultiplier: 1
		, unitspeed: {blimp: 1}
		, unithp: {blimp: 1.5}
		, note: "Blimps and and Armored Ships (lots of health)."
	}

	,{
		  rowboat: 0				//wave 13
		, smallSail: 0 
		, midSail: 0
		, sunSail: 0
		, midBossWhite: 3
		, midBossBlack: 2
		, bigBoss: 0
		, blimp: 0
		, moment: 12 
		, spawnrate: 4
		, hpmultiplier: 4
		, speedmultiplier: 1
		, note: "Mid Boss centipede!"
	}
	,{
		  rowboat: 20				//wave 14
		, smallSail: 20 
		, midSail: 10
		, sunSail: 15
		, midBossWhite: 2
		, midBossBlack: 2
		, bigBoss: 0
		, blimp: 8
		, moment: 50
		, spawnrate: 2.2
		, hpmultiplier: 3
		, speedmultiplier: 1.5
		, unitspeed: {rowboat: 2.5}
		, note: "everything and the kitchen sink!"
	}
	,{
		  rowboat: 0				//Ending Wave
		, smallSail: 0
		, midSail: 0
		, sunSail: 0
		, midBossWhite: 0
		, midBossBlack: 0
		, bigBoss: 1
		, blimp: 0
		, moment: 12 
		, spawnrate: 3
		, hpmultiplier: 2
		, speedmultiplier: 1
		, unithp: {bigBoss: 37}
		, note: "Final Wave...Meet Big Boss"
	}
	
];