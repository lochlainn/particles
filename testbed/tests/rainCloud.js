function rainCloud() {
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


  this.particleSystem = world.CreateParticleSystem(bd);
  var drawing = false;
  var icy = false;

}




rainCloud.prototype.MouseDown = function(p) {
  this.drawing = true;
  this.icy = false;
};

rainCloud.prototype.RightMouseDown = function(p) {
  this.drawing = true;
  this.icy = true;
}

rainCloud.prototype.MouseMove = function(p) {
  if (this.drawing) {
    var shape = new b2CircleShape();
    shape.position.Set(p);
    shape.radius = 0.2;

    var xf = new b2Transform;
    xf.SetIdentity();


    //this.particleSystem.DestroyParticlesInShape(shape, xf);


    var pgd = new b2ParticleGroupDef();
    pgd.shape = shape;
    if (this.icy) {
      pgd.color.Set(200,200,200,255);
    } else {
      pgd.color.Set(0,0,255,255);
    }
    this.particleSystem.CreateParticleGroup(pgd);


  }
};

rainCloud.prototype.MouseUp = function(p) {
  this.drawing = false;

};


