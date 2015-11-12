function rainCloud() {
    camera.position.y = 2;
    camera.position.z = 3.5;
    var bd = new b2BodyDef;
    var ground = world.CreateBody(bd);
    this.drawing = false;

    var chainBox = new b2ChainShape();
    chainBox.vertices.push(new b2Vec2(-4, 0));
    chainBox.vertices.push(new b2Vec2(4, 0));
    chainBox.vertices.push(new b2Vec2(4, 4));
    chainBox.vertices.push(new b2Vec2(-4, 4));
    chainBox.CreateLoop();
    ground.CreateFixtureFromShape(chainBox, 0);





for (i=-4.0; i<4; i=i+1) {

    var spike = new b2ChainShape();
    spike.vertices.push(new b2Vec2(i,0));
    spike.vertices.push(new b2Vec2(i+.5,1));
    spike.vertices.push(new b2Vec2(i+1,0));
    spike.CreateLoop();
    ground.CreateFixtureFromShape(spike,0);
}

// var i = 0;

//    var chainTri = new b2ChainShape();
//    chainTri.vertices.push(new b2Vec2(i-4,0));
//    chainTri.vertices.push(new b2Vec2(i-3.5,1));
//    chainTri.vertices.push(new b2Vec2(-3,0));
//    chainTri.CreateLoop();
//   ground.CreateFixtureFromShape(chainTri, 0);

//      var chainTri = new b2ChainShape();
//    chainTri.vertices.push(new b2Vec2(-3,0));
//    chainTri.vertices.push(new b2Vec2(-2.5,1));
//    chainTri.vertices.push(new b2Vec2(-2,0));
//    chainTri.CreateLoop();
//   ground.CreateFixtureFromShape(chainTri, 0);

    var shape = new b2PolygonShape;
    shape.SetAsBoxXYCenterAngle(0.8, 1, new b2Vec2(0.5, 0.5), 0);

    var psd = new b2ParticleSystemDef();
    psd.radius = 0.025;
    psd.dampingStrength = 0.2;

    var particleSystem = world.CreateParticleSystem(psd);

    var pd = new b2ParticleGroupDef();
    pd.shape = shape;
    var group = particleSystem.CreateParticleGroup(pd);

    TestDrawingParticles.prototype.MouseDown = function(p) {
      this.drawing = true;
    };



    //var psd = new b2ParticleSystemDef();
    //psd.radius = 0.035;
    //psd.dampingStrength = 0.3;
    //var particleSystem = world.CreateParticleSystem(psd);
}