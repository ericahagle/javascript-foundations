var assert = require('chai').assert;
var { createDragon, greetRider, eat, findFireBreathers} = require('../exercises/dragon');

describe('Dragon', function() {

  it('should be able to create a dragon with a name', function() {
    var dragon = createDragon('Jeff');
    console.log("dragon with a name", dragon);
    assert.equal(dragon.name, 'Jeff');
  });

  it('should be able to have a different name', function() {
    var dragon = createDragon('Louisa');
    console.log("dragon with a different name", dragon);
    assert.equal(dragon.name, 'Louisa');
  });

  it('should have a rider', function() {
    var dragon = createDragon('Saphira', 'Eragon');
    console.log("dragon with a rider", dragon);
    assert.equal(dragon.name, 'Saphira');
    assert.equal(dragon.rider, 'Eragon');
  });

  it('should be able to have a different rider', function() {
    var dragon = createDragon('Elliot', 'Pete');
    console.log("dragon with a different rider", dragon);
    assert.equal(dragon.name, 'Elliot');
    assert.equal(dragon.rider, 'Pete');
  });

  it('should have a temperment', function() {
    var dragon = createDragon('Saphira', 'Eragon', 'gentle');
    console.log("dragon with a temperment", dragon);
    assert.equal(dragon.name, 'Saphira');
    assert.equal(dragon.rider, 'Eragon');
    assert.equal(dragon.temperment, 'gentle');
  });

  it('should be able to have different temperments', function() {
    var dragon1 = createDragon('Gray', 'Marley', 'aggressive');
    var dragon2 = createDragon('Sky', 'Susie', 'gentle');
    console.log("dragon1 with a different temperment", dragon1);
    console.log("dragon2 with a different temperment", dragon2);
    assert.equal(dragon1.name, 'Gray');
    assert.equal(dragon1.rider, 'Marley');
    assert.equal(dragon1.temperment, 'aggressive');

    assert.equal(dragon2.name, 'Sky');
    assert.equal(dragon2.rider, 'Susie');
    assert.equal(dragon2.temperment, 'gentle');
  });

  it('should greet their rider', function() {
    var dragon1 = createDragon('Gray', 'Marley', 'aggressive');
    var dragon2 = createDragon('Sky', 'Susie', 'gentle');

    var greeting1 = greetRider(dragon1);
    var greeting2 = greetRider(dragon2);
    console.log("dragon1 greets its rider", dragon1, greeting1);
    console.log("dragon2 greets its rider", dragon2, greeting2);
    assert.equal(greeting1, 'Hi, Marley!');
    assert.equal(greeting2, 'Hi, Susie!');
  });

  it('should start off having eaten 0 times', function() {
    var dragon = createDragon('Mushu', 'Mulan', 'aggressive');
    console.log("dragon hasn't eaten", dragon);
    assert.equal(dragon.timesEaten, 0);
  });

  it('should start off being hungry', function() {
    var dragon = createDragon('Mushu', 'Mulan', 'aggressive');
    console.log("dragon is hungry", dragon);
    assert.equal(dragon.hungry, true);
  });

  it('should be full after eating 3 times', function() {
    var dragon = createDragon('Lady Vox', 'Emily', 'gentle');
    console.log("dragon hasn't eaten", dragon);
    console.log("times eaten", dragon.timesEaten);
    var fedDragon = eat(dragon);
    console.log("dragon has eaten once", dragon);
    console.log("times eaten", fedDragon.timesEaten);
    assert.equal(fedDragon.timesEaten, 1);
    assert.equal(fedDragon.hungry, true);

    var doubleFedDragon = eat(fedDragon);
    console.log("dragon has eaten twice", dragon);
    console.log("times eaten", doubleFedDragon.timesEaten);
    assert.equal(doubleFedDragon.timesEaten, 2);
    assert.equal(doubleFedDragon.hungry, true);

    var tripleFedDragon = eat(doubleFedDragon);
    console.log("dragon has eaten thrice", dragon);
    console.log("times eaten", tripleFedDragon.timesEaten);
    assert.equal(tripleFedDragon.timesEaten, 3);
    assert.equal(tripleFedDragon.hungry, false);
  });

  //Spicy:
  it.skip('should be a fireBreather if aggressive in temperment', function() {
    var dragon1 = createDragon('Gray', 'Marley', 'aggressive');
    var dragon2 = createDragon('Sky', 'Susie', 'gentle');
    var dragon3 = createDragon('Mushu', 'Mulan', 'aggressive');
    var dragon4 = createDragon('Lady Vox', 'Emily', 'gentle');

    var allDragons = [dragon1, dragon2, dragon3, dragon4];
    
    var fireBreathers = findFireBreathers(allDragons);

    assert.deepEqual(fireBreathers, [dragon1, dragon3])
  });
});
