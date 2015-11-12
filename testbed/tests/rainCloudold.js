function RainCloud() {
    camera.position.y = 3;
    camera.position.z = 6;
    var bd = new b2BodyDef;
    var ground = world.CreateBody(bd);

    var shape = new b2PolygonShape();
    var vertices = shape.vertices;
    vertices.push(new b2Vec2())
    vertices.push(new b2Vec2(-4, -1));
    vertices.push(new b2Vec2(4, -1));
    vertices.push(new b2Vec2(4, 0));
    vertices.push(new b2Vec2(-4, 0));
    ground.CreateFixtureFromShape(shape, 0);

    var shape2 = new b2PolygonShape();
    var vertices = shape2.vertices;
    vertices.push(new b2Vec2())
    vertices.push(new b2Vec2(0, 0));
    vertices.push(new b2Vec2(1, 0));
    vertices.push(new b2Vec2(0, 1));
    vertices.push(new b2Vec2(1, 1));
    ground.CreateFixtureFromShape(shape, 0);

    var psd = new b2ParticleSystemDef();
    psd.radius = 0.035;
    psd.dampingStrength = 0.3;
    var particleSystem = world.CreateParticleSystem(psd);
}