//Examining osc a bit
osc([55, 30, 5, 1], 5, 9)
  .out(o0)

//Playing with voronoi()
voronoi(400, 1, 38)
  .color(2, 3, 5)
  .add(osc(9, 0.1, 1))
  .out(o0)

//Basic gradient use
gradient([1, 5, 1])
  .add(osc(4, 1, 9))
  .add(voronoi(200, 4, 100))
  .out(o0)

//Playing with noise and modulation
// by Nyx while listening to LION BABE - Jump

noise(1, 0.5)
  .modulate(osc(10, 1, 5))
  .color(5, 0.2, 0.3)
  .add(voronoi(50, 3))
  .out(o0)