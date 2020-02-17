export const removeOverCaractersForNumbers = function(number) {
 
    let newNumber = number;
    newNumber = newNumber.replace(" ", '');
    newNumber = newNumber.replace("/", '');
    newNumber = newNumber.replace(/[.,()-]/g, '');

    return newNumber;
}

export const modifyNumberForMaskPhone = function(value){
    if(value != null){
        let valueLength = value.length
        if(valueLength == 11){
            let a = value.split('');
            return '(' + a[0] + a[1] + ') ' + a[2] + '.' + a[3] + a[4]+ a[5]+ a[6] + '-' + a[7] + a[8] + a[9] + a[10];
        } else if (valueLength == 10){
            let a = value.split('');
            return '(' + a[0] + a[1] + ') ' + a[2] + a[3] + a[4] + a[5] + '-' + a[6] + a[7] + a[8] + a[9];
        } else{
            return value;
        }
    } else{
        return value
    }
}

export const modifyNumberForMaskCPF = function(value){
    if(value != null){
        let valueLength = value.length
        if(valueLength == 11){
            let a = value.split('');
            return a[0] + a[1] + a[2] + '.' + a[3] + a[4]+ a[5] + '.' + a[6] + a[7] + a[8] + '-' + a[9] + a[10];
        } else if (valueLength == 14){
            let a = value.split('');
            return a[0] + a[1] + '.' + a[2] + a[3] + a[4] + '.' + a[5] + a[6] + a[7] + '/' + a[8] + a[9] + a[10] + a[11] + '-' + a[12] + a[13];
        } else{
            return value;
        }
    } else{
        return value
    }
}

export const modifyNumberForMaskRG = function(value){
    if(value != null){
        let valueLength = value.length
        if(valueLength == 10){
            let a = value.split('');
            return a[0] + a[1] + a[2] + '.' + a[3] + a[4]+ a[5] + '.' + a[6] + a[7] + a[8] + '-' + a[9];
        } else{
            return value;
        }
    } else{
        return value
    }
}

export const modifyNumberForMaskCEP = function(value){
    if(value != null){
        let valueLength = value.length
        if(valueLength == 8){
            let a = value.split('');
            return a[0] + a[1] + a[2] + a[3] + a[4] + '-' + a[5] + a[6] + a[7];
        } else{
            return value;
        }
    } else{
        return value
    }
}