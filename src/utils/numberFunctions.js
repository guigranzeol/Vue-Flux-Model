export const numberAndnNullTransform = function(value) {
    // value = parseInt(value)
    let response = null
    if(value == undefined){
        response = 0
    }else{
        response = value
    }    
    return parseInt(response);
  }