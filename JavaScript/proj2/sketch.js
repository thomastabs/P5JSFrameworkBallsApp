// Bakeoff #2 -- Seleção em Interfaces Densas
// IPM 2022-23, Período 3
// Entrega: até dia 31 de Março às 23h59 através do Fenix
// Bake-off: durante os laboratórios da semana de 10 de Abril

// p5.js reference: https://p5js.org/reference/

// Database (CHANGE THESE!)
const GROUP_NUMBER        = 8;      // Add your group number here as an integer (e.g., 2, 3)
const RECORD_TO_FIREBASE  = false;  // Set to 'true' to record user results to Firebase

// Pixel density and setup variables (DO NOT CHANGE!)
let PPI, PPCM;
const NUM_OF_TRIALS       = 12;      // The numbers of trials (i.e., target selections) to be completed
const GRID_ROWS           = 8;      // We divide our 80 targets in a 8x10 grid
const GRID_COLUMNS        = 10;     // We divide our 80 targets in a 8x10 grid
let continue_button;
let legendas;                       // The item list from the "legendas" CSV

// Metrics
let testStartTime, testEndTime;     // time between the start and end of one attempt (8 trials)
let hits 			      = 0;      // number of successful selections
let misses 			      = 0;      // number of missed selections (used to calculate accuracy)
let database;                       // Firebase DB  

// Study control parameters
let draw_targets          = false;  // used to control what to show in draw()
let trials;                         // contains the order of targets that activate in the test
let current_trial         = 0;      // the current trial number (indexes into trials array above)
let attempt               = 0;      // users complete each test twice to account for practice (attemps 0 and 1)

// Targets lists
let targets               = [];

let targets1              = [];
let targets2              = [];
let targets3              = [];
let targets4              = [];

let legendas2;


// Trying to sort the many groups 
let fruit_type             = ['Apple', 'Avocado', 'Banana', 'Kiwi', 'Lemon', 'Lime', 'Mango', 'Melon', 'Nectarine', 'Orange', 'Papaya', 'Passion Fruit', 'Peach', 'Pear', 'Pineapple', 'Plum', 'Pomegranate', 'Red Grapefruit', 'Satsumas'];
let drink_type             = ['Juice']; 
let vegetable_type        = ['Asparagus', 'Aubergine', 'Cabbage', 'Carrots', 'Cucumber', 'Garlic', 'Ginger', 'Onion', 'Leek', 'Mushroom', 'Pepper', 'Potato', 'Red Beet', 'Zucchini', 'Tomato'];
let dairy_type             = ['Milk', 'Oatghurt','Oat Milk', 'Sour Cream' , 'Sour Milk', 'Soyghurt', 'Soy Milk', 'Yoghurt'];


// 'Filter Buttons'
let fruits_button;
let drinks_button;
let vegetables_button;
let dairy_button;
let home_button;

let fruit_filter = false;
let drink_filter = false;
let vegetable_filter = false;
let dairy_filter = false;

let button_boolean = false;
var i;

// Ensures important data is loaded before the program starts
function preload()
{
  legendas = loadTable('legendas.csv', 'csv', 'header');
}

// Runs once at the start
function setup()
{
  createCanvas(700, 500);    // window size in px before we go into fullScreen()
  frameRate(60);             // frame rate (DO NOT CHANGE!)
  
  randomizeTrials();         // randomize the trial order at the start of execution
  drawUserIDScreen();        // draws the user start-up screen (student ID and display size)
}

// Runs every frame and redraws the screen
function draw()
{
  if (button_boolean)  
  {
    create_buttons();
    button_boolean = false;
  }
  
  if (draw_targets && attempt < 2)
  {     
    if (fruit_filter){
      background(color(0,0,0));
      
      // Print trial count at the top left-corner of the canvas
      textFont("Arial", 16);
      fill(color(255,255,255));
      textAlign(LEFT);
      text("Trial " + (current_trial + 1) + " of " + trials.length, 50, 20);

      // Draw all targets
      for (i = 0; i < legendas.getRowCount(); i++) {
        if (fruit_type.includes(targets[i].type)){
          if (i >= 0 && i<= 1) targets[i].drawBrown();
          if (i >= 2 && i<= 6) targets[i].drawRed();
          if (i >= 7 && i<= 15) targets[i].drawYellow();
          if (i >= 16 && i<= 22) targets[i].drawGreen();
          if (i >= 23 && i<= 24) targets[i].drawWhite();
          if (i >= 25 && i<= 29) targets[i].drawNeonOrange();
          if (i >= 30 && i<= 31) targets[i].drawDarkGreen();
          if (i >= 32 && i<= 34) targets[i].drawDarkYellow();
          if (i >= 35 && i<= 41) targets[i].drawLightBlue();
          if (i == 42) targets[i].drawNectarine();
          if (i >= 43 && i<= 46) targets[i].drawPurple();
          if (i >= 47 && i <= 57) targets[i].drawDarkBlue();
          if (i >= 58 && i <= 63) targets[i].drawBurgundy();
          if (i >= 64 && i <= 71) targets[i].drawPink();
          if (i == 72) targets[i].drawTomato();
          if (i >= 73 && i <= 74) targets[i].drawVanilla();
          if (i >= 75 && i <= 76) targets[i].drawPotato();
          if (i >= 77 && i <= 78) targets[i].drawLightPurple();
          if (i == 79) targets[i].drawBlack();
        }
      }

      // Draw the target label to be selected in the current trial
      textFont("Arial", 20);
      fill(color(255,255,255));
      textAlign(CENTER);
      text(legendas.getString(trials[current_trial],0), width/2, height - 20);
    }
    else if (drink_filter){
      background(color(0,0,0));
      
      // Print trial count at the top left-corner of the canvas
      textFont("Arial", 16);
      fill(color(255,255,255));
      textAlign(LEFT);
      text("Trial " + (current_trial + 1) + " of " + trials.length, 50, 20);
      
      for (i = 0; i < legendas.getRowCount(); i++) {
       if (drink_type.includes(targets[i].type)){
          if (i >= 0 && i<= 1) targets[i].drawBrown();
          if (i >= 2 && i<= 6) targets[i].drawRed();
          if (i >= 7 && i<= 15) targets[i].drawYellow();
          if (i >= 16 && i<= 22) targets[i].drawGreen();
          if (i >= 23 && i<= 24) targets[i].drawWhite();
          if (i >= 25 && i<= 29) targets[i].drawNeonOrange();
          if (i >= 30 && i<= 31) targets[i].drawDarkGreen();
          if (i >= 32 && i<= 34) targets[i].drawDarkYellow();
          if (i >= 35 && i<= 41) targets[i].drawLightBlue();
          if (i == 42) targets[i].drawNectarine();
          if (i >= 43 && i<= 46) targets[i].drawPurple();
          if (i >= 47 && i <= 57) targets[i].drawDarkBlue();
          if (i >= 58 && i <= 63) targets[i].drawBurgundy();
          if (i >= 64 && i <= 71) targets[i].drawPink();
          if (i == 72) targets[i].drawTomato();
          if (i >= 73 && i <= 74) targets[i].drawVanilla();
          if (i >= 75 && i <= 76) targets[i].drawPotato();
          if (i >= 77 && i <= 78) targets[i].drawLightPurple();
          if (i == 79) targets[i].drawBlack();
        }
      }
      
      // Draw the target label to be selected in the current trial
      textFont("Arial", 20);
      fill(color(255,255,255));
      textAlign(CENTER);
      text(legendas.getString(trials[current_trial],0), width/2, height - 20);
    }
    else if (vegetable_filter){
      background(color(0,0,0)); 
      
      // Print trial count at the top left-corner of the canvas
      textFont("Arial", 16);
      fill(color(255,255,255));
      textAlign(LEFT);
      text("Trial " + (current_trial + 1) + " of " + trials.length, 50, 20);
      
      for (i = 0; i < legendas.getRowCount(); i++) {
        if (vegetable_type.includes(targets[i].type)){
          if (i >= 0 && i<= 1) targets[i].drawBrown();
          if (i >= 2 && i<= 6) targets[i].drawRed();
          if (i >= 7 && i<= 15) targets[i].drawYellow();
          if (i >= 16 && i<= 22) targets[i].drawGreen();
          if (i >= 23 && i<= 24) targets[i].drawWhite();
          if (i >= 25 && i<= 29) targets[i].drawNeonOrange();
          if (i >= 30 && i<= 31) targets[i].drawDarkGreen();
          if (i >= 32 && i<= 34) targets[i].drawDarkYellow();
          if (i >= 35 && i<= 41) targets[i].drawLightBlue();
          if (i == 42) targets[i].drawNectarine();
          if (i >= 43 && i<= 46) targets[i].drawPurple();
          if (i >= 47 && i <= 57) targets[i].drawDarkBlue();
          if (i >= 58 && i <= 63) targets[i].drawBurgundy();
          if (i >= 64 && i <= 71) targets[i].drawPink();
          if (i == 72) targets[i].drawTomato();
          if (i >= 73 && i <= 74) targets[i].drawVanilla();
          if (i >= 75 && i <= 76) targets[i].drawPotato();
          if (i >= 77 && i <= 78) targets[i].drawLightPurple();
          if (i == 79) targets[i].drawBlack();
        }
      }

      // Draw the target label to be selected in the current trial
      textFont("Arial", 20);
      fill(color(255,255,255));
      textAlign(CENTER);
      text(legendas.getString(trials[current_trial],0), width/2, height - 20);
    }
    else if (dairy_filter){
      background(color(0,0,0)); 
      
      // Print trial count at the top left-corner of the canvas
      textFont("Arial", 16);
      fill(color(255,255,255));
      textAlign(LEFT);
      text("Trial " + (current_trial + 1) + " of " + trials.length, 50, 20);
      
      for (i = 0; i < legendas.getRowCount(); i++) {
        if (dairy_type.includes(targets[i].type)){
          if (i >= 0 && i<= 1) targets[i].drawBrown();
          if (i >= 2 && i<= 6) targets[i].drawRed();
          if (i >= 7 && i<= 15) targets[i].drawYellow();
          if (i >= 16 && i<= 22) targets[i].drawGreen();
          if (i >= 23 && i<= 24) targets[i].drawWhite();
          if (i >= 25 && i<= 29) targets[i].drawNeonOrange();
          if (i >= 30 && i<= 31) targets[i].drawDarkGreen();
          if (i >= 32 && i<= 34) targets[i].drawDarkYellow();
          if (i >= 35 && i<= 41) targets[i].drawLightBlue();
          if (i == 42) targets[i].drawNectarine();
          if (i >= 43 && i<= 46) targets[i].drawPurple();
          if (i >= 47 && i <= 57) targets[i].drawDarkBlue();
          if (i >= 58 && i <= 63) targets[i].drawBurgundy();
          if (i >= 64 && i <= 71) targets[i].drawPink();
          if (i == 72) targets[i].drawTomato();
          if (i >= 73 && i <= 74) targets[i].drawVanilla();
          if (i >= 75 && i <= 76) targets[i].drawPotato();
          if (i >= 77 && i <= 78) targets[i].drawLightPurple();
          if (i == 79) targets[i].drawBlack();
        }
      }
      
      // Draw the target label to be selected in the current trial
      textFont("Arial", 20);
      fill(color(255,255,255));
      textAlign(CENTER);
      text(legendas.getString(trials[current_trial],0), width/2, height - 20);
    }
    else {
      // The user is interacting with the 6x3 target grid
      background(color(0,0,0));        // sets background to black
      
      // Print trial count at the top left-corner of the canvas
      textFont("Arial", 16);
      fill(color(255,255,255));
      textAlign(LEFT);
      text("Trial " + (current_trial + 1) + " of " + trials.length, 50, 20);

        
      // Draw all targets
      for (i = 0; i < legendas.getRowCount(); i++) {
        if (i >= 0 && i<= 1) targets[i].drawBrown();
        if (i >= 2 && i<= 6) targets[i].drawRed();
        if (i >= 7 && i<= 15) targets[i].drawYellow();
        if (i >= 16 && i<= 22) targets[i].drawGreen();
        if (i >= 23 && i<= 24) targets[i].drawWhite();
        if (i >= 25 && i<= 29) targets[i].drawNeonOrange();
        if (i >= 30 && i<= 31) targets[i].drawDarkGreen();
        if (i >= 32 && i<= 34) targets[i].drawDarkYellow();
        if (i >= 35 && i<= 41) targets[i].drawLightBlue();
        if (i == 42) targets[i].drawNectarine();
        if (i >= 43 && i<= 46) targets[i].drawPurple();
        if (i >= 47 && i <= 57) targets[i].drawDarkBlue();
        if (i >= 58 && i <= 63) targets[i].drawBurgundy();
        if (i >= 64 && i <= 71) targets[i].drawPink();
        if (i == 72) targets[i].drawTomato();
        if (i >= 73 && i <= 74) targets[i].drawVanilla();
        if (i >= 75 && i <= 76) targets[i].drawPotato();
        if (i >= 77 && i <= 78) targets[i].drawLightPurple();
        if (i == 79) targets[i].drawBlack();
      }
   
      // Draw the target label to be selected in the current trial
      textFont("Arial", 20);
      fill(color(255,255,255));
      textAlign(CENTER);
      text(legendas.getString(trials[current_trial],0), width/2, height - 20);
    }
  }
}

// Print and save results at the end of 54 trials
function printAndSavePerformance()
{
  // DO NOT CHANGE THESE! 
  let accuracy			= parseFloat(hits * 100) / parseFloat(hits + misses);
  let test_time         = (testEndTime - testStartTime) / 1000;
  let time_per_target   = nf((test_time) / parseFloat(hits + misses), 0, 3);
  let penalty           = constrain((((parseFloat(95) - (parseFloat(hits * 100) / parseFloat(hits + misses))) * 0.2)), 0, 100);
  let target_w_penalty	= nf(((test_time) / parseFloat(hits + misses) + penalty), 0, 3);
  let timestamp         = day() + "/" + month() + "/" + year() + "  " + hour() + ":" + minute() + ":" + second();
  
  textFont("Arial", 18);
  background(color(0,0,0));   // clears screen
  fill(color(255,255,255));   // set text fill color to white
  textAlign(LEFT);
  text(timestamp, 10, 20);    // display time on screen (top-left corner)
  
  textAlign(CENTER);
  text("Attempt " + (attempt + 1) + " out of 2 completed!", width/2, 60); 
  text("Hits: " + hits, width/2, 100);
  text("Misses: " + misses, width/2, 120);
  text("Accuracy: " + accuracy + "%", width/2, 140);
  text("Total time taken: " + test_time + "s", width/2, 160);
  text("Average time per target: " + time_per_target + "s", width/2, 180);
  text("Average time for each target (+ penalty): " + target_w_penalty + "s", width/2, 220);

  // Saves results (DO NOT CHANGE!)
  let attempt_data = 
  {
        project_from:       GROUP_NUMBER,
        assessed_by:        student_ID,
        test_completed_by:  timestamp,
        attempt:            attempt,
        hits:               hits,
        misses:             misses,
        accuracy:           accuracy,
        attempt_duration:   test_time,
        time_per_target:    time_per_target,
        target_w_penalty:   target_w_penalty,
  }
  
  // Send data to DB (DO NOT CHANGE!)
  if (RECORD_TO_FIREBASE)
  {
    // Access the Firebase DB
    if (attempt === 0)
    {
      firebase.initializeApp(firebaseConfig);
      database = firebase.database();
    }
    
    // Add user performance results
    let db_ref = database.ref('G' + GROUP_NUMBER);
    db_ref.push(attempt_data);
  }
}

// Mouse button was pressed - lets test to see if hit was in the correct target
function mousePressed() 
{
  // Only look for mouse releases during the actual test
  // (i.e., during target selections)
  if (draw_targets)
  {
    for (var i = 0; i < legendas.getRowCount(); i++)
    {
      // Check if the user clicked over one of the targets
      if (!fruit_filter && !drink_filter && !vegetable_filter && !dairy_filter)  
      {
        if ((targets[i].clicked(mouseX, mouseY))){
          // Checks if it was the correct target
          if (targets[i].id === trials[current_trial]) hits++;
          else misses++;
          
          drink_filter = false;
          vegetable_filter = false;
          fruit_filter = false;
          dairy_filter = false;
          
          current_trial++;                 // Move on to the next trial/target
          break;
        }
      }
      else if (fruit_filter){
        if ((targets[i].clicked(mouseX, mouseY)) && fruit_type.includes(targets[i].type)){
          // Checks if it was the correct target
          if (targets[i].id === trials[current_trial]){
            hits++;
          } else misses++;

          drink_filter = false;
          vegetable_filter = false;
          fruit_filter = false;
          dairy_filter = false;
           
          current_trial++;                 // Move on to the next trial/target
          break;
        }
      }
      else if (drink_filter){
        if (targets[i].clicked(mouseX, mouseY) && drink_type.includes(targets[i].type)){
          // Checks if it was the correct target
          if (targets[i].id === trials[current_trial]) hits++;
          else misses++;

          drink_filter = false;
          vegetable_filter = false;
          fruit_filter = false;
          dairy_filter = false;
          
          current_trial++;                 // Move on to the next trial/target
          break;
        }
      }
      else if (vegetable_filter){
        if ((targets[i].clicked(mouseX, mouseY) && vegetable_type.includes(targets[i].type))){
          // Checks if it was the correct target
          if (targets[i].id === trials[current_trial]) hits++;
          else misses++;

          drink_filter = false;
          vegetable_filter = false;
          fruit_filter = false;
          dairy_filter = false;
          
          current_trial++;                 // Move on to the next trial/target
          break;
        }
      }
      else if (dairy_filter){
        if ((targets[i].clicked(mouseX, mouseY) && dairy_type.includes(targets[i].type))){
          // Checks if it was the correct target
          if (targets[i].id === trials[current_trial]) hits++;
          else misses++;

          drink_filter = false;
          vegetable_filter = false;
          fruit_filter = false;
          dairy_filter = false;
          
          current_trial++;                 // Move on to the next trial/target
          break;
        }
      }
    }
    
    // Check if the user has completed all trials
    if (current_trial === NUM_OF_TRIALS)
    {
      button_boolean = false;
      
      home_button.remove(); 
      fruits_button.remove(); 
      drinks_button.remove(); 
      vegetables_button.remove();
      
      
      testEndTime = millis();
      draw_targets = false;          // Stop showing targets and the user performance results
      printAndSavePerformance();     // Print the user's results on-screen and send these to the DB
      attempt++;                      
      
      // If there's an attempt to go create a button to start this
      if (attempt < 2)
      {  
        continue_button = createButton('START 2ND ATTEMPT');
        continue_button.mouseReleased(continueTest);
        continue_button.position(width/2 - continue_button.size().width/2, height/2 - continue_button.size().height/2);
        
      }
    }
    // Check if this was the first selection in an attempt
    else if (current_trial === 1) testStartTime = millis(); 
  }
}

// Evoked after the user starts its second (and last) attempt
function continueTest()
{
  // Re-randomize the trial order
  randomizeTrials();
  
  
  // Resets performance variables
  hits = 0;
  misses = 0;
  
  current_trial = 0;
  continue_button.remove();
  
  drink_filter = false;
  vegetable_filter = false;
  fruit_filter = false;
  dairy_filter = false;
  
  // Shows the targets again
  draw_targets = true;
  
  button_boolean = true;

}

// Creates and positions the UI targets
function createTargets(target_size, horizontal_gap, vertical_gap)
{
  
  // turn the legendas table into a multi dimensional array to sort easily
  legendas2 = legendas.getArray();
  legendas2.sort();
  
  // Define the margins between targets by dividing the white space 
  // for the number of targets minus one
  h_margin = horizontal_gap / (GRID_COLUMNS - 1);
  v_margin = vertical_gap / (GRID_ROWS - 1);
  
  let index = 0;
  // Working with a multi_dimensional array
  for (var r = 0; r < GRID_ROWS; r++)
  {
    for (var c = 0; c < GRID_COLUMNS; c++)
    {
      let target_x = 40 + (h_margin + target_size) * c + target_size/2;        // give it some margin from the left border
      let target_y = (v_margin + target_size) * r + target_size/2;
      
      // Find the appropriate label and ID for this target
      let target_label = str(legendas2[index][0]);
      let target_id = float(legendas2[index][1]); 
      let target_type = str(legendas2[index][2]);
      

      let target = new Target(target_x, target_y + 40, target_size, target_label, target_id, target_type);
      
      index++;
      
      targets.push(target);
      if (fruit_type.includes(target_type))
      {
        targets1.push(target);
      }
      if (drink_type.includes(target_type))
      {
        targets2.push(target);    
      }
      if (dairy_type.includes(target_type))
      {
        targets4.push(target);
      }
      if (vegetable_type.includes(target_type))
      {
        targets3.push(target);
      }
    }
  }
}

// Is invoked when the canvas is resized (e.g., when we go fullscreen)
function windowResized() 
{    
  if (fullscreen())
  {
    
    // DO NOT CHANGE THESE!
    resizeCanvas(windowWidth, windowHeight);
    
    let display        = new Display({ diagonal: display_size }, window.screen);
    PPI                = display.ppi;                      // calculates pixels per inch
    PPCM               = PPI / 2.54;                       // calculates pixels per cm

    // Make your decisions in 'cm', so that targets have the same size for all participants
    // Below we find out out white space we can have between 2 cm targets
    let screen_width   = display.width * 2.54;             // screen width
    let screen_height  = display.height * 2.54;            // screen height
    let target_size    = 2;                                // sets the target size (will be converted to cm when passed to createTargets)
    let horizontal_gap = screen_width - target_size * GRID_COLUMNS;// empty space in cm across the x-axis (based on 10 targets per row)
    let vertical_gap   = screen_height - target_size * GRID_ROWS;  // empty space in cm across the y-axis (based on 8 targets per column)
    
    // Creates and positions the UI targets according to the white space defined above (in cm!)
    // 80 represent some margins around the display (e.g., for text)
    createTargets(target_size * PPCM, horizontal_gap * PPCM - 80, vertical_gap * PPCM - 80);
    
    // Starts drawing targets immediately after we go fullscreen
    draw_targets = true;
    
    button_boolean = true;
  }
}

function create_buttons()
{
    fruits_button = createButton('Fruits');
    fruits_button.mouseReleased(fruits_screen);   
    fruits_button.size(120, 36);
    fruits_button.position(300 - fruits_button.size().width,0);
    fruits_button.style('font-size', '20px');

    drinks_button = createButton('Juices');
    drinks_button.mouseReleased(drinks_screen);
    drinks_button.size(120, 36);
    drinks_button.position(500 - drinks_button.size().width, 0);
    drinks_button.style('font-size', '20px');

    vegetables_button = createButton('Vegetables');
    vegetables_button.mouseReleased(vegetables_screen);
    vegetables_button.size(120, 36);
    vegetables_button.position(700 - vegetables_button.size().width, 0);
    vegetables_button.style('font-size', '20px');
    
    dairy_button = createButton('Dairy');
    dairy_button.mouseReleased(dairy_screen);
    dairy_button.size(120,36);
    dairy_button.position(900 - dairy_button.size().width, 0);
    dairy_button.style('font-size', '20px');
  
    home_button = createButton('All');
    home_button.mouseReleased(home_screen);
    home_button.size(120,36);
    home_button.position(1100 - home_button.size().width, 0);
    home_button.style('font-size', '20px');
}


function fruits_screen()
{
  drink_filter = false;
  vegetable_filter = false;
  fruit_filter = true;
  dairy_filter = false;
}


function vegetables_screen()
{
  drink_filter = false;
  vegetable_filter = true;
  fruit_filter = false;
  dairy_filter = false;
}

function drinks_screen()
{
  drink_filter = true;
  vegetable_filter = false;
  fruit_filter = false;
  dairy_filter = false;
}

function home_screen()
{
  drink_filter = false;
  vegetable_filter = false;
  fruit_filter = false;
  dairy_filter = false;
}

function dairy_screen()
{
  drink_filter = false;
  vegetable_filter = false;
  fruit_filter = false;
  dairy_filter = true;
}

