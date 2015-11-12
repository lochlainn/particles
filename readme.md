<body>
  <div class="nav">
  <div class="container">
    <ul>
      <li><a href='index.html'>Simulation</a></li>
      <li><a href=''>How this works</a></li>
      <li><a href='https://github.com/lochlainn/particles'>Source</a></li>
    </ul>
  </div>
  </div>
  </body>

# How this works
##Lochlainn Macdonald
##Computer Graphics, Fall 2015
##Homework 7

### Introduction
For my assignment, I decided to use LiquidFun, Google's in-house attempt at designing a particle simulator.
The system is based off of Box2D, a physics engine written in C++; one of the major benefits of working in
this environment was having bindings for Javascript built in.  In class, we were shown Liquidfun's test
suite running in a standard browser; as soon as I saw that, I thought that the best way to show my work
would be on a webpage.  No plugins, no project building, no VC++ dependency madness, just seeing the project.

### The Actual Simulations
While there is very little documentation for the Javascript bindings of LiquidFun, Google's test suite was
very useful in finding a place to start.  Two of the simpler simulations I made were based off of the included
"Wave Machine" test, which I modified by changing the particle size, and the simulated motor's speed and 
rotation.  Seeing that this looked like a water bottle, I decided to include an opened version, as I thought
watched all the water pour out was far more interesting than just bouncing around inside a box.

While the lack of documentation meant that some of the more complex parts of Box2D where impossible to replicate
in Javascript (most notably, SetAsBoxXYCenterAngle has no known public info on the Internet), I did a lot of 
research and toying around in Visual Studio, getting to know how each test created and manipulated the camera,
edges of the test (actually just shapes that act as containers for the particles), and the actual creation
of particle groups themselves.

### Graphical System
LiquidFun has no built-in graphics, so I had to find a way to display the actual calculations on my site.
Box2D actually contains a graphical debugger, which has a very simple (and again, undocumented) port to 
Javascript.  The benefit here is that the .js file is already pre-compiled and ready to go; as long as I'm
not adding any functionality to the engine itself, I can simply use this file (and its ~30kb of external 
dependencies) to easily display whatever I wrote on a site.  The HTML file included was very barebones, so I
rewrote that, but I thankfully did not have to build the engine myself.

The code I wrote is still internally identified as "tests" as of this page going up; this is because I used
the testbed interface and file structure included in the original build.  I may change this later.

###Individual Explanations

#### Steps
A simple "playground" of sorts, with steps on the left, a ramp on the right, and two semisolid circles of
particles.  There is also a tool to pick up and move around resting in the center; if you can't pick it up, give
it a couple shots, as there seems to be some unknown bug with the interface for grabbing objects.

#### Spikes
I started by making one spike, and noticed how interesting the effect on a circle was; I decided to make a whole
array of spikes, just to see how the reaction would change as the particles slowed down.

#### Fireworks
This was done by placing three circles, of different sizes and colors, on the same coordinate; as soon as their
physics initialize, they bounce against each other and "burst" apart into separate colors.

#### Closed Bottle
As mentioned above, this is a constantly spinning bottle, to show liquid that is always moving relative to its
container.

#### Open Bottle
With the bottle now open, the liquid pours out in a rather satisfying fashion.

#### Windmill
This took a very long time to implement, but I was able to create a motor that spun two rectangle objects
without translating them; this gave the illusion of a standing windmill, pushing and carrying particles.

### Acknowledgements
This program uses code from both Google Inc and Erin Catto, the author of Box2D.  Both of these programs were
released under the MIT License.

Copyright (c) 2006-2013 Erin Catto http://www.gphysics.com

This software is provided 'as-is', without any express or implied
warranty.  In no event will the authors be held liable for any damages
arising from the use of this software.

Permission is granted to anyone to use this software for any purpose,
including commercial applications, and to alter it and redistribute it
freely, subject to the following restrictions:

1. The origin of this software must not be misrepresented; you must not
claim that you wrote the original software. If you use this software
in a product, an acknowledgment in the product documentation would be
appreciated but is not required.
2. Altered source versions must be plainly marked as such, and must not be
misrepresented as being the original software.
3. This notice may not be removed or altered from any source distribution.
