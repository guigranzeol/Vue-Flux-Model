export const rulesValidationFunction = function(name, lengthNeed){
    if(lengthNeed){
      return  [
      v => !!v || "Por favor insira" + name,
      v => (v && v.length >= lengthNeed) || `Por favor insira ${name}  válido`
    ]
    }else{
      return [v => !!v || "Por favor insira " + name]
    }
  }