import Vue from 'vue'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/index.css';

Vue.use(VueToast);

export const toastAlert = function(type) {
    if (sessionStorage.toastMsg) {
        setTimeout(function(){ sessionStorage.removeItem("toastMsg") }, 6000);
        return Vue.$toast.open({
            message: sessionStorage.toastMsg,
            type: type
          });
    }
       
}