export const baseApiUrl = 'http://127.0.0.1:8000/api';

export const catchError = function(e){
    alert(`Algo deu errado tente novamente!!! ... ${e}`)
};


export default { baseApiUrl, catchError };