Events.on(ClientLoadEvent, () => {
        var arrs = [
        [Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.darksandWater, Blocks.stone, Blocks.stone],
        [Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.darksand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.darksandWater, Blocks.stone, Blocks.stone, Blocks.stone],
        [Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.sand, Blocks.salt, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.darksandWater, Blocks.stone, Blocks.stone, Blocks.stone],
        [Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.salt, Blocks.salt, Blocks.salt, Blocks.sand, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.snow, Blocks.iceSnow, Blocks.ice],
        [Blocks.deepwater, Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.salt, Blocks.sand, Blocks.sand, Blocks.basalt, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice],
        [Blocks.deepwater, Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.grass, Blocks.iceSnow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.snow, Blocks.ice],
        [Blocks.deepwater, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.grass, Blocks.grass, Blocks.snow, Blocks.basalt, Blocks.basalt, Blocks.basalt, Blocks.ice, Blocks.snow, Blocks.ice],
        [Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.darksand, Blocks.basalt, Blocks.grass, Blocks.basalt, Blocks.hotrock, Blocks.basalt, Blocks.ice, Blocks.snow, Blocks.ice, Blocks.ice],
        [Blocks.darksandWater, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.grass, Blocks.dirt, Blocks.snow, Blocks.basalt, Blocks.basalt, Blocks.ice, Blocks.snow, Blocks.ice, Blocks.ice],
        [Blocks.darksandWater, Blocks.darksand, Blocks.darksand, Blocks.dirt, Blocks.ice, Blocks.ice, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice],
        [Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.mud, Blocks.mud, Blocks.ice, Blocks.ice, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice],
        [Blocks.darksandWater, Blocks.darksandWater, Blocks.darksand, Blocks.dirt, Blocks.grass, Blocks.dirt, Blocks.iceSnow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice],
        [Blocks.darksandWater, Blocks.darksand, Blocks.snow, Blocks.ice, Blocks.iceSnow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice]
    ];
    const serpiloGenerator = extend(SerpuloPlanetGenerator, {
        getBlock(p){
            this.arr = arrs;
            this.super$getBlock(p);
        }
    });
    serpiloGenerator.arr = arrs;
    const serpilo = new Planet("serpilo", Planets.sun, 4, 0.8);
    serpilo.generator = serpiloGenerator;
    serpilo.mesh = new HexMesh(serpilo, 8);
    serpilo.orbitRadius = 15;
    serpilo.orbitTime = 1.5 * 60;
    serpilo.rotateTime = 60;
    serpilo.bloom = true;
    serpilo.accessible = true;
    serpilo.hasAtmosphere = true;
    serpilo.atmosphereColor = Blocks.grass.mapColor.cpy().mul(Pal.heal);
    serpilo.atmosphereRadIn = 0.075;
    serpilo.atmosphereRadOut = 0.3;
    serpilo.startSector = 0;
    serpilo.localizedName = "Serpilo";









    const eruption = new SectorPreset("eruption", serpilo, 24);
    eruption.captureWave = 20;
    eruption.localizedName = "Eruption";
    eruption.difficulty = 8;
    eruption.alwaysUnlocked = true;


    const absoluteZero = new SectorPreset("absoluteZero", serpilo, 0);
    absoluteZero.localizedName = "Absolute Zero";
    absoluteZero.difficulty = 3;
    absoluteZero.alwaysUnlocked = true;

    const magicalGrounds = new SectorPreset("magicalGrounds", serpilo, 75);
    magicalGrounds.localizedName = "Magical Grounds";
    magicalGrounds.difficulty = 5;
    magicalGrounds.alwaysUnlocked = true;



});
