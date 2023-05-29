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
  draw_fruit()
  { 
    if (this.id %2 == 0){
      fill(color(255, 80, 71));                 
      circle(this.x, this.y, this.width);
    }
    else{
      fill(color(230, 80, 80));                 
      circle(this.x, this.y, this.width);
    }
      
    // Draw label
    textFont("Arial", 15);
    fill(color(0, 0, 0));
    textAlign(CENTER);
    text(this.label, this.x, this.y);
  }
  
  draw_drink()
  {
    if (this.id % 2 == 0){
      fill(color(55, 189, 255));                 
      circle(this.x, this.y, this.width);
    }
    else {
      fill(color(40, 140, 255));                 
      circle(this.x, this.y, this.width);
    }
    
    // Draw label
    textFont("Arial", 15);
    fill(color(0, 0 ,0));
    textAlign(CENTER);
    text(this.label, this.x, this.y);
  }
  
  draw_vegetable()
  {
    if (this.id % 2 == 0){
      fill(color(144, 238, 144));                 
      circle(this.x, this.y, this.width);
    }
    else {
      fill(color(50, 205, 140));                 
      circle(this.x, this.y, this.width);
    }
    
    // Draw label
    textFont("Arial", 15);
    fill(color(0, 0, 0));
    textAlign(CENTER);
    text(this.label, this.x, this.y);
  }
  
  draw_dairy(){
    if (this.id % 2 == 0){
      fill(color(240,240,240));                 
      circle(this.x, this.y, this.width);
    }
    else {
      fill(color(255,255,255));                 
      circle(this.x, this.y, this.width);
    }
    
    // Draw label
    textFont("Arial", 15);
    fill(color(0, 0, 0));
    textAlign(CENTER);
    text(this.label, this.x, this.y);
  }
}
