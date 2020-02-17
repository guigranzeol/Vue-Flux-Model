export const toUpperCaseFirstWord = function(text){
    let str = text;
    let qtd = text.length;
    let prim = str.substring(0,1);
    let resto = str.substring(1,qtd);
    str = prim.toUpperCase() + resto;
    text = str;

    return text;
}

export const toUpperCaseFirstLetter = function(text, separator = ' '){
    return text
    .split(separator)
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(separator)
}

export const toLowerCaseAllLetter = function(text){
    return text.toLowerCase();
}
