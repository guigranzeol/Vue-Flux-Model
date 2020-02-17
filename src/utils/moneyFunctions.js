export const convertValueToMoney = function(value) {
    value = parseFloat(value);
    return value.toFixed(2);
  }