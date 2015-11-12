function fireworks() {
    camera.position.y = 2;
    camera.position.z = 4;

    var bd = new b2BodyDef();
    var ground = world.CreateBody(bd);

    var chainBox = new b2ChainShape();
    chainBox.vertices.push(new b2Vec2(-4, 0));
    chainBox.vertices.push(new b2Vec2(4, 0));
    chainBox.vertices.push(new b2Vec2(4, 4));
    chainBox.vertices.push(new b2Vec2(-4, 4));
    chainBox.CreateLoop();
    ground.CreateFixtureFromShape(chainBox, 0);

    var psd = new b2ParticleSystemDef();
    psd.radius = 0.025;
    psd.dampingStrength = 0.2;

    var particleSystem = world.CreateParticleSystem(psd);


    var circleA = new b2CircleShape();
    circleA.position.Set(0,2.5);
    circleA.radius = 1.0;
    var circleB = new b2CircleShape();
    circleB.position.Set(0,2.5);
    circleB.radius = 0.75;
    var circleC = new b2CircleShape();
    circleC.position.Set(0,2.5);
    circleC.radius = 0.5;


    var pgdA = new b2ParticleGroupDef();
    pgdA.shape = circleA;
    pgdA.color.Set(0,255,0,255);
    particleSystem.CreateParticleGroup(pgdA);
    var pgdB = new b2ParticleGroupDef();
    pgdB.shape = circleB;
    pgdB.color.Set(255,0,0,255);
    particleSystem.CreateParticleGroup(pgdB);
    var pgdC = new b2ParticleGroupDef();
    pgdC.shape = circleC;
    pgdC.color.Set(0,0,255,255);
    particleSystem.CreateParticleGroup(pgdC);
}