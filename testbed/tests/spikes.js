function spikes() {
    camera.position.y = 2;
    camera.position.z = 3.5;
    var bd = new b2BodyDef;
    var ground = world.CreateBody(bd);

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





    var psd = new b2ParticleSystemDef();
    psd.radius = 0.025;
    psd.dampingStrength = 0.2;

    var particleSystem = world.CreateParticleSystem(psd);


    var circle = new b2CircleShape();
    circle.position.Set(0, 3);
    circle.radius = 1.0;
    var pgd = new b2ParticleGroupDef();
    //pgd.flags = b2_springParticle;
    //pgd.groupFlags = b2_solidParticleGroup;
    pgd.shape = circle;
    pgd.color.Set(255, 0, 255, 255);
    particleSystem.CreateParticleGroup(pgd);




}