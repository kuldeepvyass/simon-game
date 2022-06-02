var userpattern=[];
var gamepattern=[];
var start=false;
var level=0;
var comp;
$(document).keypress(function(){
     if(!start){
      $("h1").text("level "+level);
      generatenumber();
      start=true;
    }
})
$(".butt").click(function(){
   var userChosenColour = $(this).attr("id");
   console.log(userChosenColour);
   userpattern.push(userChosenColour);
   addsound(userChosenColour);
   animate(userChosenColour);
   check(userpattern.length-1);
})
function animate(id){
    $("#"+id).addClass("pressed");
    setTimeout(() => {
        $("#"+id).removeClass("pressed");
    }, 300);
}
function generatenumber(){
    userpattern = [];
  
    var x=Math.floor(Math.random()*4)+1;
    level+=1;
    $("h1").text("level "+level);
    gamepattern.push("b"+x);
    console.log("its game b"+x)
    $("#b"+x ).fadeIn(100).fadeOut(100).fadeIn(100);
    addsound("b"+x);
}
function addsound(id){
     var audio = new Audio("sounds/"+id+".mp3");
     audio.play();
}
function check(currlevel)
{
    if(userpattern[currlevel]==gamepattern[currlevel])
    {
        if (userpattern.length === gamepattern.length){

            //15. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
                generatenumber();
              }, 1000);
    
            }
    
          } else {
    
            // console.log("wrong");
    
            //16. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
            addsound("wrong");
    
            //17. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
            $("body").addClass("game-over");
            setTimeout(function () {
              $("body").removeClass("game-over");
            }, 200);
    
            //18. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
            $("h1").text("Game Over, Press Any Key to Restart");
    
            //19. Call startOver() if the user gets the sequence wrong.
            startOver();
    
          }
    
}
function startOver() {

    //36. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
    level = 0;
    gamepattern = [];
    start = false;
  }
  