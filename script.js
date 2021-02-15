
var character = document.getElementById("character");
var enemy = document.getElementById("enemy");

//adding the animate function in the css here, so it is applied to our character
function jump(){
    //ifyou spam and keep jumping
    //it will keep adding the class over and over
    //only want to add class animate if it hasn't been added (hence the if)
    if(character.classlist!="animate"){
    character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
    
}
//hit detection - functions runs every 10ms checks if lost
//variable called checkDead
//set to setInterval which takes two arguments (function and time in milliseconds)

var checkDead =setInterval(function(){
    //get top position of character (parseInt to get rid of px)
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    //get left position of the enemy
    var enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));
    
    //now to see if character and enemy are colliding
    //if the top of our main guy hits the left of the enemy -it's bad
    //if enemy left is less than 20 AND enemy is greater than 0 (in between 0 and 20 - under the character) AND the charactertop is
    //greater than x (it has jumped less than the height of block)
    console.log(characterTop);
    if(
        enemyLeft<30 && enemyLeft>0 && characterTop>=360
    )
    {
        enemy.style.animation="none"; //remove the animation
        enemy.style.display="none";
        alert("Poke.....I got you there!");
        
    }
},10);

addEventListener("keyup", function(e) {
    if(e.keyCode == 38) jump()
})