function windmill() {
  camera.position.y = 2;
  camera.position.z = 4;

  var bd = new b2BodyDef();
  var ground = world.CreateBody(bd);

  bd.type = b2_dynamicBody;
  bd.allowSleep = false;
  bd.position.Set(0, 0);
  var body = world.CreateBody(bd);

  var chainBox = new b2ChainShape();
  chainBox.vertices.push(new b2Vec2(-4, 0));
  chainBox.vertices.push(new b2Vec2(4, 0));
  chainBox.vertices.push(new b2Vec2(4, 4));
  chainBox.vertices.push(new b2Vec2(-4, 4));
  chainBox.CreateLoop();
  ground.CreateFixtureFromShape(chainBox, 0);



  var bA = new b2PolygonShape();
  bA.SetAsBoxXYCenterAngle(0.25, 3.5, new b2Vec2(0, 2), 0);
  body.CreateFixtureFromShape(bA, 5);

  var bB = new b2PolygonShape();
  bB.SetAsBoxXYCenterAngle(3.5, 0.25, new b2Vec2(0, 2), 0);
  body.CreateFixtureFromShape(bB, 5);

  var jd = new b2RevoluteJointDef();
  jd.motorSpeed = 0.05 * Math.PI;
  jd.maxMotorTorque = 1e7;
  jd.enableMotor = true;
  this.joint = jd.InitializeAndCreate(ground, body, new b2Vec2(0, 2));
  this.time = 0;

  // setup particles
  var psd = new b2ParticleSystemDef();
  psd.radius = 0.020;
  psd.dampingStrength = 0.2;

  var particleSystem = world.CreateParticleSystem(psd);
  var box = new b2PolygonShape();
  box.SetAsBoxXYCenterAngle(0.9, 0.9, new b2Vec2(0, 1.0), 0);

  var pgd = new b2ParticleGroupDef();
  pgd.shape = box;
  pgd.color.Set(0,0,128,255);
  var particleGroup = particleSystem.CreateParticleGroup(pgd);
}

windmill.prototype.Step = function() {
  world.Step(timeStep, velocityIterations, positionIterations);
  this.time += 1 / 60;
  this.joint.SetMotorSpeed(0.20*Math.PI);
}