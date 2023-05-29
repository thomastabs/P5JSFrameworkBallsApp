// Target class (position and width)
class Target
{
  constructor(x, y, w, l, id, type)
  {
    this.x      = x;
    this.y      = y;
    this.width  = w;
    this.label  = l;
    this.id     = id;
    this.type   = type
  }
  
  // Checks if a mouse click took place
  // within the target
  clicked(mouse_x, mouse_y)
  {
    return dist(this.x, this.y, mouse_x, mouse_y) < this.width / 2;
  }
  
  
  // Draws the target (i.e., a circle)
  // and its label
  drawBrown()
  {
    // Draw target
    fill(color(101,53,15));                 
    circle(this.x, this.y, this.width);
    
    // Draw label
    textFont("Arial", 14);
    fill(color(255,255,255));
    textAlign(CENTER);
    text(this.label, this.x, this.y + 30);
    
    textFont("Arial", 50);
    fill(color(255,255,255));
    textAlign(CENTER);
    text("0", this.x, this.y);
  }
  
  // Draws the target (i.e., a circle)
  // and its label
  drawRed()
  {
    // Draw target
    fill(color(255,0,0));                 
    circle(this.x, this.y, this.width);
    
    // Draw label
    textFont("Arial", 14);
    fill(color(0,0,0));
    textAlign(CENTER);
    text(this.label, this.x, this.y + 30);
    
    textFont("Arial", 50);
    fill(color(0,0,0));
    textAlign(CENTER);
    text("A", this.x, this.y);
  }
  
  // Draws the target (i.e., a circle)
  // and its label
  drawYellow()
  {
    // Draw target
    fill(color(255,255,0));                 
    circle(this.x, this.y, this.width);
    
    // Draw label
    textFont("Arial", 14);
    fill(color(0,0,0));
    textAlign(CENTER);
    text(this.label, this.x, this.y + 30);
    
    textFont("Arial", 50);
    fill(color(0,0,0));
    textAlign(CENTER);
    text("B", this.x, this.y);
  }
  
    // Draws the target (i.e., a circle)
  // and its label
  drawGreen()
  {
    // Draw target
    fill(color(0,255,0));                 
    circle(this.x, this.y, this.width);
    
    // Draw label
    textFont("Arial", 14);
    fill(color(0,0,0));
    textAlign(CENTER);
    text(this.label, this.x, this.y + 30);
    
    textFont("Arial", 50);
    fill(color(0,0,0));
    textAlign(CENTER);
    text("C", this.x, this.y);
  }
  
      // Draws the target (i.e., a circle)
  // and its label
  drawNeonOrange()
  {
    // Draw target
    fill(color(255,95,31));                 
    circle(this.x, this.y, this.width);
    
    // Draw label
    textFont("Arial", 14);
    fill(color(0,0,0));
    textAlign(CENTER);
    text(this.label, this.x, this.y + 30);
    
    textFont("Arial", 50);
    fill(color(0,0,0));
    textAlign(CENTER);
    text("G", this.x, this.y);    
  }
  
        // Draws the target (i.e., a circle)
  // and its label
  drawWhite()
  {
    // Draw target
    fill(color(255,255,255));                 
    circle(this.x, this.y, this.width);
    
    // Draw label
    textFont("Arial", 14);
    fill(color(0,0,0));
    textAlign(CENTER);
    text(this.label, this.x, this.y + 30);
    
    textFont("Arial", 50);
    fill(color(0,0,0));
    textAlign(CENTER);
    text("F", this.x, this.y);
  }
  
          // Draws the target (i.e., a circle)
  // and its label
  drawDarkGreen()
  {
    // Draw target
    fill(color(2,48,32));                 
    circle(this.x, this.y, this.width);
    
    // Draw label
    textFont("Arial", 14);
    fill(color(255,255,255));
    textAlign(CENTER);
    text(this.label, this.x, this.y + 30);
    
    textFont("Arial", 50);
    fill(color(255,255,255));
    textAlign(CENTER);
    text("K", this.x, this.y);
  }
  
            // Draws the target (i.e., a circle)
  // and its label
  drawDarkYellow()
  {
    // Draw target
    fill(color(139,138,0));                 
    circle(this.x, this.y, this.width);
    
    // Draw label
    textFont("Arial", 14);
    fill(color(255,255,255));
    textAlign(CENTER);
    text(this.label, this.x, this.y + 30);
    
    textFont("Arial", 50);
    fill(color(255,255,255));
    textAlign(CENTER);
    text("L", this.x, this.y);
  }
  
              // Draws the target (i.e., a circle)
  // and its label
  drawLightBlue()
  {
    // Draw target
    fill(color(173,216,230));                 
    circle(this.x, this.y, this.width);
    
    // Draw label
    textFont("Arial", 14);
    fill(color(0,0,0));
    textAlign(CENTER);
    text(this.label, this.x, this.y + 30);
    
    textFont("Arial", 50);
    fill(color(0,0,0));
    textAlign(CENTER);
    text("M", this.x, this.y);
  }
  
                // Draws the target (i.e., a circle)
  // and its label
  drawNectarine()
  {
    // Draw target
    fill(color(255,134,86));                 
    circle(this.x, this.y, this.width);
    
    // Draw label
    textFont("Arial", 14);
    fill(color(0,0,0));
    textAlign(CENTER);
    text(this.label, this.x, this.y + 30);
    
    textFont("Arial", 50);
    fill(color(0,0,0));
    textAlign(CENTER);
    text("N", this.x, this.y);
  }
  
                  // Draws the target (i.e., a circle)
  // and its label
  drawPurple()
  {
    // Draw target
    fill(color(128,0,138));                 
    circle(this.x, this.y, this.width);
    
    // Draw label
    textFont("Arial", 14);
    fill(color(255,255,255));
    textAlign(CENTER);
    text(this.label, this.x, this.y + 30);
    
    textFont("Arial", 50);
    fill(color(255,255,255));
    textAlign(CENTER);
    text("O", this.x, this.y);
  }
  
                    // Draws the target (i.e., a circle)
  // and its label
  drawDarkBlue()
  {
    // Draw target
    fill(color(0,0,139));                 
    circle(this.x, this.y, this.width);
    
    // Draw label
    textFont("Arial", 14);
    fill(color(255,255,255));
    textAlign(CENTER);
    text(this.label, this.x, this.y + 30);
    
    textFont("Arial", 50);
    fill(color(255,255,255));
    textAlign(CENTER);
    text("P", this.x, this.y);
  }
  
                      // Draws the target (i.e., a circle)
  // and its label
  drawBurgundy()
  {
    // Draw target
    fill(color(128,0,32));                 
    circle(this.x, this.y, this.width);
    
    // Draw label
    textFont("Arial", 14);
    fill(color(255,255,255));
    textAlign(CENTER);
    text(this.label, this.x, this.y + 30);
    
    textFont("Arial", 50);
    fill(color(255,255,255));
    textAlign(CENTER);
    text("R", this.x, this.y);
  }
  
                        // Draws the target (i.e., a circle)
  // and its label
  drawPink()
  {
    // Draw target
    fill(color(255,192,203));                 
    circle(this.x, this.y, this.width);
    
    // Draw label
    textFont("Arial", 14);
    fill(color(0,0,0));
    textAlign(CENTER);
    text(this.label, this.x, this.y + 30);
    
    textFont("Arial", 50);
    fill(color(0,0,0));
    textAlign(CENTER);
    text("S", this.x, this.y);
  }
  
                        // Draws the target (i.e., a circle)
  // and its label
  drawTomato()
  {
    // Draw target
    fill(color(255,99,71));                 
    circle(this.x, this.y, this.width);
    
    // Draw label
    textFont("Arial", 14);
    fill(color(0,0,0));
    textAlign(CENTER);
    text(this.label, this.x, this.y + 30);
    
    textFont("Arial", 50);
    fill(color(0,0,0));
    textAlign(CENTER);
    text("T", this.x, this.y);
  }
  
                        // Draws the target (i.e., a circle)
  // and its label
  drawVanilla()
  {
    // Draw target
    fill(color(243,229,171));                 
    circle(this.x, this.y, this.width);
    
    // Draw label
    textFont("Arial", 14);
    fill(color(0,0,0));
    textAlign(CENTER);
    text(this.label, this.x, this.y + 30);
    
    textFont("Arial", 50);
    fill(color(0,0,0));
    textAlign(CENTER);
    text("V", this.x, this.y);
  }
  
                          // Draws the target (i.e., a circle)
  // and its label
  drawPotato()
  {
    // Draw target
    fill(color(183,146,104));                 
    circle(this.x, this.y, this.width);
    
    // Draw label
    textFont("Arial", 14);
    fill(color(0,0,0));
    textAlign(CENTER);
    text(this.label, this.x, this.y + 30);
    
    textFont("Arial", 50);
    fill(color(0,0,0));
    textAlign(CENTER);
    text("W", this.x, this.y);
  }
                            // Draws the target (i.e., a circle)
  // and its label
  drawLightPurple()
  {
    // Draw target
    fill(color(177,156,217));                 
    circle(this.x, this.y, this.width);
    
    // Draw label
    textFont("Arial", 14);
    fill(color(0,0,0));
    textAlign(CENTER);
    text(this.label, this.x, this.y + 30);
    
    textFont("Arial", 50);
    fill(color(0,0,0));
    textAlign(CENTER);
    text("Y", this.x, this.y);
  }
  
                              // Draws the target (i.e., a circle)
  // and its label
  drawBlack()
  {
    // Draw target
    fill(color(81,97,56));                 
    circle(this.x, this.y, this.width);
    
    // Draw label
    textFont("Arial", 14);
    fill(color(255,255,255));
    textAlign(CENTER);
    text(this.label, this.x, this.y + 30);
    
    textFont("Arial", 50);
    fill(color(255,255,255));
    textAlign(CENTER);
    text("Z", this.x, this.y);
  }
}