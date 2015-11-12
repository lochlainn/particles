function steps() {
    camera.position.y = 2;
    camera.position.z = 4;
    var bd = new b2BodyDef;
    var ground = world.CreateBody(bd);

    var chainBox = new b2ChainShape();
    chainBox.vertices.push(new b2Vec2(-4, 0));
    chainBox.vertices.push(new b2Vec2(4, 0));
    chainBox.vertices.push(new b2Vec2(4, 4));
    chainBox.vertices.push(new b2Vec2(-4, 4));
    chainBox.CreateLoop();
    ground.CreateFixtureFromShape(chainBox, 0);

    var stairs = new b2ChainShape();
    stairs.vertices.push(new b2Vec2(-4,2.5));
    stairs.vertices.push(new b2Vec2(-3.5,2.5));
    stairs.vertices.push(new b2Vec2(-3.5,2));
    stairs.vertices.push(new b2Vec2(-3,2));
    stairs.vertices.push(new b2Vec2(-3,1.5));
    stairs.vertices.push(new b2Vec2(-2.5,1.5));
    stairs.vertices.push(new b2Vec2(-2.5,1));
    stairs.vertices.push(new b2Vec2(-2,1));
    stairs.vertices.push(new b2Vec2(-2,0.5));
    stairs.vertices.push(new b2Vec2(-1.5,0.5));
    stairs.vertices.push(new b2Vec2(-1.5,0));
    stairs.vertices.push(new b2Vec2(-4,0));
    stairs.CreateLoop();
    ground.CreateFixtureFromShape(stairs, 0);

    var ramp = new b2ChainShape();
    ramp.vertices.push(new b2Vec2(4,2.5));
    ramp.vertices.push(new b2Vec2(-0.5,0));
    ramp.vertices.push(new b2Vec2(4,0));
    ramp.CreateLoop();
    ground.CreateFixtureFromShape(ramp, 0);

    var psd = new b2ParticleSystemDef();
    psd.radius = 0.025;
    psd.dampingStrength = 1;

    var particleSystem = world.CreateParticleSystem(psd);

    //left object
    var circleL = new b2CircleShape();
    circleL.position.Set(-3.25,3.25);
    circleL.radius = 0.55;
    pgd = new b2ParticleGroupDef();
    pgd.flags = b2_elasticParticle;
    pgd.groupFlags = b2_solidParticleGroup;
    pgd.shape = circleL;
    pgd.color.Set(128,128,128,255);
    particleSystem.CreateParticleGroup(pgd);

    //right object
    var circleR = new b2CircleShape();
    circleR.position.Set(3.25,3);
    circleR.radius = 0.5;
    pgd = new b2ParticleGroupDef();
    pgd.flags = b2_elasticParticle;
    pgd.groupFlags = b2_solidParticleGroup;
    pgd.shape = circleR;
    pgd.color.Set(0,255,100,255);
    particleSystem.CreateParticleGroup(pgd);

    //plaything
    bd = new b2BodyDef();
    var circle = new b2CircleShape();
    bd.type = b2_dynamicBody;
    var body = world.CreateBody(bd);
    circle.position.Set(-1,1);
    circle.radius = 0.5
    body.CreateFixtureFromShape(circle, 0.5);
}