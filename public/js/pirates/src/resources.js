
MainGame.resources = {};

MainGame.resources.BootState = {
	spritesheets: [
		{name: 'spinner', path: '/js/pirates/assets/spritesheets/spinner.png', width: 15, height: 15 }
	]
};

MainGame.resources.LoaderState = {

	  images: [
	  	  //{name: 'tileset', path: '/js/pirates/assets/images/tileset.png'},
	  	{name: 'A1', path: '/js/pirates/assets/images/A1.png'}
	  	, {name: 'A2', path: '/js/pirates/assets/images/A2.png'}
	  	, {name: 'B', path: '/js/pirates/assets/images/B.png'}
	  	, {name: 'C', path: '/js/pirates/assets/images/C.png'}
	  	, {name: 'D', path: '/js/pirates/assets/images/D.png'}

		, {name: 'menu_bg', path: '/js/pirates/assets/images/hud/menuBG.png'}
		, {name: 'statsBG', path: '/js/pirates/assets/images/hud/statsBG.png'}
		, {name: 'buy_crew', path: '/js/pirates/assets/images/hud/buyCrew.png'}
		, {name: 'buy_ships', path: '/js/pirates/assets/images/hud/buyShips.png'}
		, {name: 'ship1button', path: '/js/pirates/assets/images/hud/ship1.png'}
		, {name: 'ship2button', path: '/js/pirates/assets/images/hud/ship2.png'}
		, {name: 'ship3button', path: '/js/pirates/assets/images/hud/ship3.png'}
		, {name: 'tower1button', path: '/js/pirates/assets/images/hud/tower_small.png'}
		, {name: 'tower2button', path: '/js/pirates/assets/images/hud/tower_big.png'}
		, {name: 'tower3button', path: '/js/pirates/assets/images/hud/tower_red_small.png'}
		, {name: 'tower4button', path: '/js/pirates/assets/images/hud/tower_red_big.png'}
		, {name: 'captain', path: '/js/pirates/assets/images/hud/captain_sm.png'}
		, {name: 'gunner', path: '/js/pirates/assets/images/hud/gunner_sm.png'}
		, {name: 'lookout', path: '/js/pirates/assets/images/hud/lookout_sm.png'}
		, {name: 'captain_lg', path: '/js/pirates/assets/images/hud/captain.png'}
		, {name: 'gunner_lg', path: '/js/pirates/assets/images/hud/gunner.png'}
		, {name: 'lookout_lg', path: '/js/pirates/assets/images/hud/lookout.png'}
		, {name: 'player-health', path: '/js/pirates/assets/images/rum.png'}
		, {name: 'super-health', path: '/js/pirates/assets/images/multi_rum.png'}
		, {name: 'celebrate', path: '/js/pirates/assets/images/happypirate.png'}
		, {name: 'beach', path: '/js/pirates/assets/images/Beach.jpg'}
		, {name: 'coin1', path: '/js/pirates/assets/images/coin1.png'}
		, {name: 'coin2', path: '/js/pirates/assets/images/coin2.png'}
		, {name: 'coin3', path: '/js/pirates/assets/images/coin3.png'}
		, {name: 'treasure', path: '/js/pirates/assets/images/treasure.png'}


		, {name: 'bullet', path: '/js/pirates/assets/images/cannonball.png'}
		, {name: 'bullet_pink', path: '/js/pirates/assets/images/bullet_pink.png'}
	  	, {name: 'wave_1', path: '/js/pirates/assets/images/wave_1.png'}


	  	, {name: 'overlay', path: '/js/pirates/assets/images/overlay.png'}

	  	, {name: 'logo', path: '/js/pirates/assets/images/titlepage.png'}
	  	, {name: 'youlose', path: '/js/pirates/assets/images/youlose.png'}
	  	, {name: 'youwin', path: '/js/pirates/assets/images/youwin.png'}
	]
	, spritesheets: [
		  {name: 'rowcreep', path: '/js/pirates/assets/spritesheets/rowing.png', width: 34, height: 30, tiles: -1}
		, {name: 'rowboat_die', path: '/js/pirates/assets/spritesheets/rowboat_die.png', width: 4, height: 4, tiles: -1}
		//, {name: 'enemyship1', path: '/js/pirates/assets/spritesheets/mid-ship.png', width:62, height: 70, tiles: -1}
	 	, {name: 'enemyship2', path: '/js/pirates/assets/spritesheets/sail-ship.png', width: 61, height: 55, tiles: -1}
	 	, {name: 'creepships', path: '/js/pirates/assets/spritesheets/creepships.png', width: 32, height: 32, tiles: 96}

		, {name: 'turret_small', path: '/js/pirates/assets/spritesheets/tower_small.png', width: 32, height: 53, tiles: -1}
		, {name: 'turret_big', path: '/js/pirates/assets/spritesheets/tower_big.png', width: 64, height: 107, tiles: -1}
		, {name: 'turret_progress', path: '/js/pirates/assets/spritesheets/turret_progress.png', width: 9, height: 9, tiles: -1}
		, {name: 'turret_health_bar', path: '/js/pirates/assets/spritesheets/turret_health_bar.png', width: 32, height: 4, tiles: -1}

		, {name: 'save_button', path: '/js/pirates/assets/spritesheets/save-button.png', width: 50, height: 51}
		, {name: 'pause_button', path: '/js/pirates/assets/spritesheets/pause-button.png', width: 71, height: 75}
		, {name: 'music_off', path: '/js/pirates/assets/spritesheets/musicoff.png', width: 71, height:75}
		, {name: 'buy_btn', path: '/js/pirates/assets/spritesheets/buy_button.png', width: 33, height: 34, tiles: -1}
		, {name: 'ready_button', path: '/js/pirates/assets/spritesheets/ready_button.png', width: 50, height: 52, tiles: -1}
		, {name: 'button_page', path: '/js/pirates/assets/spritesheets/Button.png', width: 202, height: 100, tiles: -1}
		, {name: 'button_small', path: '/js/pirates/assets/spritesheets/ButtonSmall.png', width: 101, height: 50, tiles: -1}
		, {name: 'close_btn', path: '/js/pirates/assets/spritesheets/Button-close.png', width: 28, height: 30, tiles: -1}
		, {name: 'popup', path: '/js/pirates/assets/spritesheets/instructions1.png', width: 676, height: 617, tiles: -1}
		, {name: 'instruct2', path: '/js/pirates/assets/spritesheets/instructions2.png', width: 676, height: 617, tiles: -1}
		, {name: 'instruct3', path: '/js/pirates/assets/spritesheets/instructions3.png', width: 676, height: 617, tiles: -1}
		, {name: 'instruct4', path: '/js/pirates/assets/spritesheets/instructions4.png', width: 676, height: 617, tiles: -1}
		, {name: 'rightarrow', path: '/js/pirates/assets/spritesheets/rightarrow.png', width: 28, height: 29, tiles: -1}
		, {name: 'leftarrow', path: '/js/pirates/assets/spritesheets/leftarrow.png', width: 28, height: 29, tiles: -1}
		, {name: 'ship1', path: '/js/pirates/assets/spritesheets/ship.png', width: 150, height: 150, tiles: -1}
		, {name: 'ship2', path: '/js/pirates/assets/spritesheets/2nd_ship.png', width: 160, height: 160, tiles: -1}
		, {name: 'ship3', path: '/js/pirates/assets/spritesheets/3rd_ship.png', width: 150, height: 150, tiles: -1}

	]

	, texturePacker: [
		  {name: 'enemyship1', sspath: '/js/pirates/assets/spritesheets/enemyship1.png', jsonpath: '/js/pirates/assets/spritesheets/enemyship1.json'}
		, {name: 'scroll', sspath: '/js/pirates/assets/spritesheets/scroll.png', jsonpath: '/js/pirates/assets/spritesheets/scroll.json'}
		, {name: 'wavestart', sspath: '/js/pirates/assets/spritesheets/wavestarting.png', jsonpath: '/js/pirates/assets/spritesheets/wavestarting.json'}
	]

	, tilemaps: [
		  {name: 'map1', path: '/js/pirates/assets/tilemaps/level1.json'}
	]
	, audio: [
		  {name: 'turret_small_sfx', path: '/js/pirates/assets/audio/turret_small.wav'}
		, {name: 'turret_big_sfx', path: '/js/pirates/assets/audio/turret_big.wav'}
		, {name: 'baddie_die_sfx', path: '/js/pirates/assets/audio/baddie_die.wav'}
		/*, {name: 'menu_music', path: '/js/pirates/assets/audio/spiff_tune_to_the_moon.mp3'}*/
		, {name: 'game_music', path: '/js/pirates/assets/audio/pirates.mp3'}
	]
};
