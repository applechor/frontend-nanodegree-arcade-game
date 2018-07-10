# The Classic Arcade Game project

The Classic Arcade Game project is an interactive game with JavaScript’s object oriented programming. By using the arrow keys on the keyboard to move the Player object reaches the water without collision with the many hundreds of Enemy objects.


## Table of Contents

* Instructions

* Detail of Classic Arcade Game

* Reference Resource


## Instructions

* open `index.html` with browser to play the game

* open `css/app.css` with text editor to see how to use CSS stylings the web page

* open `img` folder to see the images which are drawn on a canvas

* open `js/app.js` with text editor to explore the methods on player and enemy objects 

* open `js/engine.js` with text editor to explore 
  * the game loop functionality, 
  * draws the initial game board on the screen 
  * calls methods which defined in `js/app.js` 

* open `js/resources.js` with text editor to explore the process of loading image files


## Detail of Classic Arcade Game

In Classic Arcade Game, there are a Player and hunreds of Enemies(bug). The goal is the player reaches the water, without collide any enemies

### The Game Process:-

* The Player's position is set at the initial position

* The user can control the Player by using the arrow keys on the keyboard as 
  * if left arrow keys are pressed, the Player move to the left on the canvas 
  * if right arrow keys are pressed, the Player move to the right on the canvas
  * if up arrow keys are pressed, the Player move to the up on the canvas
  * if down arrow keys are pressed, the Player move to the down on the canvas

* The user must aviod the Player collide with Enemies which move in different speed on the stone block

* The score will increase each time the player reaches the water

* If the Player-Enemy collision happen, the Player move back to initial position and score can be reset to 0  


## Reference Resource
  
   * [Object-Oriented JavaScript Notes](https://docs.google.com/document/d/1F9DY2TtWbI29KSEIot1WXRqqao7OCd7OOC2W3oubSmc/pub?embedded=true)
  
  * [OOP in JS](http://phrogz.net/js/classes/OOPinJS2.html)
  
  * [2D collision detection](https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection)
  
  * [JavaScript Random](https://www.w3schools.com/js/js_random.asp)
