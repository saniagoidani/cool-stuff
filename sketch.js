function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200, 220, 255);

  // Draw a rotating rectangle
  fill(160, 176, 186);
  translate(width / 2, height / 2);
  rotate(radians(frameCount));
  rect(-50, -50, 100, 100);

  // Draw a bouncing ellipse
  fill(0, 200, 255);
  let x = sin(frameCount * 0.05) * 150 + width / 2;
  let y = cos(frameCount * 0.05) * 100 + height / 2;
  ellipse(x, y, 50, 50);

  // Draw a random color triangle
  fill(random(255), random(255), random(255));
  triangle(random(width), random(height), random(width), random(height), random(width), random(height));
}
