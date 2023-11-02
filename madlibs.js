/*
BE KIND
Be kind to your NOUN-footed NOUNPLURAL
For a duck may be somebody`s NOUN,
Be kind to your NOUNPLURAL in PLACE
Where the weather is always ADJ.

You may think that this is the NOUN,
Well it is. 
*/

/*
LETTER FROM CAMP
 Dear RELATIVE,
I am having a(n) ADJ time at camp.
The counselour is ADJ and the food is ADJ.
I met NAME and we became ADJ friends.
Unfortunately, NAME is ADJ and I
VERB-ED my BODY-PART so we couldn`t go
VERB-ING like everybody else. I need more NOUN-PL
and a NOUN sharpener, so please ADVERB VERB more
when you VERB back.
Your RELATIVE,
NAME
*/

/*
ROMEO AND JULIETTE PROLOGUE
Two NOUN-PL, both alike in dignity,
In fair PLACE, where we lay our scene,
From ancient NOUN break to new mutiny,
Where civil blood makes civil hands unclean.
From forth the fatal loins of these two foes
A pair of star-cross`d NOUN-PL take their life;
Whole misadventured piteous overthrows
Do with their NOUN bury their parents` strife.
The fearful passage of their ADJ love,
And the continuance of their parents` rage,
Which, but their children`s end, nought could VERB,
Is now the NUMBER hours` traffic of our stage;
The which if you with ADJ BODY-PART attend,
What here shall VERB, our toil shall strive to mend. 
*/

/* 
OLD MCDONALD
ADJ Macdonald had a NOUN, E-I-E-I-O
and on that NOUN he had an ANIMAL, E-I-E-I-O
with a NOISE NOISE here
and a NOISE NOISE there,
here a NOISE, there a NOISE,
everywhere a NOISE NOISE,
ADJ Macdonald had a NOUN, E-I-E-I-O.
*/

/*
Valentine`s Cards
Be my NOUN
---
NOUN-PL make the world go ADJ
---
Pickachu says "I VERB you"
---
I love NOUN-PL, COLOUR does too
---
You make my BODY-PART flutter 
*/

"use strict";
var readlineSync = require('readline-sync');

/////////////////////////////////////
// Breanna Young
// Nov 2
// Madlibs
/////////////////////////////////////


function validateNumericInput(userChoice, madlibsList)
{
    if(Number.isInteger(userChoice) == true){
        if((userChoice > 0) && (userChoice <= madlibsList.length)){
            return true;
        }
        else{
            console.log("That's not a valid choice.");
            return false;
        }
    }
    else{
        console.log("Looks like you didn't enter an integer, please try again.");
        return false;
    }
}







function main()
{
    var madlibsArrays = [
        [
            "noun",
            "plural noun",
            "noun",
            "place",
            "adjective",
            "noun",
        ],

        [
            "relative's name",
            "adjective",
            "adjective",
            "adjective",
            "friend's name",
            "adjective",
            "adjective",
            "verb ending in 'ed'",
            "body part",
            "verb ending in 'ing'",
            "plural noun",
            "noun",
            "adverb",
            "verb",
            "verb",
            "term for relative (neice, brother, etc)",
            "name",
        ],

        [
            "plural noun",
            "place",
            "noun",
            "plural noun",
            "noun",
            "adjective",
            "verb",
            "number",
            "adjective",
            "body part",
            "verb",

        ],
        
        [
            "adjective",
            "noun",
            "animal",
            "noise",
        ],

        [
            "noun",
            "plural noun",
            "adjective",
            "verb",
            "plural noun",
            "colour",
        ]
    ]
    var madlibsOptions=["Be Kind", "Letter from Camp", "Romeo and Juliette Prologue", "Old MacDonald", "Valentine`s Cards",];
    for(var i = 0; i < madlibsOptions.length; i++){
        console.log(`[${i+1}] ${madlibsOptions[i]}`);
    }

    var inputValidation = false;
    while(inputValidation == false){
        var userChoice = parseInt(readlineSync.question("Which madlibs would you like to play? "));
        var inputValidation = validateNumericInput(userChoice, madlibsOptions);
    }

    var madLibsList = [];

    for(var i = 0; i < madlibsArrays[userChoice-1].length; i++){
        var madlibsInput = readlineSync.question(`Please input a ${madlibsArrays[userChoice-1][i]}: `);
        madLibsList.push(madlibsInput);
    }

    if (userChoice == 1){
        console.log(`Be kind to your ${madLibsList[0]}-footed ${madLibsList[1]};\nFor a duck may be somebody's ${madLibsList[2]},\nBe kind to your ${madLibsList[1]} in ${madLibsList[3]}\nWhere the weather is always ${madLibsList[4]}.\n\nYou may think that this is the ${madLibsList[5]},\nWell it is. `);
    }

    else if (userChoice == 2){
        console.log(`Dear ${madLibsList[0]},\nI am having a(n) ${madLibsList[1]} time at camp. The counselour is ${madLibsList[2]} and the food is ${madLibsList[3]}. I met ${madLibsList[4]} and we became ${madLibsList[5]} friends. Unfortunately, ${madLibsList[4]} is ${madLibsList[6]} and I ${madLibsList[7]} my ${madLibsList[8]} so we couldn't go ${madLibsList[9]} like everybody else. I need more ${madLibsList[10]} and a ${madLibsList[11]} sharpener, so please ${madLibsList[12]} ${madLibsList[13]} more when you ${madLibsList[14]} back.\nYour ${madLibsList[15]},\n${madLibsList[16]}`);
    }
    
    else if (userChoice == 3){
        console.log(`Two ${madLibsList[0]}, both alike in dignity,\nIn fair ${madLibsList[1]}, where we lay our scene,\nFrom ancient ${madLibsList[2]} break to new mutiny,\nWhere civil blood makes civil hands unclean.\nFrom forth the fatal loins of these two foes\nA pair of star-cross'd ${madLibsList[3]} take their life;\nWhole misadventured piteous overthrows\nDo with their ${madLibsList[4]} bury their parents' strife.\nThe fearful passage of their ${madLibsList[5]} love,\nAnd the continuance of their parents' rage,\nWhich, but their children's end, nought could ${madLibsList[6]},\nIs now the ${madLibsList[7]} hours' traffic of our stage;\nThe which if you with ${madLibsList[8]} ${madLibsList[9]} attend,\nWhat here shall ${madLibsList[10]}, our toil shall strive to mend. `);
    }

    else if (userChoice == 4){
        console.log(`${madLibsList[0]} Macdonald had a ${madLibsList[1]}, E-I-E-I-O\nand on that ${madLibsList[1]} he had an ${madLibsList[2]}, E-I-E-I-O\nwith a ${madLibsList[3]} ${madLibsList[3]} here\nand a ${madLibsList[3]} ${madLibsList[3]} there,\nhere a ${madLibsList[3]}, there a ${madLibsList[3]},\neverywhere a ${madLibsList[3]} ${madLibsList[3]},\n${madLibsList[0]} Macdonald had a ${madLibsList[1]}, E-I-E-I-O. `)
    }

    else if (userChoice == 5){
        console.log(`Be my ${madLibsList[0]}\n-~-\n${madLibsList[1]} make the world go ${madLibsList[2]}\n~-~\nPickachu says "I ${madLibsList[3]} you"\n-~-\nI love ${madLibsList[4]}, ${madLibsList[5]} does too\n~-~\nYou make my ${madLibsList[6]} flutter `)
    }
}


if (require.main === module)
{
    main();
}
