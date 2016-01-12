//This code will be for the graduation problem on http://www.cplusplus.com/articles/N6vU7k9E/

function bunny(sex,color,age,Name,zombie_bunny){
  this.sex = sex;
  this.col = color;
  this.age = age;
  this.Name = Name;
  this.zombie_bunny = zombie_bunny;
}

var bunnies = [];
var bunnyNames = ["Fufu","Fifi","Jon Snuh","Fluffy","Spiffy","Sneaky","Rapid","Blueberry", "Blizzard", "Boomerang", "Boots", "Bon-Bon", "Bonnie", "Boo Boo",
      "Frigg", "Frodo", "Frosty", "Fudge", "Fuji","Gala", "Galahad", "Galaxy", "Galileo","Radar","Sage","Tabasco"
      ];
var sexes = ["male,female"];
var colors = ["white","brown","black","spotted"];
var numStart = 5;
//**Basic logic of entire game**//
//Intialize 5 bunnies// 
  //Advance 1 turn//
intialize(numStart);
console.log(bunnies)
nextTurn();

//************Functions************//
//***Inialize***//
function intialize(num){
  //create 5 bunnies with random names/colors/sex
  for(var i=0; i<num;i++){
    var sex = sexes[randomizer("sex")];       //Setting variables to hold random inputs
    var color = colors[randomizer("color")];  // for new rabbits. Get feed a random number between
    var Name = bunnyNames[randomizer("name")];// 0 to (array.length - 1) to select from the given arrays
    var zomb = randomizer();                  // holds true or false 

    bunnies.push(new bunny(sex,color,0,Name,zomb)); //creates new bunnies from bunny object and pushes it into bunnies array
  }
};
//***randomizer***//
function randomizer(parameter){         // This function just returns an integer at random
  var num = 1;
  var seed =1;
  if(parameter === "sex"){
    num = sexes.length;
  } else if (parameter === "color"){
    num = colors.length;
  } else if (parameter === "name"){
    num = bunnyNames.length;
  } else {
    seed = Math.random();               // besides here where it will return true or false
    if(seed<.02){                       //to determine if bunny is a zombie or not
      return true;
    } else {
      return false;
    }
  }

  seed = Math.floor(Math.random() * num);
  return seed;
};
//***NextTurn***//
function nextTurn(){
  //bunnies age 1 year  
  //bunnies procreate if 1 male and 1 female adult (2years+)
  //if bunny older than 10 years old than it dies!!!
  //radioactive bunny (calling them zombie bunnies) will turn one bunny for each zombie bunny
  //zombie bunnies can't procreate and die at age 50
  // Should display births and deaths
  //bunny culling must happen at 1000 bunnies
  //test
};