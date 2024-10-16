//1. slice
let fullName = "Samuel Gallo";

slice(2,8)

function slice(start, end){
    let slicedCharacters = "";
    
    for(let i = start; i < end; i++){
         slicedCharacters += fullName[i];
    }
    console.log(slicedCharacters);
}

//2. replace
let wordOne = "Honeycomb"

replace()

function replace(){
    let takenCharacters = "";
    let addWord = " Badger";

    for(let i = 0; i < wordOne.length - 4; i++){
        takenCharacters += wordOne[i];
    }
    console.log(takenCharacters + addWord);
}


//3. replaceAll
let wordTwo = "Assess";

replaceAll()

function replaceAll(){
    let removeLetters = "";

    for(let i = 0; i < wordTwo.length; i++){
        if(wordTwo[i] !== "s"){
            removeLetters += wordTwo[i];
        }
    }
    console.log(removeLetters[0] + "zz" + removeLetters[1] + "zz");
}


//4. concat
let fname = "Samuel";
let lname = " Gallo";

concat()

function concat(){
    //Adds the two variables together 
    fname += lname
    

    console.log(fname);
}


//5. charAt
let randoWord = "Chicken"

//Takes the letter "k"
charAt(4);

function charAt(takeCharacter){
    let takenLetter = randoWord[takeCharacter];

    console.log(takenLetter);
}
