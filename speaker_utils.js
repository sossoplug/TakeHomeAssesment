const syllables     = ['B', 'K', 'L', 'R', 'Z', '-'];

function validWord(str) {
    var valid       = false;

    for (let i of str) {
        if (syllables.includes(i.toUpperCase())){
            valid   = true;
            break;
        }
    }

    if (valid)
        return str;
    else
        return "NOT MARTIAN LANGUAGE";

}

exports.food = () => {
    return validWord("-----" + "B--B-K---Z");
}

exports.vomit =() => {
    return validWord("-----" + "BBKZ");
}

exports.sleep = () =>  {
    return validWord("-----" + "B-K-RKK---ZZZ");
}

exports.philosophy = () =>  {
    return validWord("-----" + "BKR-KK-ZZZ");
}
exports.need = () =>  {
    return validWord("-----" + "ZZ-KK");
}
exports.hate = () =>  {
    return validWord("-----" + "KK-ZZ");
}
exports.i = ()  => {
    return validWord("-----" + "L-R-Z");
}
exports.you = () =>  {
    return validWord("-----" + "Z-R-L");
}

exports.rejoice = () => {
    return validWord("-----" + "ZZKK");
}

exports.newSentence = () => {
    return validWord("----------");
    
}