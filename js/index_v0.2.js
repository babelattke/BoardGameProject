
// creating dice 
var randomNumber = Math.floor(Math.random() * 6) + 1; //Random number for the dice.
var playerDiceImage = "images/dice/dice" + randomNumber + ".png";

document.querySelector('.dice-img').setAttribute('src', playerDiceImage);

// Creating decks
 // Rooms

 var characters = ["ch1","ch2","ch3","ch4","ch5","ch6"];
 var weapons = ["we1","we2","we3","we4","we5","we6"];
 var rooms = ["ro1","ro2","ro3","ro4","ro5","ro6","ro7","ro8","ro9"];

 var superDeck = ["ch1","ch2","ch3","ch4","ch5","ch6",
                "we1","we2","we3","we4","we5","we6",
                "ro1","ro2","ro3","ro4","ro5","ro6","ro7","ro8","ro9"];

var suits = [characters, weapons, rooms];
var playersInGame = 4;
var player1Deck = new Array();
var player2Deck = new Array();
var player3Deck = new Array();
var player4Deck = new Array();
var playersDeck = [player1Deck, player2Deck, player3Deck, player4Deck]

 //var charactersDeck = getDeck(characters);
 var weaponsDeck = new Array();
 var roomsDeck = new Array();
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
suits.forEach(players);

function players(item, index){
    while(item.length > 0){

        
        console.log("TEST" + item[0][0])
        console.log("Suit: " + item + " Index: " + item.length)
        for(var i = 0; i < playersInGame; i++){        
            var randomCard = Math.floor(Math.random() * item.length);

            try {
                if(item[0][0] == "c"){
                    var card = {Characters: item[randomCard]};
                    playersDeck[i].push(card)
                }else if(item[0][0] == "w"){
                    var card = {Weapons: item[randomCard]};
                    playersDeck[i].push(card)
                }else{
                    var card = {Rooms: item[randomCard]};
                    playersDeck[i].push(card)
                }
            } catch (err){
                console.log(err);
            }

            //playersDeck[i].push(item[randomCard]);
            item.splice(randomCard, 1);
            console.log(item);
            console.log("Player " + i + " Deck: " + playersDeck[i]);
            var my_obj_str = JSON.stringify(playersDeck[i]);
            console.log(my_obj_str);
        }          
    }
}

console.log(suits);

/*function mainDeck(){
    var mainDeck = new Array();

    for(var i = 0; i < players; i++){
        for(var x = 0; x < superDeck; x++){
            var card = {Card: superDeck[x], Player: players[i]};
            mainDeck.push(card)
        }
    }
    return mainDeck;   
}
 function getDeck(arr){   
     for(var i = 0; i < arr.length; i++){
         var card = {Value: arr[i]}
         arr.push(card);
     }
     return arr;
 }*/

 function shuffle(deck) //Deck as parameter, characters, weapons or rooms
 {
     //for 100 turns
     //switch the values of two random cards
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
        prefix = "characters"
    }else if(deck[0][0] == "w"){
        prefix = "weapons"
    }else{
        prefix = "rooms"
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
	//deck = getDeck(characters);
	shuffle();
	renderDeck();
}

//window.onload = load;