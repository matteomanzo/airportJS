describe('Plane', function() {

  beforeEach(function() {
    plane = new Plane();
  });

  it('is flying when created', function() {
    expect(plane.isFlying()).toBe(true);
  });

  it('can land', function() {
    plane.land();
    expect(plane.isFlying()).toBe(false);
  });

  it('can take off', function() {
    plane.land();
    plane.takeOff();
    expect(plane.isFlying()).toBe(true);
  });

  it('cannot take off if it is already flying', function() {
    expect(function() { plane.takeOff() }).toThrow(new Error('You are already flying!'))
  });

  it('cannot land if it is not flying', function() {
    plane.land();
    expect(function() { plane.land() }).toThrow(new Error('You are not flying!'))
  });
});
