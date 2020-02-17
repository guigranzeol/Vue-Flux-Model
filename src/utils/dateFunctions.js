export const dateFormatDMA = function(date) {
    let data = new Date(date);
    let day = data.getDate().toString().padStart(2, '0');
    let month = (data.getMonth() + 1).toString().padStart(2, '0');
    let fullYear = data.getFullYear();
    
    return day + '/' + month + '/' + fullYear;
}

export const dateFormatDMAHMS = function(date) {
    let data = new Date(date);
    let day = data.getDate().toString().padStart(2, '0');
    let month = (data.getMonth() + 1).toString().padStart(2, '0');
    let fullYear = data.getFullYear();

    let hours = data.getHours().toString().padStart(2, '0');
    let minutes = data.getMinutes().toString().padStart(2, '0');
    let seconds = data.getSeconds().toString().padStart(2, '0');


    
    return day + '/' + month + '/' + fullYear + ' às ' + hours + ':' + minutes + ':' + seconds;
}

export const dateFormatDMAHMStoInputs = function(date, firstHour, addMinute) {
    let hours = ''
    let minutes = ''
    let data = new Date(date);
    let day = data.getDate().toString().padStart(2, '0');
    let month = (data.getMonth() + 1).toString().padStart(2, '0');
    let fullYear = data.getFullYear();
    if(firstHour){
        hours = '00';
        minutes = '00';
    }else{
        hours = data.getHours().toString().padStart(2, '0');      
        minutes = data.getMinutes();
        
        if(addMinute && (minutes+addMinute) < 60){
            minutes = minutes+addMinute
        }
    } 
    
    return fullYear + '-' + month + '-' + day +'T'+  hours + ':' + (minutes.toString().padStart(2, '0')) ;
}