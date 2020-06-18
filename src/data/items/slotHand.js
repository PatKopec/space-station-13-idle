export default {
	crowbar: {
		name: "Crowbar",
		sellPrice: 1,
		equipmentSlot: "hand",
		icon: require("@/assets/art/fabrication/crowbar.png"),
		overlay: require("@/assets/art/fabrication/crowbar_overlay.png"),
	},
	sord: {
		name: "SORD",
		sellPrice: 420,
		icon: require("@/assets/art/combat/items/sord.png"),
		overlay: require("@/assets/art/combat/items/sord_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: -20,
			evasion: -30,
			precision: -40,
			attackSpeed: .5,
			power: 80,
		},
		requires: {
			precision: 3,
			meleePower: 2
		}
	},
	meleeB1: {
		name: "Rolling Pin",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_b1.png"),
		overlay: require("@/assets/art/combat/items/melee_b1_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 3,
			precision: 3,
			power: 6,
			evasion: -3,
			attackspeed: 2,
		},
		requires: {
			meleePower: 1
		}
	},
	meleeB2: {
		name: "Baseball Bat",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_b2.png"),
		overlay: require("@/assets/art/combat/items/melee_b2_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 7,
			precision: 7,
			power: 14,
			evasion: -7,
			attackspeed: 2,
		},
		requires: {
			meleePower: 10
		}
	},
	meleeB3: {
		name: "Null Rod",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_b3.png"),
		overlay: require("@/assets/art/combat/items/melee_b3_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 11,
			precision: 11,
			power: 22,
			evasion: -11,
			attackspeed: 2,
		},
		requires: {
			meleePower: 20
		}
	},
	meleeB4: {
		name: "Truncheon",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_b4.png"),
		overlay: require("@/assets/art/combat/items/melee_b4_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 15,
			precision: 15,
			power: 30,
			evasion: -15,
			attackspeed: 2,
		},
		requires: {
			meleePower: 25
		}
	},
	meleeB5: {
		name: "Air Tank",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_b5.png"),
		overlay: require("@/assets/art/combat/items/melee_b5_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 19,
			precision: 19,
			power: 38,
			evasion: -19,
			attackspeed: 2,
		},
		requires: {
			meleePower: 30
		}
	},
	meleeB6: {
		name: "Fire Extinquisher",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_b6.png"),
		overlay: require("@/assets/art/combat/items/melee_b6_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 23,
			precision: 23,
			power: 46,
			evasion: -23,
			attackspeed: 2,
		},
		requires: {
			meleePower: 35
		}
	},
	meleeB7: {
		name: "Jackhammer",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_b7.png"),
		overlay: require("@/assets/art/combat/items/melee_b7_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 27,
			precision: 27,
			power: 54,
			evasion: -27,
			attackspeed: 2,
		},
		requires: {
			meleePower: 40
		}
	},
	meleeB8: {
		name: "Chain Of Command",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_b8.png"),
		overlay: require("@/assets/art/combat/items/melee_b8_overlay_anim.gif"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 31,
			precision: 31,
			power: 62,
			evasion: -31,
			attackspeed: 2,
		},
		requires: {
			meleePower: 45
		}
	},
	meleeB9: {
		name: "Stun Baton",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_b9.png"),
		overlay: require("@/assets/art/combat/items/melee_b9_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 35,
			precision: 35,
			power: 70,
			evasion: -35,
			attackspeed: 2,
		},
		requires: {
			meleePower: 50
		}
	},
	meleeC1: {
		name: "Kitchen Fork",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_c1.png"),
		overlay: require("@/assets/art/combat/items/melee_c1_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: 1,
			precision: 1,
			attackSpeed: 2,
			power: 3,
		},
		requires: {
			precision: 5
		}
	},
	meleeC2: {
		name: "Kitchen Knife",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_c2.png"),
		overlay: require("@/assets/art/combat/items/melee_c2_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: 5,
			precision: -5,
			attackSpeed: 2,
			power: 10,
		},
		requires: {
			precision: 10
		}
	},
	meleeC3: {
		name: "Butcher Cleaver",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_c3.png"),
		overlay: require("@/assets/art/combat/items/melee_c3_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: 5,
			precision: -5,
			attackSpeed: 2,
			power: 10,
		},
		requires: {
			precision: 15
		}
	},
	meleeC4: {
		name: "Spear",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_c4.png"),
		overlay: require("@/assets/art/combat/items/melee_c4_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: 5,
			precision: -5,
			attackSpeed: 2,
			power: 10,
		},
		requires: {
			precision: 25
		}
	},
	meleeC5: {
		name: "Fire Axe",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_c5.png"),
		overlay: require("@/assets/art/combat/items/melee_c5_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: 5,
			precision: -5,
			attackSpeed: 2,
			power: 10,
		},
		requires: {
			precision: 30
		}
	},
	meleeC6: {
		name: "Chainsaw",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_c6.png"),
		overlay: require("@/assets/art/combat/items/melee_c6_overlay_anim.gif"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: 5,
			precision: -5,
			attackSpeed: 2,
			power: 10,
		},
		requires: {
			precision: 40
		}
	},
	meleeC7: {
		name: "Officer Sabre",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_c7.png"),
		overlay: require("@/assets/art/combat/items/melee_c7_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 35,
			evasion: 5,
			precision: -5,
			attackSpeed: 2,
			power: 10,
		},
		requires: {
			precision: 50
		}
	},
	meleeT1: {
		name: "Toolbox",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_t1.png"),
		overlay: require("@/assets/art/combat/items/melee_t1_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			precision: 2,
			power: 3,
			evasion: 0,
			attackspeed: 2,
		},
		requires: {
			precision: 1,
			meleePower: 1
		},
	},
	meleeT2: {
		name: "Toolbox",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_t2.png"),
		overlay: require("@/assets/art/combat/items/melee_t2_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 7,
			precision: 3,
			power: 4,
			evasion: 0,
			attackspeed: 2,
		},
		requires: {
			precision: 10,
			meleePower: 10
		}
	},
	meleeT3: {
		name: "Toolbox",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_t3.png"),
		overlay: require("@/assets/art/combat/items/melee_t3_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 14,
			precision: 5,
			power: 9,
			evasion: 0,
			attackspeed: 2,
		},
		requires: {
			precision: 20,
			meleePower: 20
		}
	},
	meleeT4: {
		name: "Toolbox",
		sellPrice: 21,
		icon: require("@/assets/art/combat/items/melee_t4.png"),
		overlay: require("@/assets/art/combat/items/melee_t4_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 21,
			precision: 7,
			power: 14,
			evasion: 0,
			attackspeed: 2,
		},
		requires: {
			precision: 30,
			meleePower: 30
		}
	},
	meleeT5: {
		name: "Toolbox",
		sellPrice: 28,
		icon: require("@/assets/art/combat/items/melee_t5.png"),
		overlay: require("@/assets/art/combat/items/melee_t5_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 28,
			precision: 9,
			power: 19,
			evasion: 0,
			attackspeed: 2,
		},
		requires: {
			precision: 40,
			meleePower: 40
		}
	},
	meleeT6: {
		name: "Toolbox",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_t6_anim.gif"),
		overlay: require("@/assets/art/combat/items/melee_t6_overlay.png"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 35,
			precision: 11,
			power: 24,
			evasion: 0,
			attackspeed: 2,
		},
		requires: {
			precision: 50,
			meleePower: 50
		}
	},
	meleeE1: {
		name: "Welding Tool",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_e1.png"),
		overlay: require("@/assets/art/combat/items/melee_e1_overlay_anim.gif"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: -5,
			precision: 5,
			attackSpeed: 2,
			power: 10,
			damageType: "burn"
		},
		requires: {
			precision: 3,
			meleePower: 2
		}
	},
	meleeE2: {
		name: "Handheld Welder",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_e2.png"),
		overlay: require("@/assets/art/combat/items/melee_e2_overlay_anim.gif"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: -5,
			precision: 5,
			attackSpeed: 2,
			power: 10,
			damageType: "burn"
		},
		requires: {
			precision: 3,
			meleePower: 2
		}
	},
	meleeE3: {
		name: "Energy Dagger",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_e3_anim.gif"),
		overlay: require("@/assets/art/combat/items/melee_e3_anim_overlay.gif"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: -5,
			precision: 5,
			attackSpeed: 2,
			power: 10,
			damageType: "burn"
		},
		requires: {
			precision: 3,
			meleePower: 2
		}
	},
	meleeE4: {
		name: "Energy Sword",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_e4_anim.gif"),
		overlay: require("@/assets/art/combat/items/melee_e4_overlay_anim.gif"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: -5,
			precision: 5,
			attackSpeed: 2,
			power: 10,
			damageType: "burn"
		},
		requires: {
			precision: 3,
			meleePower: 2
		}
	},
	meleeE5: {
		name: "Dual Energy Sword",
		sellPrice: 30,
		icon: require("@/assets/art/combat/items/melee_e5_anim.gif"),
		overlay: require("@/assets/art/combat/items/melee_e5_overlay.gif"),
		equipmentSlot: "hand",
		stats: {
			maxHealth: 5,
			evasion: -5,
			precision: 5,
			attackSpeed: 2,
			power: 10,
			damageType: "burn"
		},
		requires: {
			precision: 3,
			meleePower: 2
		}
	},
	mechWeaponClaw: {
		name: "Mech Claw",
		sellPrice: 0,
		equipmentSlot: "hand",
		icon: require("@/assets/art/engineering/meleesmall.png"),
		restrictions: ["mech"],
		stats: {
			power: 10,
			attackSpeed: 4
		}
	},
	gunE1: {
		name: "Kinetic Accelerator",
		sellPrice: 325,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gune_PKA.png"),
		overlay: require("@/assets/art/combat/items/gune_PKA_overlay.png"),
		ammoType: "energized",
		stats: {
			attackSpeed: 3,
			evasion: 1,
			power: 2,
			precision: 0
		},
		requires: {
			rangedPower: 1
		}
	},
	gunE2: {
		name: "Advanced Kinetic Accelerator",
		sellPrice: 400,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gune_PKA+.png"),
		overlay: require("@/assets/art/combat/items/gune_PKA+_overlay.png"),
		ammoType: "energized",
		stats: {
			attackSpeed: 3,
			evasion: 1,
			power: 3,
			precision: 0
		},
		requires: {
			rangedPower: 15
		}
	},
	gunE3: {
		name: "Plasma Cutter",
		sellPrice: 750,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gune_cutter.png"),
		overlay: require("@/assets/art/combat/items/gune_cutter_overlay.png"),
		ammoType: "energized",
		stats: {
			attackSpeed: 3,
			evasion: 1,
			power: 3,
			precision: 1
		},
		requires: {
			rangedPower: 20
		}
	},	
	gunE4: {
		name: "Laser Gun",
		sellPrice: 1275,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gune_laser.png"),
		overlay: require("@/assets/art/combat/items/gune_laser_overlay.png"),
		ammoType: "energized",
		stats: {
			attackSpeed: 3,
			evasion: 2,
			power: 4,
			precision: 2
		},
		requires: {
			rangedPower: 30
		}
	},
	gunE5: {
		name: "Tesla Rifle",
		sellPrice: 1550,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gune_tesla.png"),
		overlay: require("@/assets/art/combat/items/gune_tesla_overlay.png"),
		ammoType: "energized",
		stats: {
			attackSpeed: 3,
			evasion: 2,
			power: 5,
			precision: 2
		},
		requires: {
			rangedPower: 35
		}
	},
	gunE6: {
		name: "Energy Gun",
		sellPrice: 1900,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gune_energy.png"),
		overlay: require("@/assets/art/combat/items/gune_energy_overlay.png"),
		ammoType: "energized",
		stats: {
			attackSpeed: 3,
			evasion: 2,
			power: 5,
			precision: 3
		},
		requires: {
			rangedPower: 40
		}
	},
	gunE7: {
		name: "Wartime Rifle",
		sellPrice: 2250,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gune_caplaser.png"),
		overlay: require("@/assets/art/combat/items/gune_caplaser_overlay.png"),
		ammoType: "energized",
		stats: {
			attackSpeed: 3,
			evasion: 3,
			power: 6,
			precision: 4
		},
		requires: {
			rangedPower: 50
		}
	},
	gunB1: {
		name: "Pipe Shotgun",
		sellPrice: 210,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gunb_shot1.png"),
		overlay: require("@/assets/art/combat/items/gunb_shot1_overlay.png"),
		ammoType: "ballistic",
		stats: {
			attackSpeed: 7,
			evasion: 3,
			power: 2,
			precision: 0
		},
		requires: {
			rangedPower: 1
		}
	},
	gunB2: {
		name: "Double Barreled Shotgun",
		sellPrice: 360,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gunb_shot2.png"),
		overlay: require("@/assets/art/combat/items/gunb_shot4_overlay.png"),
		ammoType: "ballistic",
		stats: {
			attackSpeed: 6,
			evasion: 4,
			power: 3,
			precision: 0
		},
		requires: {
			rangedPower: 20
		}
	},
	gunB3: {
		name: "Cycling Shotgun",
		sellPrice: 545,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gunb_shot3.png"),
		overlay: require("@/assets/art/combat/items/gunb_shot4_overlay.png"),
		ammoType: "ballistic",
		stats: {
			attackSpeed: 5,
			evasion: 5,
			power: 3,
			precision: 0
		},
		requires: {
			rangedPower: 25
		}
	},	
	gunB4: {
		name: "Riot Shotgun",
		sellPrice: 980,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gunb_shot4.png"),
		overlay: require("@/assets/art/combat/items/gunb_shot4_overlay.png"),
		ammoType: "ballistic",
		stats: {
			attackSpeed: 4,
			evasion: 7,
			power: 4,
			precision: 0
		},
		requires: {
			rangedPower: 35
		}
	},
	gunB5: {
		name: "Sawed Off Shotgun",
		sellPrice: 1140,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gunb_shot5.png"),
		overlay: require("@/assets/art/combat/items/gunb_shot6_overlay.png"),
		ammoType: "ballistic",
		stats: {
			attackSpeed: 3,
			evasion: 8,
			power: 4,
			precision: 0
		},
		requires: {
			rangedPower: 40
		}
	},
	gunB6: {
		name: "Compact Shotgun",
		sellPrice: 1395,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gunb_shot6.png"),
		overlay: require("@/assets/art/combat/items/gunb_shot6_overlay.png"),
		ammoType: "ballistic",
		stats: {
			attackSpeed: 2,
			evasion: 9,
			power: 5,
			precision: 0
		},
		requires: {
			rangedPower: 45
		}
	},
	gunB7: {
		name: "Combat Shotgun",
		sellPrice: 1520,
		equipmentSlot: "hand",
		icon: require("@/assets/art/combat/items/gunb_shot7.png"),
		overlay: require("@/assets/art/combat/items/gunb_shot7_overlay.png"),
		ammoType: "ballistic",
		stats: {
			attackSpeed: 1,
			evasion: 10,
			power: 5,
			precision: 0
		},
		requires: {
			rangedPower: 50
		}
	},
	mechGunEnergyRifle: {
		name: "Mech Energy Rifle",
		sellPrice: 0,
		equipmentSlot: "hand",
		icon: require("@/assets/art/engineering/gunenergy.png")
	},
	mechWeaponDrill: {
		name: "Mech Drill",
		sellPrice: 0,
		equipmentSlot: "hand",
		icon: require("@/assets/art/engineering/meleebig.png")
	},
	mechGunRifle: {
		name: "Mounted Rifle",
		sellPrice: 0,
		equipmentSlot: "hand",
		icon: require("@/assets/art/engineering/gunsmall.png"),
		restrictions: ["mech"],
		ammoType: "ballistic",
		stats: {
			attackSpeed: 4,
			power: 15,
			precision: 5
		}
	},
	mechGunRifle: {
		name: "Mounted Rifle",
		sellPrice: 0,
		equipmentSlot: "hand",
		icon: require("@/assets/art/engineering/gunsmall.png"),
		ammoType: "energized",
		stats: {
			attackSpeed: 4,
			power: 15,
			precision: 5
		},
		requires: {
			rangedPower: 1
		}
	},
}