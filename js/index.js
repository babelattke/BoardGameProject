
// creating dice 
function rollDice(){
    var randomNumber = Math.floor(Math.random() * 6) + 1; //Random number for the dice.
    var playerDiceImage = "images/dice/dice" + randomNumber + ".png";

    document.querySelector('.dice-img').setAttribute('src', playerDiceImage);
}
// Creating decks
 // roomsCards

 var charactersCards = ["C_Madame Rubie",
                        "C_General Umber",
                        "C_Miss Azul",
                        "C_Mr. Pine",
                        "C_Sir Ube",
                        "C_Dr. Rose"];

 var weaponsCards = ["W_Cast Iron Pan",
                     "W_Butcher Knife",
                     "W_Wrench",
                     "W_Revolver",
                     "W_Golf Club",
                     "W_Hammer"];

 var roomsCards = ["R_Sitting Room",
                   "R_Theatre Room",
                   "R_Garden Room",
                   "R_Dining Room",
                   "R_Master Bedroom",
                   "R_Spare Bedroom",
                   "R_Kitchen",
                   "R_Entrance",
                   "R_Game Room"]; 

var suits = [charactersCards, weaponsCards, roomsCards];
var playersInGame = 4;
var player1Deck = new Array();
var player2Deck = new Array();
var player3Deck = new Array();
var player4Deck = new Array();
var playersDeck = [player1Deck, player2Deck, player3Deck, player4Deck]

 //var charactersCardsDeck = getDeck(charactersCards);
 var weaponsCardsDeck = new Array();
 var roomsCardsDeck = new Array();
 var mainDeck = new Array();
 var player0Deck = new Array();
    

 

// Creates the main game by using a Player0/TheCrime!
suits.forEach(player0);

function player0(item, index){    
    var randomCard = Math.floor(Math.random() * item.length);  
    console.log("Card: " + item[randomCard] + " Number: " + randomCard);  
    player0Deck.push(item[randomCard]);
    item.splice(randomCard, 1);
    console.log(item);
    console.log("Player0: " + player0Deck);
}


//Deal the cards for each player
//suits.forEach(players);

const playersArr = [ "P1", "P2", "P3", "P4" ].map(
    name => ({ name, characters: [], weapons: [], rooms: [] })
    );

players();

function players(){
    var cards = charactersCards.concat(weaponsCards, roomsCards);   

    function randUint (max) {
    return Math.floor(Math.random() * max);
    }
    while(cards.length > 0){
        
        for (const player of playersArr) {
        const randomCardIndex = randUint(cards.length),
                randomCard = cards.splice(randomCardIndex, 1)[0];
            //console.log(randomCard[0]);
            try {
                if(randomCard[0] == "C"){
                    player.characters.push(randomCard);
                }else if(randomCard[0] == "W"){
                    player.weapons.push(randomCard);
                }else {
                    player.rooms.push(randomCard);
                }
            } catch (err){
                console.log(err); //Catch the error when there's no more cards to deal.
            }
        }
    }

    var my_obj_str = JSON.stringify(playersArr);            
    console.log("Players " + my_obj_str); 
    renderPlayerCards(playersArr);
    
}
//console.log(suits);

// Test Movement Array

var a = 3;
var b = 3;
var d = 4;
const map = [
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
    [3, 1],
    [3, 2],
    [3, 3],
    [3, 4],    
  ];

var or = map[8];
var de = map[4];
var pos;


testMovement();
  function testMovement(){
      pos = or;
      for(let i = 1; i <= d; i++){
          if((or[0] >= a && or[1] <= a) || (or[1] <= b)){
              for(let j = 1; j <= d; j++){
                pos[1] = pos[1]+1;
              }
          }else if(or[1] >= b && or[0] <= a){
            for(let j = 1; j <= d; j++){
                pos[0] = pos[0]-1;
              }
          }
      }
      console.log("position: " + pos);
  }



// Test Movement Array




function renderPlayerCards(deck){
    document.getElementById("playerDeck".innerHTML = "");
    for(let i = 0; i < deck.length; i++){
        let card =  document.createElement("div");
        let value = document.createElement("div");
        
        card.className = "card";
        value.className = "value";

        value.innerHTML = deck[i].name;
        card.appendChild(value);
        document.getElementById("playerDeck").appendChild(card);        

        console.log("Player: " + deck[i].name);
        console.log("Char: " + deck[i].characters);        
        
        /*var my_obj_str = JSON.stringify(deck);            
        console.log("Render " + my_obj_str); */
    }
}


 function shuffle(deck) //Deck as parameter, charactersCards, weaponsCards or roomsCards
 {     
    for (var i = 0; i < 100; i++)
    {
        var loc1 = Math.floor((Math.random() * deck.length));    
        var loc2 = Math.floor((Math.random() * deck.length)); 
        var tmp = deck[loc1];

        deck[loc1] = deck[loc2];
        deck[loc2] = tmp;
    } 
    renderDeck(deck); 
 }


function renderDeck(deck){
    var prefix;

    if(deck[0][0] == "c"){
        prefix = "charactersCards"
    }else if(deck[0][0] == "w"){
        prefix = "weaponsCards"
    }else{
        prefix = "roomsCards"
    }
    
    document.getElementById(prefix + "-deck").innerHTML = "";

    for (let i = 0; i < deck.length; i++){
        let card = document.createElement("div");
        let value = document.createElement("div");

        card.className = "card";
        value.className = "value";

        //value.innerHTML = deck[i].Value; When the array has an element named Value.
        value.innerHTML = deck[i];
        card.appendChild(value)

        document.getElementById(prefix + "-deck").appendChild(card);
    }    
}

function load()
{
	//deck = getDeck(charactersCards);
	shuffle();
	renderDeck();
}

//window.onload = load;