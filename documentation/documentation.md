<b> Documentation for the Scratch-Next Development Tools </b>

<b> Blocks </b>

"get U profile" - this returns the username, userID, and friend code of the player. This is a good block to use if making a multiplayer game.

"save [data] to console as [name]" - This saves a string (the [data] variable) under the name of whatever you put the [name] variable as. for example, if i want to save a high score, i simply run this block:
![Image](https://github.com/Cube-Enix/Cube-Enix.github.io/blob/main/documentation/images/8E821943-224D-47B1-9B42-F2401E3C4FF9.jpeg)

in the "Game Over!" broadcast block, i check if the score the player achieved is higher than the high score already saved. if so, then the high score block is set to thr current local score, and we run the SaveToConsole method, buy we imput the "high score" variable to save. and we name it "high score" since we save it with that name.
