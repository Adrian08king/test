'use strict'

// noinspection JSValidateTypes
/**
 * Far away (Doris Digital, map 17)
 * @type {MulleMapObject}
 */
var MapObject = {}

MapObject.onEnterInner = function () {
  // TODO: Far away sound
  const hasMedal = this.game.mulle.user.Car.hasMedal(2)
  if (!hasMedal) {
    this.game.mulle.user.Car.addMedal(2)
  }
}

export default MapObject
