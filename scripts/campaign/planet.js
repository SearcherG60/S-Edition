Events.on(ClientLoadEvent, () => {
   
    const absoluteZero = new SectorPreset("absoluteZero", Planets.serpulo, 205);
    absoluteZero.localizedName = "Absolute Zero";
    absoluteZero.difficulty = 2;
    absoluteZero.alwaysUnlocked = true;

    const eruption = new SectorPreset("eruption", Planets.serpulo, 3);
    eruption.localizedName = "Eruption";
    eruption.difficulty = 5;
    eruption.alwaysUnlocked = true;

});
