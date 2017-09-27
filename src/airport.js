var ControlTower = function(name){
  this.name = name;
  this.planes = [];
}

var Plane = function(){
  this.flying = true
}

ControlTower.prototype.land = function(plane){
  if (isStormy === true){
    return 'weather is stormy, cannot land plane';
  } else {
  this.planes.push(this)
  plane.flying = false;
};
};

ControlTower.prototype.takeOff = function(plane){
  this.planes.pop(this)
  plane.flying = true;
}

var isStormy = [true, false][Math.floor(Math.random() * [true, false].length)]

this.landed = true;
