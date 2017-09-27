var ControlTower = function(name, weatherReport){
  this.name = name;
  this.weatherReport = weatherReport;
  this.planes = [];
}

ControlTower.prototype.land = function(plane){
  if (this.weatherReport.isStormy === true){
    return 'weather is stormy, cannot land plane';
  } else {
  this.planes.push(plane)
  plane.flying = false;
};
};

ControlTower.prototype.takeOff = function(plane){
  this.planes.pop(plane)
  plane.flying = true;
}

var isStormy = [true, false][Math.floor(Math.random() * [true, false].length)]

this.landed = true;
