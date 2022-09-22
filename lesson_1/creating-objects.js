let raceCar = {
  make: 'BMW',
  _fuelLevel: 0.5,
  engineOn: false,

  startEngine: function () {
    raceCar.engineOn = true;
  },

  drive: function () {
    raceCar._fuelLevel -= 0.1;
  },

  stopEngine: function () {
    raceCar.engineOn = false;
  },

  refuel: function (percent) {
    if (raceCar._fuelLevel + percent / 100 <= 1) {
      raceCar._fuelLevel += percent / 100;
    } else {
      raceCar._fuelLevel = 1;
    }
  },

  get fuelLevel() {
    return +this._fuelLevel.toFixed(1);
  }
};
