describe('ControlTower', function(){

var controlTower;
// var plane;

beforeEach(function(){
  heathrow = new ControlTower('heathrow');
  plane = new Plane();
});

  describe('creates a', function(){

    it('new control tower', function(){
    // heathrow = new ControlTower('heathrow');
    expect(heathrow.name).toEqual('heathrow')
    });
  });

   it('new plane created and flying', function(){
  //  plane = new Plane();
   expect(plane.flying).toEqual(true)
 });
});

    it('lands a plane and changes flying to false', function(){
    // plane = new Plane();
    // heathrow = new ControlTower('heathrow');
    heathrow.land(plane)
    expect(plane.flying).toEqual(false)

});

    it('lands a plane and adds plane to airport runway', function(){
    // plane = new Plane();
    // heathrow = new ControlTower('heathrow');
    heathrow.land(plane)
    expect(plane.flying).toEqual(false)
    expect(heathrow.planes).toEqual([plane])
});

    it('takes off a plane and changes flying to true', function(){
    // plane = new Plane();
    // heathrow = new ControlTower('heathrow');
    heathrow.land(plane)
    heathrow.takeOff(plane)
    expect(plane.flying).toEqual(true)

});

    it('lands a plane and removes plane from airport runway', function(){
    // plane = new Plane();
    // heathrow = new ControlTower('heathrow');
    heathrow.land(plane)
    heathrow.takeOff(plane)
    expect(heathrow.planes).toEqual([])
});

    it('prevent landing a plane if weather is stormy', function(){
    // plane = new Plane();
    // heathrow = new ControlTower('heathrow');
    heathrow.land(plane)
    expect(heathrow.planes).toEqual([]);
});
