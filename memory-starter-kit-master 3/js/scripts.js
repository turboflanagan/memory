// function toggle(theElement){
//     var theElement = document.getElementById(theElement);
    
//     //Show the element or hide it
//     // if ( theElement.style.display != 'block' ) {
//     //     theElement.style.display = 'block';
//     // }else{
//     //     theElement.style.display = 'none';
//     // }

//     //Hide all elements, then show the one we clicked on
//     var elementsToHide = document.getElementsByClassName('mg_tile-inside');
//     for(i=0; i<elementsToHide.length; i++){
//         elementsToHide[i].style.display = 'none';
//     }

//     //Show the element or hide it
//         theElement.style.display = 'block';
// }

var moves=0;
var matches = 0;

$(document).ready(function(){

    //shuffle the element to the back of the div 25 times
    for(i=1;i<25;i++){
        var rand = Math.floor(Math.random() * 8 + 1);
        $('.mg_tile-'+rand).appendTo($('.mg_contents'))
    }

    //Add click listener to each tile
    $('.mg_tile').click(function(){
        //If there are already 2 showing, then hide them all
        if($('.mg_tile-inside:visible').length == 2){
            $('.mg_tile-inside').hide();
            moves++;            
        }

        //Show the tile clicked on
        $(this).find('.mg_tile-inside').show();

        //Now that a tile is up, check to see if there is a match
        if($('.mg_tile-inside:visible').length == 2){
            //Grab visible cards and set them in var
            //Use loop in case we change it to more than 2 matches some day
            var card = [];
            var visibleCards = $('.mg_tile-inside:visible').each(function(i) {
                card.push($(this).attr('card'));
            });
            if(card[0] == card[1]){
                matches++;
                moves++;
                // $('.mg_tile-inside:visible').parent().parent().addClass('matched');
                $('.mg_tile-inside:visible').addClass('mg_tile-inside-matched');
                $('.mg_tile-inside:visible').removeClass('mg_tile-inside');
                if($('.mg_tile-inside').length == 0 ){
                    youWin();
                }
            }
        }
        moveCounter();
        matchCounter();
    });
});

// The moveCounter function returns the number of moves after either selecting two different tiles or 
// finding a matched pair.  It is getting the id "move-counter" and changing the html of it from
// the default "Moves =" to "Moves =" + the number of movers in the var named moves.
function moveCounter(){
    document.getElementById("move-counter").innerHTML = "Moves = " + moves;
}

function matchCounter(){
    document.getElementById("match-counter").innerHTML = "Matches = " + matches;
}

function youWin(){
    alert("You won in " + moves + " moves!");
    $('.mg_tile-inside-matched').addClass('mg_tile-inside');
    $('.mg_tile-inside').removeClass('mg_tile-inside-matched');
    $('.mg_tile-inside').hide();
    moves = 0;
}







//syntax for creating an object:
// var object = {}

// objects are: string, element, document, window,

// an element property is innerHTML.

// examples of building an object:
// var car = {
//     mpg: 42,
//     seats: 4,
//     tires: 4,
//     color: "red",

// }

// var wood = {
//     specie: "oak",
//     color: "red",
//     grain: "open",
//     seed: "acorn"
// }


// var x=0;
// for(i=1; i<=16; i++) {
//     if((i%2)){
//         cardValue = x;
//         x++;
//     }
// }

// console.log(x)







































