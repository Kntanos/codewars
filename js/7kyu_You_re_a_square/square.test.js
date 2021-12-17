const Thermostat = require('./thermostat')

describe ('getTemperature', () => {
  it ('returns the current set temperature', () => {
    const thermostat = new Thermostat();

    expect(thermostat.getTemperature()).toEqual(20);
  });
}); 