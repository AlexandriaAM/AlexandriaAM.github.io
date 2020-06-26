
var allProps = [];

var objectsArray = [];
var speed = 1;

function Shapes(xpos,ypos,radi,author,mood,text) {
  this.x = xpos;
  this.y = ypos;
  this.r = radi;
  this.author = author;
  this.shape = getshape(author); 
  this.mood = mood;
  this.color = getcolor(mood);
  this.memory = text; 
    this.update = function () { 
      if(this.memory == 0) { 
        this.memory == Math.floor(Math.random()*10) - 1;
    } 
}
}

function getshape (a) {
  if (a == "Emily Dickison") { 
    return "triangle" }

  if (a == "Edgar Allan Poe") {
    return "ellipse"}

  if(a == "Emily Bronte") {
    return "rectangle"}

  if(a == "Hozier") {
    return "line"}
}


function getcolor(m) { 
  if(m == "death") {
    return "red"}

  if(m == "fear") { 
    return "blue"}

  if(m == "love") {
    return "yellow"}

  if (m == "pain") {
    return "black"}

  if(m == "tragedy"){
    return "pink"}
}

// how should I use this? 

Shapes.prototype.display = function() {
  
  fill(this.color)
  ellipse(this.x,this.y,this.r,this.r)

}

Shapes.prototype.getMoving = function() { 

    this.x +=
    this.x = Math.floor(Math.random() * 2) - 1; 
    
   
	this.y += speed

	  if(this.y > windowHeight) { 
	    this.y = 0
	  }

} 

Shapes.prototype.checkint = function(mx,my) {
 
  var MouseYes = dist(this.x,this.y, mx,my);
  if(MouseYes < this.r) { 
  ellipse(this.x,this.y,26,26)
  
  console.log(this.memory)  
  document.getElementById("mymemory").innerHTML=this.memory

  }

}



function setup() {
//   These lines set up the basic background size and color
  createCanvas(windowWidth,windowHeight)
  background(255, 255, 255)

// building your data object
  var propsArray = properties.split("\n"); // this is done to get an array of rows 

  var theProps = propsArray[0].split("||");  // this is done to get an array of all properties in the row..? 

 


    for(var i=1; i<propsArray.length; i++) {  // looping through each row of properities starting at 1 
        var myObject={};
    var thisProp=propsArray[i].split("||")
      for(var j=0; j<thisProp.length; j++) {  // looping through each || for every property. this is the column 
         
        if(theProps[j] != "text") {
          
          myObject[theProps[j]] = thisProp[j]
        } 
        else{
            myObject[theProps[j]] = window[thisProp[j]].split("\n");

          }
      }

    objectsArray.push(myObject);

   }
// building your shaped objects


     for (var i=0; i < 50; i++) { //looping through all the properties in function Props
      for (var j=0; j < 50;j++) {

        var x = 20 + i*40;
        var y = 50+j*30;
        var r = 8; 
        
        var randomObject = Math.floor(Math.random() * objectsArray.length) 

        var myAuthor = objectsArray[randomObject].author;
        console.log(myAuthor);
        var myMood = objectsArray[randomObject].mood; 
        
        var myTitle = objectsArray[randomObject].title; 

        
        var myText = objectsArray[randomObject].text; 
       
        var randomLine = Math.floor(Math.random() * myText.length);
        
        var myLine = myText[randomLine];

        
        // the Author corresponds to title ... 
        // the Title corresponds to author ... 
        // the Text corresponds to the mood ... 
        // the Mood corresponds to the color ... 


        // before the push, try to get the three final parts of the data out of the objects
        
        // the best way to do this would be to get a random object out of the objectsArray
        // then get the Author from that object
        // then get the mood from that object
        // then get a random line from the text property from that object
        // make variables that hold each one of those and put them into the parameters below
    
        
        allProps.push(new Shapes(x,y,r,myAuthor,myMood,myLine));
     	}
   }



}


function draw() {
	background(255, 255, 255)

 for (var i=0; i < allProps.length; i++) {

  allProps[i].getMoving()
  
  allProps[i].display()

  allProps[i].checkint(mouseX,mouseY)

}


}




