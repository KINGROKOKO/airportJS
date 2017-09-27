describe('ControlTower', function(){

var controlTower;
// var plane;
var plane;
var weather;

beforeEach(function(){
  weather = {isStormy: false}
  heathrow = new ControlTower('heathrow', weather);
  plane = new Plane();
});

  describe('creates a', function(){

    it('new control tower', function(){
      expect(heathrow.name).toEqual('heathrow')
    });
  });

   it('new plane created and flying', function(){
     expect(plane.flying).toEqual(true)
   });

    it('lands a plane and changes flying to false', function(){
    heathrow.land(plane)
    expect(plane.flying).toEqual(false)

});

    it('lands a plane and adds plane to airport runway', function(){
    heathrow.land(plane)
    expect(plane.flying).toEqual(false)
    expect(heathrow.planes).toEqual([plane])
});

    it('takes off a plane and changes flying to true', function(){
    heathrow.land(plane)
    heathrow.takeOff(plane)
    expect(plane.flying).toEqual(true)

});

    it('lands a plane and removes plane from airport runway', function(){
    heathrow.land(plane)
    heathrow.takeOff(plane)
    expect(heathrow.planes).toEqual([])
});

    it('prevent landing a plane if weather is stormy', function(){
    jfk = new ControlTower('JFK', {isStormy:true})
    jfk.land(plane)
    expect(jfk.planes).toEqual([]);
  });
});
