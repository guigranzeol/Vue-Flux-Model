import store from '@/store/index'

export const spinnerChoice = function(choice, result) {
    switch (choice) {
        case 'modal':  store.dispatch('Spinner/setModalSpiner', result)
        break;

        case 'full': store.dispatch('Spinner/setSpinnerFullScreen', result)
        break;        
    }
}