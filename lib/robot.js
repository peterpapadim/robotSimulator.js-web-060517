'use strict';

const directions = ["east", "west", "north", "south"]
//direction
//bearings


function Robot(){
};


Robot.prototype.turnRight = function() {
  switch (this.bearing) {
    case "north":
      this.bearing = "east"
      break;
    case "east":
      this.bearing = "south"
      break;
    case "south":
    this.bearing = "west"
      break;
    case "west":
    this.bearing = "north"
  }
};

Robot.prototype.turnLeft = function(){
  switch (this.bearing) {
    case "north":
    this.bearing = "west"
      break;
    case "west":
    this.bearing = "south"
      break;
    case "south":
    this.bearing = "east"
      break;
    case "east":
    this.bearing = "north"
  }
};


Robot.prototype.advance = function(){
  switch (this.bearing) {
    case "north":
      this.coordinates[1] +=1
      break;
      case "east":
      this.coordinates[0] +=1
      break;
      case "south":
      this.coordinates[1] -=1
      break;
      case "west":
      this.coordinates[0] -=1
  }
};

Robot.prototype.orient = function(direction){
  if (directions.includes(direction)){
    this.bearing = direction
  } else {
    let err = new Error("Invalid Robot Bearing")
    throw err
  }
};

Robot.prototype.at = function(x,y){
  this.coordinates = [x,y]
};


Robot.prototype.instructions = function(instruction){

  let output = []

  if (instruction.length === 1){
    output.push(this.ourInstructions(instruction))
  } else {
      let commands = instruction.split("")
      commands.forEach(element => {
        output.push(this.ourInstructions(element))
      })
  }
  return output
}

Robot.prototype.ourInstructions = function(letter){
  switch (letter) {
    case "L":
      this.turnLeft()
      return "turnLeft"
      break;
    case "R":
      this.turnRight()
      return "turnRight"
      break;
    case "A":
      this.advance()
      return "advance"
  }
}

Robot.prototype.place = function(object){
  this.at(object["x"], object["y"])
  this.orient(object["direction"])
};

Robot.prototype.evaluate = function(instruction) {
  this.instructions(instruction)
};
