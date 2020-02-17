export const transformValueInPercent = function(valueRate, totalValue){

    let calc = valueRate * 100
    let response = Math.floor(calc/totalValue)

    return response
}