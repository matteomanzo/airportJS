describe('Plane', function() {

  beforeEach(function() {
    plane = new Plane();
  });

  it('is flying when created', function() {
    expect(plane.flying).toBe(true);
  });
  //
  // it('can land', function() {
  //   plane.land();
  //   expect(plane.isFlying()).toBe(false);
  // });
});