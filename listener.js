
const { io }            = require("socket.io-client");
const socket            = io("ws://localhost:3000");
const syllables         = ['B', 'K', 'L', 'R', 'Z', '-'];
const word_Regex        = /[-]{5}/;
const sentence_Regex    = /[-]{10}/;
const translate_Regex   = /(?<=[BKLRZ-])[\s]{1}/;

var sms_builder         = "";
var translation         = "";
var character_array     = [];
var checking_state      = null;

const dictionnary      = new Map([
    ["B--B-K---Z"    , "food"],
    ["BBKZ"          , "vomit"],
    ["B-K-RKK---ZZZ" , "sleep"],
    ["BKR-KK-ZZZ"    , "philosophy"],
    ["ZZ-KK"         , "need"],
    ["KK-ZZ"         , "hate"],
    ["L-R-Z"         ,"i"],
    ["Z-R-L"         , "you"],
    ["ZZKK"          , "rejoice"],
    ["BBB-KKK-LLL-RRR-ZZZ", "========= End /\ Start of Sentence ========="]           
])

syllables.forEach((s) => {
    socket.on(s, (...args) => {
        try{
            character_array.push(s);
            sms_builder         += s;
            
            if (character_array.length >= 7)
                setState();

            if (checking_state == 1)
                findSentence();   
            
            if (checking_state == 0)
                findWord();
            
            lookForTranslation();
        }
        catch (error) {
            console.error(error);
        }
    });

});

function setState(){
    var word_mode   = false ;
    //the last 7 seven characters determine if we are looking for a word or a sentence
    for (var i=character_array.length-1; i > (character_array.length - 7) ; i--) {
        if (character_array[i] != '-'){
            character_array     = [];
            word_mode           = true;
            checking_state      = 0;
            break;
        }
    }

    if (!word_mode) {
        checking_state      = 1;
    }
    else{
        checking_state      = 0;
    }
}

function findWord(){
    // // detect a WORD
    if (pattern(word_Regex, sms_builder)){
        sms_builder     = sms_builder.replace(word_Regex,"  ").replace("  ", " ");
    }
}

function findSentence(){
    // // detect a sentence
    if (pattern(sentence_Regex, sms_builder)) {
        sms_builder = sms_builder.replace(sentence_Regex,' BBB-KKK-LLL-RRR-ZZZ ').replace("  ", " ");
    }
}

function lookForTranslation(){
    // find a Martian word
    if (pattern(translate_Regex, sms_builder)) {
        translation         = sms_builder.replace("  ", "").replace(" ", "");
        translateAndPrint(translation);
        sms_builder         = "";
    }
}


function translateAndPrint(str){
    try{
        real_str = String(str.replace(" ", ""))
        if(dictionnary.has(real_str)){
            console.log(dictionnary.get(real_str));
        }
        else{
            console.log("== NOT FOUND == " + real_str + " == NOT FOUND ==");
        }
        str = "";
    }           
    catch (error) {
        console.error(error);
    }
}

// look For regex pattern
function pattern(regex_pattern, string){
    if (regex_pattern.test(string)) {
        return true;
    }
    else{
        return false;
    }
}


module.exports.pattern = pattern(regex_pattern, string);