Events.on(ClientLoadEvent, () => {
   
    const absoluteZero = new SectorPreset("absoluteZero", Planets.serpulo, 2);
    absoluteZero.localizedName = "Absolute Zero";
    absoluteZero.difficulty = 2;
    absoluteZero.alwaysUnlocked = true;

});
