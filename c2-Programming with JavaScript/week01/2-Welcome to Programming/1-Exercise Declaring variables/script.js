/* Exercise: Declaring variables
In this exercise, you will practice declaring variables.

To check the output of your code, please enter it into the text box provided and click the "Run" button. This will execute the code and display the resulting output.

Tasks
Declare a new variable named petDog and give it the name Rex.

Declare a new variable named petCat and give it the name Pepper.

Console.log the petDog variable.

Console.log the petCat variable.

Console.log the text "My pet dog's name is: " and the petDog variable.

Console.log the text "My pet cat's name is: " and the petCat variable.

Declare another variable and name it catSound. Assign the string of "purr" to it.

Declare another variable and name it dogSound. Assign the string of "woof" to it.

Console.log the variable petDog, then the string "says", then the variable dogSound.

Console.log the variable petCat, then the string "says", then the variable catSound.

Reassign the value stored in catSound to the string "meow".
 
Console.log the variable petCat, then the string "now says", then the variable catSound. */

var petDog  = "Rex";
var petCat = "Pepper";
console.log(petDog)
console.log(petCat)
console.log("My pet dog's name is: ", petDog );
console.log("My pet cat's name is: ", petCat );
var catSound = "purr";
var dogSound = "woof"
console.log(petDog , "says" , dogSound );
console.log(petCat , "says" , catSound );
catSound = "meow";
console.log(petCat , "now says" , catSound );